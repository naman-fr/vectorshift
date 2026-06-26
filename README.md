# VectorShift Frontend Assessment

A React + FastAPI workflow editor implementing dynamic nodes and backend DAG validation.

## Features
- **BaseNode Abstraction**: Reusable UI component replacing repetitive HTML for all node types.
- **Dynamic TextNode**: Auto-resizing textarea that parses `{{ variables }}` into ReactFlow handles live.
- **9 Node Types**: Input, Output, Text, LLM, API, Delay, JSON, Merge, Email.
- **DAG Validation**: Kahn's algorithm (O(V+E)) on the backend to detect graph cycles.
- **Zustand Store**: Immutable state updates (`updateNodeField`) to prevent UI tearing.

## Quick Start

### 1. Frontend
```bash
cd frontend
npm install
npm start
```

### 2. Backend
```bash
cd backend
pip install fastapi uvicorn pydantic
uvicorn main:app --reload
```
