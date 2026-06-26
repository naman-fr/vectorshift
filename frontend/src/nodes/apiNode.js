import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';

export const ApiNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="REST API"
      handles={[
        { type: 'target', position: Position.Left, id: 'url', style: { top: '33%' } },
        { type: 'target', position: Position.Left, id: 'headers', style: { top: '66%' } },
        { type: 'source', position: Position.Right, id: 'response' }
      ]}
    >
      <label>
        Method:
        <select>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
        </select>
      </label>
    </BaseNode>
  );
};
