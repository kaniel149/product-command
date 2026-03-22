import { useCallback } from 'react'
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  BackgroundVariant,
  type NodeChange,
  type EdgeChange,
  type Connection,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { useCanvasStore } from '../../stores/canvasStore'
import { useAppStore } from '../../stores/appStore'
import { nodeTypes } from '../nodes'

export function BoardCanvas() {
  const activeBoard = useAppStore((s) => s.activeBoard)
  const { getNodes, getEdges, onNodesChange, onEdgesChange, onConnect } = useCanvasStore()

  const nodes = getNodes(activeBoard)
  const edges = getEdges(activeBoard)

  const handleNodesChange = useCallback(
    (changes: NodeChange[]) => onNodesChange(activeBoard, changes),
    [activeBoard, onNodesChange]
  )

  const handleEdgesChange = useCallback(
    (changes: EdgeChange[]) => onEdgesChange(activeBoard, changes),
    [activeBoard, onEdgesChange]
  )

  const handleConnect = useCallback(
    (connection: Connection) => onConnect(activeBoard, connection),
    [activeBoard, onConnect]
  )

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      onNodesChange={handleNodesChange}
      onEdgesChange={handleEdgesChange}
      onConnect={handleConnect}
      fitView
      proOptions={{ hideAttribution: true }}
    >
      <Background variant={BackgroundVariant.Dots} gap={20} size={1} color="#27272a" />
      <Controls position="bottom-right" />
      <MiniMap
        position="bottom-left"
        nodeColor="#27272a"
        maskColor="rgba(0, 0, 0, 0.6)"
      />
    </ReactFlow>
  )
}
