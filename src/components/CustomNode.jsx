import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';

export default memo(({ data }) => {
  return (
    <div className={`custom-node ${data.status}`}>
      <Handle type="target" position={Position.Top} className="!bg-slate-400" />
      
      <div className="custom-node-header">
        Step {data.stepNumber}
      </div>
      <div className="custom-node-title">
        {data.label}
      </div>
      <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
        {data.statusText}
      </div>
      
      <Handle type="source" position={Position.Bottom} className="!bg-slate-400" />
    </div>
  );
});
