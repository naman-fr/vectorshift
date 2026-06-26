from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models import PipelineRequest
from graph import is_dag

app = FastAPI()

# Enable CORS for the frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(request: PipelineRequest):
    nodes = request.nodes
    edges = request.edges
    
    num_nodes = len(nodes)
    num_edges = len(edges)
    is_graph_dag = is_dag(nodes, edges)
    
    return {
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'is_dag': is_graph_dag
    }
