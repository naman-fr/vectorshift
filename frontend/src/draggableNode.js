export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType };
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className={type}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        style={{ 
          cursor: 'grab', 
          minWidth: '90px', 
          height: '50px',
          display: 'flex', 
          alignItems: 'center', 
          borderRadius: '8px',
          background: 'var(--node-bg)',
          border: '1px solid var(--node-border)',
          boxShadow: '0 1px 2px rgb(0 0 0 / 0.05)',
          justifyContent: 'center', 
          flexDirection: 'column',
          fontSize: '13px',
          fontWeight: 500,
          color: 'var(--text-main)',
          transition: 'all 0.2s ease',
        }} 
        draggable
        onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
        onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--node-border)'}
      >
          <span>{label}</span>
      </div>
    );
};