import { Handle } from 'reactflow';

export const BaseNode = ({
  id,
  title,
  handles = [],
  children
}) => {
  return (
    <div className="base-node">
      <div className="node-header">
        <span>{title}</span>
      </div>
      <div className="node-content">
        {children}
      </div>
      {handles.map((handle, index) => (
        <Handle
          key={`${handle.id}-${index}`}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={handle.style}
        />
      ))}
    </div>
  );
};
