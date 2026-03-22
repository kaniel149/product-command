import { panamaJourneyNodes, panamaJourneyEdges } from './panama-journey'
import { panamaFunnelNodes, panamaFunnelEdges } from './panama-funnel'
import { tmJourneyNodes, tmJourneyEdges } from './tm-journey'
import { tmFunnelNodes, tmFunnelEdges } from './tm-funnel'
import { israelJourneyNodes, israelJourneyEdges } from './israel-journey'
import { israelFunnelNodes, israelFunnelEdges } from './israel-funnel'
import { usaJourneyNodes, usaJourneyEdges } from './usa-journey'
import { usaFunnelNodes, usaFunnelEdges } from './usa-funnel'
import { mivneJourneyNodes, mivneJourneyEdges } from './mivne-journey'
import { mivneFunnelNodes, mivneFunnelEdges } from './mivne-funnel'
import type { Node, Edge } from '@xyflow/react'

export const seedData: Record<string, { nodes: Node[]; edges: Edge[] }> = {
  'panama-journey': { nodes: panamaJourneyNodes, edges: panamaJourneyEdges },
  'panama-funnel': { nodes: panamaFunnelNodes, edges: panamaFunnelEdges },
  'tm-journey': { nodes: tmJourneyNodes, edges: tmJourneyEdges },
  'tm-funnel': { nodes: tmFunnelNodes, edges: tmFunnelEdges },
  'israel-journey': { nodes: israelJourneyNodes, edges: israelJourneyEdges },
  'israel-funnel': { nodes: israelFunnelNodes, edges: israelFunnelEdges },
  'usa-journey': { nodes: usaJourneyNodes, edges: usaJourneyEdges },
  'usa-funnel': { nodes: usaFunnelNodes, edges: usaFunnelEdges },
  'mivne-journey': { nodes: mivneJourneyNodes, edges: mivneJourneyEdges },
  'mivne-funnel': { nodes: mivneFunnelNodes, edges: mivneFunnelEdges },
}
