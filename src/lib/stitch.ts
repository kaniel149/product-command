// Stitch MCP integration helpers
// These functions will be called via the MCP tools when available

export interface StitchProject {
  projectId: string
  name: string
  screens: StitchScreen[]
}

export interface StitchScreen {
  screenId: string
  name: string
  imageUrl?: string
}

export async function createStitchProject(name: string): Promise<StitchProject | null> {
  // Will be implemented via MCP tool calls
  console.log(`[Stitch] Create project: ${name}`)
  return null
}

export async function exportToStitch(
  projectId: string,
  screenName: string,
  sourceUrl: string
): Promise<StitchScreen | null> {
  console.log(`[Stitch] Export to project ${projectId}: ${screenName} from ${sourceUrl}`)
  return null
}

export async function syncFromStitch(
  projectId: string,
  screenId: string
): Promise<string | null> {
  console.log(`[Stitch] Sync screenshot from ${projectId}/${screenId}`)
  return null
}
