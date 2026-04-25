export function parseMarkdownToFlow(markdownText, currentStepIndex = 0) {
  const lines = markdownText.split('\n');
  const nodes = [];
  const edges = [];
  let stepCount = 0;

  lines.forEach((line) => {
    // Look for markdown headers as steps
    const match = line.match(/^(#+)\s+(.*)$/);
    if (match) {
      const stepName = match[2].trim();
      const isCurrent = stepCount === currentStepIndex;
      const isCompleted = stepCount < currentStepIndex;
      
      let statusClass = 'status-pending';
      let statusText = 'Pending';
      if (isCurrent) {
        statusClass = 'status-active';
        statusText = 'In Progress';
      } else if (isCompleted) {
        statusClass = 'status-completed';
        statusText = 'Done';
      }

      nodes.push({
        id: `node-${stepCount}`,
        type: 'customNode', // We will define this custom node type in React Flow
        position: { x: 250, y: stepCount * 120 + 50 }, // Vertical layout
        data: { 
          label: stepName, 
          status: statusClass,
          statusText: statusText,
          stepNumber: stepCount + 1
        },
      });

      if (stepCount > 0) {
        edges.push({
          id: `e${stepCount - 1}-${stepCount}`,
          source: `node-${stepCount - 1}`,
          target: `node-${stepCount}`,
          animated: isCurrent, // Animate the edge leading to the current active node
          style: { stroke: isCompleted || isCurrent ? '#3b82f6' : '#334155', strokeWidth: 2 }
        });
      }

      stepCount++;
    }
  });

  return { nodes, edges };
}
