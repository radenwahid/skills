import { mockSkills, mockWorkflows } from '../data/mockData';
import { CONFIG, getApiUrl } from '../config';

const API_URL = getApiUrl();
const useMockData = !API_URL;

const getHeaders = () => {
  const headers = { 'Content-Type': 'application/json' };
  if (CONFIG.API_KEY) {
    headers['Authorization'] = `Bearer ${CONFIG.API_KEY}`;
  }
  return headers;
};

export const fetchSkills = async () => {
  if (useMockData) return mockSkills;
  
  try {
    const res = await fetch(`${API_URL}/api/skills`, { headers: getHeaders() });
    if (!res.ok) throw new Error('Failed to fetch skills');
    return await res.json();
  } catch (error) {
    console.warn("API Error (Skills) - Falling back to Mock Data", error);
    return mockSkills;
  }
};

export const fetchWorkflows = async () => {
  if (useMockData) return mockWorkflows;
  
  try {
    const res = await fetch(`${API_URL}/api/workflows`, { headers: getHeaders() });
    if (!res.ok) throw new Error('Failed to fetch workflows');
    return await res.json();
  } catch (error) {
    console.warn("API Error (Workflows) - Falling back to Mock Data", error);
    return mockWorkflows;
  }
};

export const fetchWorkflowStatus = async (workflowId) => {
  if (useMockData) {
    // For mock, we don't have a backend to advance the state.
    // The simulation will be handled locally in the UI.
    const wf = mockWorkflows.find(w => w.id === workflowId);
    return { currentStepIndex: wf ? wf.currentStepIndex : 0 };
  }
  
  try {
    const res = await fetch(`${API_URL}/api/workflows/${workflowId}/status`, { headers: getHeaders() });
    if (!res.ok) throw new Error('Failed to fetch workflow status');
    return await res.json();
  } catch (error) {
    console.warn("API Error (Status) - Simulation will be handled locally.", error);
    return null;
  }
};
