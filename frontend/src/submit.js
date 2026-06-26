import { useState } from 'react';
import { useStore } from './store';
import { submitPipeline } from './services/api';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const result = await submitPipeline(nodes, edges);
      alert(`Pipeline Analysis\n\nNodes: ${result.num_nodes}\nEdges: ${result.num_edges}\nIs DAG: ${result.is_dag}`);
    } catch (error) {
      alert('Failed to analyze pipeline. Please check if the backend is running.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <button 
        type="button" 
        onClick={handleSubmit} 
        disabled={isLoading}
        style={{
          padding: '10px 24px',
          fontSize: '16px',
          fontWeight: 600,
          color: '#ffffff',
          backgroundColor: isLoading ? '#93c5fd' : 'var(--primary)',
          border: 'none',
          borderRadius: '8px',
          cursor: isLoading ? 'not-allowed' : 'pointer',
          boxShadow: 'var(--node-shadow)',
          transition: 'background-color 0.2s ease',
        }}
      >
        {isLoading ? 'Submitting...' : 'Submit'}
      </button>
    </div>
  );
};
