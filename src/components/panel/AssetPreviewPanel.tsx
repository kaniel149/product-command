import { motion, AnimatePresence } from 'framer-motion'
import { usePanelStore } from '../../stores/panelStore'
import { createStitchProject, syncFromStitch } from '../../lib/stitch'
import { useCanvasStore } from '../../stores/canvasStore'
import { useAppStore } from '../../stores/appStore'

export function AssetPreviewPanel() {
  const { isOpen, asset, close } = usePanelStore()
  const updateNodeData = useCanvasStore((s) => s.updateNodeData)
  const activeBoard = useAppStore((s) => s.activeBoard)

  return (
    <AnimatePresence>
      {isOpen && asset && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black z-20"
            onClick={close}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="absolute right-0 top-0 bottom-0 w-[560px] bg-surface border-l border-border z-30 flex flex-col"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <div>
                <h3 className="text-sm font-semibold text-text-primary">{asset.label}</h3>
                <p className="text-xs text-text-muted">{asset.url ?? 'No URL set'}</p>
              </div>
              <button onClick={close} className="text-text-muted hover:text-text-primary text-lg">✕</button>
            </div>

            <div className="flex-1 bg-base">
              {asset.url ? (
                <iframe
                  src={asset.url}
                  className="w-full h-full border-0"
                  sandbox="allow-scripts allow-same-origin"
                  title={asset.label}
                />
              ) : asset.screenshotUrl ? (
                <img src={asset.screenshotUrl} alt={asset.label} className="w-full" />
              ) : (
                <div className="flex items-center justify-center h-full text-text-muted text-sm">
                  No preview available. Add a URL to this touchpoint.
                </div>
              )}
            </div>

            <div className="flex gap-2 px-4 py-3 border-t border-border">
              {asset.url && (
                <a
                  href={asset.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-3 py-1.5 bg-hover text-text-secondary rounded-md hover:text-text-primary"
                >
                  Open Live ↗
                </a>
              )}
              <button
                className="text-xs px-3 py-1.5 bg-accent/10 text-accent rounded-md hover:bg-accent/20"
                onClick={async () => {
                  const project = await createStitchProject(asset.label)
                  if (project) {
                    updateNodeData(activeBoard, asset.nodeId, {
                      stitchProjectId: project.projectId,
                    })
                  }
                }}
              >
                Edit in Stitch
              </button>
              <button
                className="text-xs px-3 py-1.5 bg-hover text-text-secondary rounded-md hover:text-text-primary"
                onClick={async () => {
                  if (asset.stitchProjectId && asset.stitchScreenId) {
                    const screenshotUrl = await syncFromStitch(asset.stitchProjectId, asset.stitchScreenId)
                    if (screenshotUrl) {
                      updateNodeData(activeBoard, asset.nodeId, { screenshotUrl })
                    }
                  }
                }}
              >
                Sync Screenshot
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
