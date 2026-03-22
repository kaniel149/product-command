import { create } from 'zustand'
import {
  type Node,
  type Edge,
  applyNodeChanges,
  applyEdgeChanges,
  type NodeChange,
  type EdgeChange,
  type Connection,
  addEdge,
} from '@xyflow/react'

interface CanvasState {
  nodes: Record<string, Node[]>
  edges: Record<string, Edge[]>
  getNodes: (boardId: string) => Node[]
  getEdges: (boardId: string) => Edge[]
  onNodesChange: (boardId: string, changes: NodeChange[]) => void
  onEdgesChange: (boardId: string, changes: EdgeChange[]) => void
  onConnect: (boardId: string, connection: Connection) => void
  addNode: (boardId: string, node: Node) => void
  updateNodeData: (boardId: string, nodeId: string, data: Record<string, unknown>) => void
}

export const useCanvasStore = create<CanvasState>((set, get) => ({
  nodes: {},
  edges: {},
  getNodes: (boardId) => get().nodes[boardId] ?? [],
  getEdges: (boardId) => get().edges[boardId] ?? [],
  onNodesChange: (boardId, changes) =>
    set((state) => ({
      nodes: {
        ...state.nodes,
        [boardId]: applyNodeChanges(changes, state.nodes[boardId] ?? []),
      },
    })),
  onEdgesChange: (boardId, changes) =>
    set((state) => ({
      edges: {
        ...state.edges,
        [boardId]: applyEdgeChanges(changes, state.edges[boardId] ?? []),
      },
    })),
  onConnect: (boardId, connection) =>
    set((state) => ({
      edges: {
        ...state.edges,
        [boardId]: addEdge(
          { ...connection, animated: true, style: { stroke: '#f59e0b' } },
          state.edges[boardId] ?? []
        ),
      },
    })),
  addNode: (boardId, node) =>
    set((state) => ({
      nodes: {
        ...state.nodes,
        [boardId]: [...(state.nodes[boardId] ?? []), node],
      },
    })),
  updateNodeData: (boardId, nodeId, data) =>
    set((state) => ({
      nodes: {
        ...state.nodes,
        [boardId]: (state.nodes[boardId] ?? []).map((n) =>
          n.id === nodeId ? { ...n, data: { ...n.data, ...data } } : n
        ),
      },
    })),
}))
