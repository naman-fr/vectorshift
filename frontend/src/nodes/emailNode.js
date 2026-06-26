import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';

export const EmailNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Send Email"
      handles={[
        { type: 'target', position: Position.Left, id: 'to', style: { top: '25%' } },
        { type: 'target', position: Position.Left, id: 'subject', style: { top: '50%' } },
        { type: 'target', position: Position.Left, id: 'body', style: { top: '75%' } },
        { type: 'source', position: Position.Right, id: 'sent' }
      ]}
    >
      <label>
        Provider:
        <select>
          <option value="smtp">SMTP</option>
          <option value="sendgrid">SendGrid</option>
        </select>
      </label>
    </BaseNode>
  );
};
