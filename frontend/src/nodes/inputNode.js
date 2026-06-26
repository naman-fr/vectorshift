import { useState, useEffect } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';
import { useStore } from '../store';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data?.inputType || 'Text');
  const updateNodeField = useStore((state) => state.updateNodeField);

  useEffect(() => {
    updateNodeField(id, 'inputName', currName);
  }, [currName, id, updateNodeField]);

  useEffect(() => {
    updateNodeField(id, 'inputType', inputType);
  }, [inputType, id, updateNodeField]);

  return (
    <BaseNode
      id={id}
      title="Input"
      handles={[{ type: 'source', position: Position.Right, id: 'value' }]}
    >
      <label>
        Name:
        <input 
          type="text" 
          value={currName} 
          onChange={(e) => setCurrName(e.target.value)} 
        />
      </label>
      <label>
        Type:
        <select value={inputType} onChange={(e) => setInputType(e.target.value)}>
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>
    </BaseNode>
  );
};
