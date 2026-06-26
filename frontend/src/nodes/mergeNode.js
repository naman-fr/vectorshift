import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';

export const MergeNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Merge"
      handles={[
        { type: 'target', position: Position.Left, id: 'input1', style: { top: '33%' } },
        { type: 'target', position: Position.Left, id: 'input2', style: { top: '66%' } },
        { type: 'source', position: Position.Right, id: 'output' }
      ]}
    >
      <div>
        <span>Combines two inputs</span>
      </div>
    </BaseNode>
  );
};
