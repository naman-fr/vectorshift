import { useState, useEffect } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';
import { useStore } from '../store';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');
  const updateNodeField = useStore((state) => state.updateNodeField);

  useEffect(() => {
    updateNodeField(id, 'outputName', currName);
  }, [currName, id, updateNodeField]);

  useEffect(() => {
    updateNodeField(id, 'outputType', outputType);
  }, [outputType, id, updateNodeField]);

  return (
    <BaseNode
      id={id}
      title="Output"
      handles={[{ type: 'target', position: Position.Left, id: 'value' }]}
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
        <select value={outputType} onChange={(e) => setOutputType(e.target.value)}>
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </label>
    </BaseNode>
  );
};
