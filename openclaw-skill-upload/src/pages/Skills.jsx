import React, { useState, useEffect } from 'react';
import { fetchSkills } from '../services/api';
import { Bot, CheckCircle2, XCircle } from 'lucide-react';

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const loadSkills = async () => {
      const data = await fetchSkills();
      setSkills(data);
    };
    loadSkills();
  }, []);

  return (
    <>
      <div className="topbar">
        <h2>Skills</h2>
      </div>
      <div className="page-container">
        <h1 className="page-title">Halaman Skill</h1>
        
        <div className="skills-grid">
          {skills.map(skill => (
            <div key={skill.id} className="skill-card">
              <div className="skill-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Bot size={24} color="#a78bfa" />
                  <span className="skill-title">{skill.name}</span>
                </div>
                {skill.status === 'active' ? (
                  <CheckCircle2 size={20} color="#10b981" />
                ) : (
                  <XCircle size={20} color="#ef4444" />
                )}
              </div>
              
              <p className="skill-desc">{skill.description}</p>
              
              <div className="skill-footer">
                <span style={{ color: 'var(--text-muted)' }}>Author: {skill.author}</span>
                <span className={`badge ${skill.status === 'active' ? 'badge-green' : 'badge-blue'}`}>
                  {skill.status.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
