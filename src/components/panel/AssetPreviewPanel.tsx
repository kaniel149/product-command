import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePanelStore } from '../../stores/panelStore'
import { createStitchProject, syncFromStitch } from '../../lib/stitch'
import { useCanvasStore } from '../../stores/canvasStore'
import { useAppStore } from '../../stores/appStore'
import { AdPreview } from './previews/AdPreview'
import { EmailPreview } from './previews/EmailPreview'
import { LandingPagePreview } from './previews/LandingPagePreview'
import { FormPreview } from './previews/FormPreview'
import { WhatsAppPreview } from './previews/WhatsAppPreview'
import { LeadMagnetPreview } from './previews/LeadMagnetPreview'
import { FeedbackPanel } from './previews/FeedbackPanel'
import type { AssetStatus } from '../../types'

type Tab = 'preview' | 'feedback' | 'live'

export function AssetPreviewPanel() {
  const { isOpen, asset, close } = usePanelStore()
  const updateNodeData = useCanvasStore((s) => s.updateNodeData)
  const activeBoard = useAppStore((s) => s.activeBoard)
  const [activeTab, setActiveTab] = useState<Tab>('preview')

  const hasAssetContent = asset?.asset != null
  const hasUrl = asset?.url != null

  const handleStatusChange = (status: AssetStatus) => {
    if (!asset) return
    updateNodeData(activeBoard, asset.nodeId, {
      feedback: { ...asset.feedback, status },
    })
  }

  const renderPreview = () => {
    if (!asset) return null

    // Rich content preview
    if (hasAssetContent) {
      const ac = asset.asset!
      switch (ac.contentType) {
        case 'ad':
          return <AdPreview ad={ac.content} />
        case 'email':
          return <EmailPreview email={ac.content} />
        case 'landing':
          return <LandingPagePreview page={ac.content} />
        case 'form':
          return <FormPreview form={ac.content} />
        case 'whatsapp':
          return <WhatsAppPreview wa={ac.content} />
        case 'leadMagnet':
          return <LeadMagnetPreview lm={ac.content} />
      }
    }

    // Screenshot fallback
    if (asset.screenshotUrl) {
      return <img src={asset.screenshotUrl} alt={asset.label} className="w-full rounded-lg" />
    }

    // Empty state
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center px-6">
        <div className="text-4xl mb-3">
          {asset.type === 'page' ? '🌐' : asset.type === 'email' ? '📧' : asset.type === 'ad' ? '📣' : asset.type === 'whatsapp' ? '💬' : '📋'}
        </div>
        <h3 className="text-sm font-medium text-text-primary mb-1">{asset.label}</h3>
        <p className="text-xs text-text-muted">
          No content yet. Add asset content to this touchpoint node to see a rich preview.
        </p>
        {asset.url && (
          <a
            href={asset.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 text-xs text-accent hover:underline"
          >
            Open live URL ↗
          </a>
        )}
      </div>
    )
  }

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
            className="absolute right-0 top-0 bottom-0 w-[600px] bg-surface border-l border-border z-30 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-border">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-base">
                    {asset.type === 'page' ? '🌐' : asset.type === 'email' ? '📧' : asset.type === 'ad' ? '📣' : asset.type === 'whatsapp' ? '💬' : '📋'}
                  </span>
                  <h3 className="text-sm font-semibold text-text-primary truncate">{asset.label}</h3>
                </div>
                <p className="text-xs text-text-muted mt-0.5 truncate">{asset.url ?? 'No URL set'}</p>
              </div>
              <button onClick={close} className="text-text-muted hover:text-text-primary text-lg ml-3">✕</button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-border px-5">
              {([
                { id: 'preview' as Tab, label: 'Preview', show: true },
                { id: 'feedback' as Tab, label: 'Feedback', show: true },
                { id: 'live' as Tab, label: 'Live Site', show: hasUrl },
              ]).filter(t => t.show).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2.5 text-xs font-medium border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-accent text-accent'
                      : 'border-transparent text-text-muted hover:text-text-secondary'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              {activeTab === 'preview' && (
                <div className="p-5">
                  {renderPreview()}
                </div>
              )}

              {activeTab === 'feedback' && (
                <div className="p-5">
                  <FeedbackPanel
                    feedback={asset.feedback}
                    onStatusChange={handleStatusChange}
                  />
                </div>
              )}

              {activeTab === 'live' && asset.url && (
                <iframe
                  src={asset.url}
                  className="w-full h-full border-0"
                  sandbox="allow-scripts allow-same-origin"
                  title={asset.label}
                />
              )}
            </div>

            {/* Footer actions */}
            <div className="flex gap-2 px-5 py-3 border-t border-border">
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
