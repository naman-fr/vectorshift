from pydantic import BaseModel
from typing import List, Dict, Any

class PipelineRequest(BaseModel):
    nodes: List[Dict[str, Any]]
    edges: List[Dict[str, Any]]
