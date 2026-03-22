import { panamaJourneyNodes, panamaJourneyEdges } from './panama-journey'
import { panamaFunnelNodes, panamaFunnelEdges } from './panama-funnel'
import type { Node, Edge } from '@xyflow/react'

export const seedData: Record<string, { nodes: Node[]; edges: Edge[] }> = {
  'panama-journey': { nodes: panamaJourneyNodes, edges: panamaJourneyEdges },
  'panama-funnel': { nodes: panamaFunnelNodes, edges: panamaFunnelEdges },
}
