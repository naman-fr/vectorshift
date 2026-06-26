from typing import List, Dict, Any
from collections import defaultdict, deque

def is_dag(nodes: List[Dict[str, Any]], edges: List[Dict[str, Any]]) -> bool:
    """
    Checks if a given graph (nodes, edges) is a Directed Acyclic Graph (DAG) 
    using Kahn's Algorithm for topological sorting. Time Complexity: O(V + E)
    """
    if not nodes:
        return True
        
    # Create an adjacency list and in-degree count for each node ID
    adj_list = defaultdict(list)
    in_degree = defaultdict(int)
    
    # Initialize in_degree for all nodes (even those without edges)
    for node in nodes:
        node_id = node.get("id")
        if node_id:
            in_degree[node_id] = 0
            
    # Build the graph
    for edge in edges:
        source = edge.get("source")
        target = edge.get("target")
        if source and target:
            adj_list[source].append(target)
            in_degree[target] += 1
            
    # Kahn's Algorithm
    queue = deque([node_id for node_id, degree in in_degree.items() if degree == 0])
    visited_count = 0
    
    while queue:
        current = queue.popleft()
        visited_count += 1
        
        for neighbor in adj_list[current]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)
                
    # If we visited all nodes, it's a DAG (no cycles)
    return visited_count == len(in_degree)
