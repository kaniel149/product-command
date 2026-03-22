import { create } from 'zustand'
import type { AssetData } from '../types'

interface PanelState {
  isOpen: boolean
  asset: (AssetData & { label: string; nodeId: string }) | null
  openPreview: (asset: AssetData & { label: string; nodeId: string }) => void
  close: () => void
}

export const usePanelStore = create<PanelState>((set) => ({
  isOpen: false,
  asset: null,
  openPreview: (asset) => set({ isOpen: true, asset }),
  close: () => set({ isOpen: false, asset: null }),
}))
