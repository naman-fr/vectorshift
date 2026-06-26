import { useState, useEffect } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';
import { useAutoResize } from '../hooks/useAutoResize';
import { useVariables } from '../hooks/useVariables';
import { useStore } from '../store';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const updateNodeField = useStore((state) => state.updateNodeField);
  
  const textAreaRef = useAutoResize(currText);
  const variables = useVariables(currText);

  useEffect(() => {
    updateNodeField(id, 'text', currText);
  }, [currText, id, updateNodeField]);

  // Dynamic left handles based on extracted variables
  const dynamicHandles = variables.map((variable, index) => ({
    type: 'target',
    position: Position.Left,
    id: variable,
    // Distribute handles evenly along the left edge
    style: { top: `${((index + 1) / (variables.length + 1)) * 100}%` }
  }));

  // Standard output handle on the right
  const outputHandle = {
    type: 'source',
    position: Position.Right,
    id: 'output'
  };

  return (
    <BaseNode
      id={id}
      title="Text"
      handles={[...dynamicHandles, outputHandle]}
    >
      <label>
        Text:
        <textarea 
          ref={textAreaRef}
          value={currText} 
          onChange={(e) => setCurrText(e.target.value)}
          style={{ minHeight: '40px' }}
        />
      </label>
    </BaseNode>
  );
};
