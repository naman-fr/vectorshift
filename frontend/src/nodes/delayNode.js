import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';

export const DelayNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Delay"
      handles={[
        { type: 'target', position: Position.Left, id: 'trigger' },
        { type: 'source', position: Position.Right, id: 'next' }
      ]}
    >
      <label>
        Seconds:
        <input type="number" defaultValue={1} min={0} />
      </label>
    </BaseNode>
  );
};
