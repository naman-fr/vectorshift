import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';

export const JsonNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="JSON Parser"
      handles={[
        { type: 'target', position: Position.Left, id: 'raw' },
        { type: 'source', position: Position.Right, id: 'parsed' }
      ]}
    >
      <label>
        Extract Key:
        <input type="text" placeholder="e.g. data.id" />
      </label>
    </BaseNode>
  );
};
