import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
    return (
        <div style={{ padding: '20px', borderBottom: '1px solid var(--node-border)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='api' label='API' />
                <DraggableNode type='delay' label='Delay' />
                <DraggableNode type='json' label='JSON' />
                <DraggableNode type='merge' label='Merge' />
                <DraggableNode type='email' label='Email' />
            </div>
        </div>
    );
};
