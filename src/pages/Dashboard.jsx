import React, { useState, useEffect } from 'react';
import { fetchSkills, fetchWorkflows } from '../services/api';
import { Activity, Code, Server } from 'lucide-react';

export default function Dashboard() {
  const [stats, setStats] = useState({ skillsCount: 0, workflowsCount: 0 });

  useEffect(() => {
    const loadData = async () => {
      const skills = await fetchSkills();
      const workflows = await fetchWorkflows();
      setStats({
        skillsCount: skills.length,
        workflowsCount: workflows.length
      });
    };
    loadData();
  }, []);

  return (
    <>
      <div className="topbar">
        <h2>Dashboard</h2>
      </div>
      <div className="page-container">
        <h1 className="page-title">Halaman Utama</h1>
        
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-title">Total Skills</div>
            <div className="stat-value">{stats.skillsCount}</div>
            <Code size={24} color="#3b82f6" style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', opacity: 0.2 }} />
          </div>
          <div className="stat-card">
            <div className="stat-title">Active Workflows</div>
            <div className="stat-value">{stats.workflowsCount}</div>
            <Activity size={24} color="#10b981" style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', opacity: 0.2 }} />
          </div>
          <div className="stat-card">
            <div className="stat-title">System Status</div>
            <div className="stat-value" style={{ color: '#10b981', fontSize: '1.5rem' }}>Online</div>
            <Server size={24} color="#10b981" style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', opacity: 0.2 }} />
          </div>
        </div>

        <div className="stat-card" style={{ marginTop: '2rem' }}>
          <h3 style={{ marginBottom: '1rem' }}>Welcome to OpenClaw Dashboard</h3>
          <p style={{ color: 'var(--text-muted)' }}>
            This is your central hub for managing and visualizing your OpenClaw bot skills and workflows.
            Navigate to the <strong>Halaman Skill</strong> to view installed capabilities or <strong>Halaman Flow</strong> to see real-time workflow executions in a visual node-based graph.
          </p>
        </div>
      </div>
    </>
  );
}
