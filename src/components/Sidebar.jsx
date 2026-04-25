import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Box, GitMerge } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Box size={24} color="#3b82f6" />
        <span>OpenClaw Dashboard</span>
      </div>
      <div className="sidebar-nav">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
        >
          <LayoutDashboard size={20} />
          Halaman Utama
        </NavLink>
        <NavLink 
          to="/skills" 
          className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
        >
          <Box size={20} />
          Halaman Skill
        </NavLink>
        <NavLink 
          to="/workflow" 
          className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
        >
          <GitMerge size={20} />
          Halaman Flow
        </NavLink>
      </div>
    </div>
  );
}
