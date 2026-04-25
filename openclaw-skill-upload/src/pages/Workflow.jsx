import React, { useState, useMemo, useEffect } from 'react';
import { fetchWorkflows, fetchWorkflowStatus } from '../services/api';
import { parseMarkdownToFlow } from '../utils/markdownParser';
import { ReactFlow, Controls, Background, applyNodeChanges, applyEdgeChanges } from '@xyflow/react';
import CustomNode from '../components/CustomNode';

const nodeTypes = {
  customNode: CustomNode,
};

export default function Workflow() {
  const [workflows, setWorkflows] = useState([]);
  const [activeTabIds, setActiveTabIds] = useState([]);
  const [currentWfId, setCurrentWfId] = useState('');
  
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const [currentStep, setCurrentStep] = useState(0);

  // Initialize workflows list
  useEffect(() => {
    const loadWorkflows = async () => {
      const data = await fetchWorkflows();
      setWorkflows(data);
      if (data.length > 0) {
        setActiveTabIds([data[0].id]);
        setCurrentWfId(data[0].id);
      }
    };
    loadWorkflows();
  }, []);

  const currentWorkflow = useMemo(() => {
    return workflows.find(w => w.id === currentWfId);
  }, [workflows, currentWfId]);

  // Polling logic for current workflow
  useEffect(() => {
    if (!currentWfId) return;

    let localSimulationTick = 0; // fallback tick if no API

    const checkStatus = async () => {
      const statusData = await fetchWorkflowStatus(currentWfId);
      if (statusData !== null) {
        // Real API data
        setCurrentStep(statusData.currentStepIndex);
      } else if (currentWorkflow) {
        // Fallback simulation behavior
        localSimulationTick++;
        setCurrentStep((currentWorkflow.currentStepIndex + localSimulationTick) % 10);
      }
    };

    // Check immediately
    checkStatus();

    // Poll every 3 seconds
    const interval = setInterval(checkStatus, 3000);
    return () => clearInterval(interval);
  }, [currentWfId, currentWorkflow]);

  // Update nodes when workflow or step changes
  useEffect(() => {
    if (currentWorkflow) {
      const { nodes: initialNodes, edges: initialEdges } = parseMarkdownToFlow(
        currentWorkflow.markdown, 
        currentStep
      );
      setNodes(initialNodes);
      setEdges(initialEdges);
    }
  }, [currentWorkflow, currentStep]);


  const onNodesChange = (changes) => setNodes((nds) => applyNodeChanges(changes, nds));
  const onEdgesChange = (changes) => setEdges((eds) => applyEdgeChanges(changes, eds));

  const handleSelectWorkflow = (e) => {
    const id = e.target.value;
    if (id && !activeTabIds.includes(id)) {
      setActiveTabIds([...activeTabIds, id]);
    }
    setCurrentWfId(id);
    setCurrentStep(0);
  };

  const handleTabClick = (id) => {
    setCurrentWfId(id);
    setCurrentStep(0);
  };

  return (
    <>
      <div className="topbar">
        <h2>Workflows</h2>
      </div>
      <div className="page-container" style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 64px)' }}>
        <h1 className="page-title">Halaman Flow</h1>
        
        <div className="workflow-controls">
          <select 
            className="select-input" 
            value={currentWfId} 
            onChange={handleSelectWorkflow}
          >
            <option value="" disabled>Select a workflow to open</option>
            {workflows.map(wf => (
              <option key={wf.id} value={wf.id}>{wf.name}</option>
            ))}
          </select>
        </div>

        <div className="tabs-container">
          {activeTabIds.map(id => {
            const wf = workflows.find(w => w.id === id);
            return (
              <button 
                key={id}
                className={`tab ${currentWfId === id ? 'active' : ''}`}
                onClick={() => handleTabClick(id)}
              >
                {wf?.name}
              </button>
            )
          })}
        </div>

        <div className="flow-wrapper">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            nodeTypes={nodeTypes}
            fitView
            attributionPosition="bottom-left"
          >
            <Background color="#334155" gap={16} />
            <Controls />
          </ReactFlow>
        </div>
      </div>
    </>
  );
}
