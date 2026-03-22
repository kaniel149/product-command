# Product Command — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build an interactive product control dashboard with react-flow canvas for mapping customer journeys and marketing funnels, with live asset previews and Stitch integration.

**Architecture:** Standalone Vite+React app with @xyflow/react canvas as the core interaction surface. Zustand manages local state, Supabase handles persistence + auth + RLS. Custom node components render 6 node types (Stage, Touchpoint, Persona, Message, Decision, KPI). A slide-in panel previews real assets via iframe with Stitch MCP integration for visual editing.

**Tech Stack:** React 19, TypeScript, Vite, Tailwind CSS, Framer Motion, @xyflow/react 12, Zustand, Supabase (Auth + PostgreSQL + RLS)

---

## Task 1: Project Scaffold

**Files:**
- Create: `package.json`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `tailwind.config.ts`
- Create: `postcss.config.js`
- Create: `index.html`
- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/index.css`

**Step 1: Initialize Vite project**

```bash
cd ~/Desktop/projects/tools/product-command
npm create vite@latest . -- --template react-ts
```

If directory not empty, confirm overwrite (docs/ folder is fine to keep).

**Step 2: Install core dependencies**

```bash
npm install @xyflow/react zustand framer-motion @supabase/supabase-js
npm install -D tailwindcss @tailwindcss/vite
```

**Step 3: Configure Tailwind**

In `vite.config.ts`:
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

In `src/index.css`:
```css
@import "tailwindcss";
```

**Step 4: Verify dev server runs**

```bash
npm run dev
```

Expected: Vite dev server starts on localhost:5173 with default React template.

**Step 5: Commit**

```bash
git init
echo "node_modules\ndist\n.env\n.env.local" > .gitignore
git add -A
git commit -m "chore: scaffold Vite + React + Tailwind + xyflow project"
```

---

## Task 2: Design System (Dark Theme + Tokens)

**Files:**
- Create: `src/index.css` (overwrite with full theme)
- Create: `src/lib/cn.ts`

**Step 1: Write base CSS with dark theme tokens**

In `src/index.css`:
```css
@import "tailwindcss";

@theme {
  --color-base: #09090b;
  --color-surface: #111113;
  --color-card: #18181b;
  --color-hover: #1e1e22;
  --color-border: #27272a;
  --color-border-subtle: #1e1e22;

  --color-accent: #f59e0b;
  --color-accent-hover: #d97706;
  --color-accent-soft: rgba(245, 158, 11, 0.1);

  --color-text-primary: #fafafa;
  --color-text-secondary: #a1a1aa;
  --color-text-muted: #71717a;

  --color-status-green: #22c55e;
  --color-status-yellow: #eab308;
  --color-status-red: #ef4444;
  --color-status-blue: #3b82f6;

  --color-persona-1: #8b5cf6;
  --color-persona-2: #06b6d4;
  --color-persona-3: #f97316;
  --color-persona-4: #ec4899;

  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;

  --font-mono: 'JetBrains Mono', monospace;
}

body {
  background-color: var(--color-base);
  color: var(--color-text-primary);
  font-family: system-ui, -apple-system, sans-serif;
}

/* xyflow overrides */
.react-flow__background {
  background-color: var(--color-base) !important;
}

.react-flow__minimap {
  background-color: var(--color-surface) !important;
  border: 1px solid var(--color-border) !important;
  border-radius: var(--radius-md) !important;
}

.react-flow__controls {
  background-color: var(--color-card) !important;
  border: 1px solid var(--color-border) !important;
  border-radius: var(--radius-md) !important;
}

.react-flow__controls-button {
  background-color: var(--color-card) !important;
  border-color: var(--color-border) !important;
  color: var(--color-text-secondary) !important;
}

.react-flow__controls-button:hover {
  background-color: var(--color-hover) !important;
  color: var(--color-text-primary) !important;
}
```

**Step 2: Create cn utility**

In `src/lib/cn.ts`:
```ts
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}
```

**Step 3: Verify styles load**

Update `src/App.tsx` to show a dark card:
```tsx
export default function App() {
  return (
    <div className="min-h-screen bg-base flex items-center justify-center">
      <div className="bg-card border border-border rounded-lg p-6">
        <h1 className="text-text-primary text-xl font-semibold">Product Command</h1>
        <p className="text-text-secondary mt-2">Loading...</p>
      </div>
    </div>
  )
}
```

Run: `npm run dev` — verify dark card renders.

**Step 4: Commit**

```bash
git add src/index.css src/lib/cn.ts src/App.tsx
git commit -m "feat: dark theme design system with persona colors + xyflow overrides"
```

---

## Task 3: Layout Shell (Product Selector + Board Tabs)

**Files:**
- Create: `src/components/layout/AppShell.tsx`
- Create: `src/components/layout/ProductSelector.tsx`
- Create: `src/components/layout/BoardTabs.tsx`
- Create: `src/stores/appStore.ts`
- Create: `src/types/index.ts`

**Step 1: Define core types**

In `src/types/index.ts`:
```ts
export type ProductSlug = 'panama' | 'tm-energy' | 'solar-os-israel' | 'mivne' | 'usa'

export interface Product {
  slug: ProductSlug
  name: string
  icon: string
  market: string
  language: string
  color: string
}

export type BoardType = 'journey' | 'funnel'

export interface Board {
  id: string
  productSlug: ProductSlug
  type: BoardType
  name: string
}

export type NodeType = 'stage' | 'touchpoint' | 'persona' | 'message' | 'decision' | 'kpi'

export interface AssetData {
  type: 'page' | 'email' | 'ad' | 'whatsapp' | 'form'
  url?: string
  screenshotUrl?: string
  stitchProjectId?: string
  stitchScreenId?: string
}

export interface PersonaData {
  name: string
  demographics: string
  painPoints: string[]
  channels: string[]
  color: string
}

export interface MessageData {
  content: string
  language: string
  variant?: string
  personaId?: string
}

export interface KpiData {
  label: string
  value: string
  target?: string
  trend?: 'up' | 'down' | 'flat'
}

export interface StageData {
  label: string
  description?: string
  funnelStage?: string
}

export interface DecisionData {
  question: string
  yesLabel?: string
  noLabel?: string
}
```

**Step 2: Create app store**

In `src/stores/appStore.ts`:
```ts
import { create } from 'zustand'
import type { ProductSlug, Product, Board } from '../types'

export const PRODUCTS: Product[] = [
  { slug: 'panama', name: 'Solaris Panama', icon: '🇵🇦', market: 'B2C Solar', language: 'ES', color: '#0B3D2E' },
  { slug: 'tm-energy', name: 'TM Energy', icon: '🇹🇭', market: 'Island Solar', language: 'EN', color: '#1e40af' },
  { slug: 'solar-os-israel', name: 'Solar OS Israel', icon: '🇮🇱', market: 'SaaS Installers', language: 'HE', color: '#7c3aed' },
  { slug: 'mivne', name: 'Mivne', icon: '🏗️', market: 'Contractor Oversight', language: 'HE', color: '#0891b2' },
  { slug: 'usa', name: 'Solar OS USA', icon: '🇺🇸', market: 'SaaS Installers', language: 'EN', color: '#dc2626' },
]

const DEFAULT_BOARDS: Board[] = [
  { id: 'panama-journey', productSlug: 'panama', type: 'journey', name: 'מסע לקוח' },
  { id: 'panama-funnel', productSlug: 'panama', type: 'funnel', name: 'משפך שיווקי' },
  { id: 'tm-journey', productSlug: 'tm-energy', type: 'journey', name: 'Customer Journey' },
  { id: 'tm-funnel', productSlug: 'tm-energy', type: 'funnel', name: 'Marketing Funnel' },
  { id: 'israel-journey', productSlug: 'solar-os-israel', type: 'journey', name: 'מסע לקוח' },
  { id: 'israel-funnel', productSlug: 'solar-os-israel', type: 'funnel', name: 'משפך שיווקי' },
  { id: 'mivne-journey', productSlug: 'mivne', type: 'journey', name: 'מסע לקוח' },
  { id: 'mivne-funnel', productSlug: 'mivne', type: 'funnel', name: 'משפך שיווקי' },
  { id: 'usa-journey', productSlug: 'usa', type: 'journey', name: 'Customer Journey' },
  { id: 'usa-funnel', productSlug: 'usa', type: 'funnel', name: 'Marketing Funnel' },
]

interface AppState {
  activeProduct: ProductSlug
  activeBoard: string
  boards: Board[]
  setActiveProduct: (slug: ProductSlug) => void
  setActiveBoard: (boardId: string) => void
}

export const useAppStore = create<AppState>((set, get) => ({
  activeProduct: 'panama',
  activeBoard: 'panama-journey',
  boards: DEFAULT_BOARDS,
  setActiveProduct: (slug) => {
    const boards = get().boards.filter(b => b.productSlug === slug)
    set({ activeProduct: slug, activeBoard: boards[0]?.id ?? '' })
  },
  setActiveBoard: (boardId) => set({ activeBoard: boardId }),
}))
```

**Step 3: Build ProductSelector component**

In `src/components/layout/ProductSelector.tsx`:
```tsx
import { PRODUCTS, useAppStore } from '../../stores/appStore'
import { cn } from '../../lib/cn'

export function ProductSelector() {
  const { activeProduct, setActiveProduct } = useAppStore()

  return (
    <div className="flex items-center gap-1 px-4 py-2 bg-surface border-b border-border">
      {PRODUCTS.map((p) => (
        <button
          key={p.slug}
          onClick={() => setActiveProduct(p.slug)}
          className={cn(
            'flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-colors',
            activeProduct === p.slug
              ? 'bg-card text-text-primary border border-border'
              : 'text-text-secondary hover:text-text-primary hover:bg-hover'
          )}
        >
          <span>{p.icon}</span>
          <span className="hidden sm:inline">{p.name}</span>
        </button>
      ))}
    </div>
  )
}
```

**Step 4: Build BoardTabs component**

In `src/components/layout/BoardTabs.tsx`:
```tsx
import { useAppStore } from '../../stores/appStore'
import { cn } from '../../lib/cn'

export function BoardTabs() {
  const { activeProduct, activeBoard, boards, setActiveBoard } = useAppStore()
  const productBoards = boards.filter(b => b.productSlug === activeProduct)

  return (
    <div className="flex items-center gap-1 px-4 py-1.5 bg-surface border-b border-border-subtle">
      {productBoards.map((b) => (
        <button
          key={b.id}
          onClick={() => setActiveBoard(b.id)}
          className={cn(
            'px-3 py-1 rounded-md text-sm transition-colors',
            activeBoard === b.id
              ? 'bg-accent/10 text-accent border border-accent/20'
              : 'text-text-muted hover:text-text-secondary hover:bg-hover'
          )}
        >
          {b.type === 'journey' ? '🗺️' : '📊'} {b.name}
        </button>
      ))}
      <button className="px-2 py-1 text-text-muted hover:text-text-secondary text-sm">
        + הוסף לוח
      </button>
    </div>
  )
}
```

**Step 5: Build AppShell layout**

In `src/components/layout/AppShell.tsx`:
```tsx
import { ProductSelector } from './ProductSelector'
import { BoardTabs } from './BoardTabs'
import type { ReactNode } from 'react'

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen flex flex-col bg-base">
      <ProductSelector />
      <BoardTabs />
      <main className="flex-1 relative overflow-hidden">
        {children}
      </main>
    </div>
  )
}
```

**Step 6: Wire up App.tsx**

In `src/App.tsx`:
```tsx
import { AppShell } from './components/layout/AppShell'

export default function App() {
  return (
    <AppShell>
      <div className="flex items-center justify-center h-full text-text-secondary">
        Canvas will render here
      </div>
    </AppShell>
  )
}
```

**Step 7: Verify layout renders**

Run: `npm run dev` — product tabs across top, board tabs below, main area.
Click products → board tabs should switch.

**Step 8: Commit**

```bash
git add src/
git commit -m "feat: app shell with product selector + board tabs + Zustand store"
```

---

## Task 4: Canvas with react-flow

**Files:**
- Create: `src/components/canvas/BoardCanvas.tsx`
- Create: `src/stores/canvasStore.ts`
- Modify: `src/App.tsx`

**Step 1: Create canvas store**

In `src/stores/canvasStore.ts`:
```ts
import { create } from 'zustand'
import { type Node, type Edge, applyNodeChanges, applyEdgeChanges, type NodeChange, type EdgeChange, type Connection, addEdge } from '@xyflow/react'

interface CanvasState {
  nodes: Record<string, Node[]>
  edges: Record<string, Edge[]>
  getNodes: (boardId: string) => Node[]
  getEdges: (boardId: string) => Edge[]
  onNodesChange: (boardId: string, changes: NodeChange[]) => void
  onEdgesChange: (boardId: string, changes: EdgeChange[]) => void
  onConnect: (boardId: string, connection: Connection) => void
  addNode: (boardId: string, node: Node) => void
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
}))
```

**Step 2: Create BoardCanvas component**

In `src/components/canvas/BoardCanvas.tsx`:
```tsx
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
```

**Step 3: Wire canvas into App.tsx**

In `src/App.tsx`:
```tsx
import { AppShell } from './components/layout/AppShell'
import { BoardCanvas } from './components/canvas/BoardCanvas'

export default function App() {
  return (
    <AppShell>
      <BoardCanvas />
    </AppShell>
  )
}
```

**Step 4: Verify canvas renders**

Run: `npm run dev` — dark canvas with dots background, controls, minimap. Empty but interactive (pan, zoom).

**Step 5: Commit**

```bash
git add src/
git commit -m "feat: react-flow canvas with per-board state management"
```

---

## Task 5: Custom Node Components (6 Types)

**Files:**
- Create: `src/components/nodes/StageNode.tsx`
- Create: `src/components/nodes/TouchpointNode.tsx`
- Create: `src/components/nodes/PersonaNode.tsx`
- Create: `src/components/nodes/MessageNode.tsx`
- Create: `src/components/nodes/DecisionNode.tsx`
- Create: `src/components/nodes/KpiNode.tsx`
- Create: `src/components/nodes/index.ts`
- Modify: `src/components/canvas/BoardCanvas.tsx`

**Step 1: Create StageNode**

In `src/components/nodes/StageNode.tsx`:
```tsx
import { Handle, Position, type NodeProps } from '@xyflow/react'
import type { StageData } from '../../types'

export function StageNode({ data }: NodeProps) {
  const d = data as StageData
  return (
    <div className="bg-surface border border-border rounded-lg px-5 py-3 min-w-[160px]">
      <Handle type="target" position={Position.Left} className="!bg-accent !w-2 !h-2" />
      <div className="text-xs text-text-muted uppercase tracking-wider mb-1">{d.funnelStage ?? 'Stage'}</div>
      <div className="text-sm font-semibold text-text-primary">{d.label}</div>
      {d.description && <div className="text-xs text-text-secondary mt-1">{d.description}</div>}
      <Handle type="source" position={Position.Right} className="!bg-accent !w-2 !h-2" />
    </div>
  )
}
```

**Step 2: Create TouchpointNode**

In `src/components/nodes/TouchpointNode.tsx`:
```tsx
import { Handle, Position, type NodeProps } from '@xyflow/react'
import type { AssetData } from '../../types'

export function TouchpointNode({ data }: NodeProps) {
  const d = data as AssetData & { label: string }
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden min-w-[200px] group">
      <Handle type="target" position={Position.Left} className="!bg-accent !w-2 !h-2" />
      {d.screenshotUrl && (
        <div className="h-24 overflow-hidden border-b border-border">
          <img src={d.screenshotUrl} alt="" className="w-full h-full object-cover object-top" />
        </div>
      )}
      <div className="px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-xs">
            {d.type === 'page' ? '🌐' : d.type === 'email' ? '📧' : d.type === 'ad' ? '📣' : d.type === 'whatsapp' ? '💬' : '📋'}
          </span>
          <span className="text-sm font-medium text-text-primary">{d.label}</span>
        </div>
        {d.url && (
          <div className="text-xs text-text-muted mt-1 truncate">{d.url}</div>
        )}
        <div className="flex gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="text-[10px] px-2 py-0.5 bg-accent/10 text-accent rounded">Preview</button>
          <button className="text-[10px] px-2 py-0.5 bg-hover text-text-secondary rounded">Stitch</button>
        </div>
      </div>
      <Handle type="source" position={Position.Right} className="!bg-accent !w-2 !h-2" />
    </div>
  )
}
```

**Step 3: Create PersonaNode**

In `src/components/nodes/PersonaNode.tsx`:
```tsx
import { Handle, Position, type NodeProps } from '@xyflow/react'
import type { PersonaData } from '../../types'

export function PersonaNode({ data }: NodeProps) {
  const d = data as PersonaData
  return (
    <div className="bg-card border-2 rounded-lg px-4 py-3 min-w-[180px] max-w-[240px]" style={{ borderColor: d.color }}>
      <Handle type="target" position={Position.Left} className="!w-2 !h-2" style={{ background: d.color }} />
      <div className="flex items-center gap-2 mb-2">
        <div className="w-3 h-3 rounded-full" style={{ background: d.color }} />
        <div className="text-sm font-semibold text-text-primary">{d.name}</div>
      </div>
      <div className="text-xs text-text-secondary mb-2">{d.demographics}</div>
      <div className="flex flex-wrap gap-1">
        {d.channels.map((ch) => (
          <span key={ch} className="text-[10px] px-1.5 py-0.5 bg-hover rounded text-text-muted">{ch}</span>
        ))}
      </div>
      <Handle type="source" position={Position.Right} className="!w-2 !h-2" style={{ background: d.color }} />
    </div>
  )
}
```

**Step 4: Create MessageNode**

In `src/components/nodes/MessageNode.tsx`:
```tsx
import { Handle, Position, type NodeProps } from '@xyflow/react'
import type { MessageData } from '../../types'

export function MessageNode({ data }: NodeProps) {
  const d = data as MessageData & { label?: string }
  return (
    <div className="bg-card border border-accent/30 rounded-lg px-4 py-3 min-w-[180px] max-w-[260px]">
      <Handle type="target" position={Position.Left} className="!bg-accent !w-2 !h-2" />
      <div className="text-[10px] text-accent uppercase tracking-wider mb-1">
        {d.language} {d.variant && `· ${d.variant}`}
      </div>
      <div className="text-sm text-text-primary leading-relaxed">"{d.content}"</div>
      <Handle type="source" position={Position.Right} className="!bg-accent !w-2 !h-2" />
    </div>
  )
}
```

**Step 5: Create DecisionNode**

In `src/components/nodes/DecisionNode.tsx`:
```tsx
import { Handle, Position, type NodeProps } from '@xyflow/react'
import type { DecisionData } from '../../types'

export function DecisionNode({ data }: NodeProps) {
  const d = data as DecisionData
  return (
    <div className="bg-card border border-status-yellow/40 rounded-lg px-4 py-3 min-w-[160px]">
      <Handle type="target" position={Position.Left} className="!bg-status-yellow !w-2 !h-2" />
      <div className="text-xs text-status-yellow mb-1">Decision</div>
      <div className="text-sm font-medium text-text-primary">{d.question}</div>
      <Handle type="source" position={Position.Right} id="yes" style={{ top: '30%' }} className="!bg-status-green !w-2 !h-2" />
      <Handle type="source" position={Position.Right} id="no" style={{ top: '70%' }} className="!bg-status-red !w-2 !h-2" />
      <div className="absolute right-[-40px] top-[22%] text-[10px] text-status-green">{d.yesLabel ?? 'Yes'}</div>
      <div className="absolute right-[-32px] top-[62%] text-[10px] text-status-red">{d.noLabel ?? 'No'}</div>
    </div>
  )
}
```

**Step 6: Create KpiNode**

In `src/components/nodes/KpiNode.tsx`:
```tsx
import { Handle, Position, type NodeProps } from '@xyflow/react'
import type { KpiData } from '../../types'

export function KpiNode({ data }: NodeProps) {
  const d = data as KpiData
  return (
    <div className="bg-card border border-border rounded-lg px-4 py-2 min-w-[120px]">
      <Handle type="target" position={Position.Left} className="!bg-accent !w-2 !h-2" />
      <div className="text-[10px] text-text-muted uppercase tracking-wider">{d.label}</div>
      <div className="text-lg font-mono font-bold text-text-primary">
        {d.value}
        {d.trend === 'up' && <span className="text-status-green text-xs ml-1">↑</span>}
        {d.trend === 'down' && <span className="text-status-red text-xs ml-1">↓</span>}
      </div>
      {d.target && <div className="text-[10px] text-text-muted">Target: {d.target}</div>}
      <Handle type="source" position={Position.Right} className="!bg-accent !w-2 !h-2" />
    </div>
  )
}
```

**Step 7: Create node type registry**

In `src/components/nodes/index.ts`:
```ts
import { StageNode } from './StageNode'
import { TouchpointNode } from './TouchpointNode'
import { PersonaNode } from './PersonaNode'
import { MessageNode } from './MessageNode'
import { DecisionNode } from './DecisionNode'
import { KpiNode } from './KpiNode'

export const nodeTypes = {
  stage: StageNode,
  touchpoint: TouchpointNode,
  persona: PersonaNode,
  message: MessageNode,
  decision: DecisionNode,
  kpi: KpiNode,
}
```

**Step 8: Register node types in BoardCanvas**

Modify `src/components/canvas/BoardCanvas.tsx` — add import and pass to ReactFlow:
```tsx
import { nodeTypes } from '../nodes'

// Inside ReactFlow:
<ReactFlow
  nodeTypes={nodeTypes}
  // ... rest of props
```

**Step 9: Commit**

```bash
git add src/components/nodes/
git commit -m "feat: 6 custom node types — stage, touchpoint, persona, message, decision, KPI"
```

---

## Task 6: Node Toolbar + Add Node

**Files:**
- Create: `src/components/canvas/NodeToolbar.tsx`
- Modify: `src/components/canvas/BoardCanvas.tsx`
- Modify: `src/stores/canvasStore.ts`

**Step 1: Create NodeToolbar**

In `src/components/canvas/NodeToolbar.tsx`:
```tsx
import { useCanvasStore } from '../../stores/canvasStore'
import { useAppStore } from '../../stores/appStore'
import type { NodeType } from '../../types'

const NODE_OPTIONS: { type: NodeType; icon: string; label: string }[] = [
  { type: 'stage', icon: '◼️', label: 'Stage' },
  { type: 'touchpoint', icon: '🌐', label: 'Touchpoint' },
  { type: 'persona', icon: '👤', label: 'Persona' },
  { type: 'message', icon: '💬', label: 'Message' },
  { type: 'decision', icon: '⚡', label: 'Decision' },
  { type: 'kpi', icon: '📊', label: 'KPI' },
]

const DEFAULT_DATA: Record<NodeType, Record<string, unknown>> = {
  stage: { label: 'New Stage', funnelStage: 'Stage' },
  touchpoint: { label: 'New Touchpoint', type: 'page' },
  persona: { name: 'New Persona', demographics: 'Edit demographics...', painPoints: [], channels: [], color: '#8b5cf6' },
  message: { content: 'Edit message...', language: 'EN' },
  decision: { question: 'New Decision?', yesLabel: 'Yes', noLabel: 'No' },
  kpi: { label: 'Metric', value: '0%' },
}

export function NodeToolbar() {
  const addNode = useCanvasStore((s) => s.addNode)
  const activeBoard = useAppStore((s) => s.activeBoard)

  const handleAdd = (type: NodeType) => {
    const id = `${type}-${Date.now()}`
    addNode(activeBoard, {
      id,
      type,
      position: { x: 200 + Math.random() * 400, y: 100 + Math.random() * 300 },
      data: DEFAULT_DATA[type],
    })
  }

  return (
    <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 flex gap-1 bg-card border border-border rounded-lg px-2 py-1.5 shadow-lg">
      {NODE_OPTIONS.map((opt) => (
        <button
          key={opt.type}
          onClick={() => handleAdd(opt.type)}
          className="flex items-center gap-1.5 px-2.5 py-1 text-xs text-text-secondary hover:text-text-primary hover:bg-hover rounded transition-colors"
          title={opt.label}
        >
          <span>{opt.icon}</span>
          <span className="hidden md:inline">{opt.label}</span>
        </button>
      ))}
    </div>
  )
}
```

**Step 2: Add NodeToolbar to BoardCanvas**

Modify `src/components/canvas/BoardCanvas.tsx`:
```tsx
import { NodeToolbar } from './NodeToolbar'

// Inside the return, wrap ReactFlow:
return (
  <div className="relative w-full h-full">
    <NodeToolbar />
    <ReactFlow ...>
```

**Step 3: Verify node adding works**

Run: `npm run dev` — click toolbar buttons, nodes appear on canvas. Drag them, connect handles.

**Step 4: Commit**

```bash
git add src/
git commit -m "feat: node toolbar — add any node type to canvas from top bar"
```

---

## Task 7: Inline Editing (Double-Click to Edit)

**Files:**
- Create: `src/hooks/useInlineEdit.ts`
- Modify: `src/components/nodes/StageNode.tsx`
- Modify: `src/components/nodes/MessageNode.tsx`
- Modify: `src/components/nodes/PersonaNode.tsx`
- Modify: `src/components/nodes/DecisionNode.tsx`
- Modify: `src/components/nodes/KpiNode.tsx`
- Modify: `src/components/nodes/TouchpointNode.tsx`
- Modify: `src/stores/canvasStore.ts`

**Step 1: Add updateNodeData to canvas store**

Add to `src/stores/canvasStore.ts`:
```ts
updateNodeData: (boardId: string, nodeId: string, data: Record<string, unknown>) =>
  set((state) => ({
    nodes: {
      ...state.nodes,
      [boardId]: (state.nodes[boardId] ?? []).map((n) =>
        n.id === nodeId ? { ...n, data: { ...n.data, ...data } } : n
      ),
    },
  })),
```

Add `updateNodeData` to the interface and the store.

**Step 2: Create useInlineEdit hook**

In `src/hooks/useInlineEdit.ts`:
```ts
import { useState, useCallback } from 'react'
import { useCanvasStore } from '../stores/canvasStore'
import { useAppStore } from '../stores/appStore'

export function useInlineEdit(nodeId: string) {
  const [editingField, setEditingField] = useState<string | null>(null)
  const updateNodeData = useCanvasStore((s) => s.updateNodeData)
  const activeBoard = useAppStore((s) => s.activeBoard)

  const startEdit = useCallback((field: string) => {
    setEditingField(field)
  }, [])

  const saveEdit = useCallback(
    (field: string, value: string) => {
      updateNodeData(activeBoard, nodeId, { [field]: value })
      setEditingField(null)
    },
    [activeBoard, nodeId, updateNodeData]
  )

  const cancelEdit = useCallback(() => {
    setEditingField(null)
  }, [])

  return { editingField, startEdit, saveEdit, cancelEdit }
}
```

**Step 3: Apply inline edit to StageNode (pattern for others)**

Update `src/components/nodes/StageNode.tsx`:
```tsx
import { Handle, Position, type NodeProps } from '@xyflow/react'
import type { StageData } from '../../types'
import { useInlineEdit } from '../../hooks/useInlineEdit'

export function StageNode({ id, data }: NodeProps) {
  const d = data as StageData
  const { editingField, startEdit, saveEdit, cancelEdit } = useInlineEdit(id)

  return (
    <div className="bg-surface border border-border rounded-lg px-5 py-3 min-w-[160px]">
      <Handle type="target" position={Position.Left} className="!bg-accent !w-2 !h-2" />
      <div className="text-xs text-text-muted uppercase tracking-wider mb-1">{d.funnelStage ?? 'Stage'}</div>
      {editingField === 'label' ? (
        <input
          autoFocus
          defaultValue={d.label}
          className="text-sm font-semibold text-text-primary bg-transparent border-b border-accent outline-none w-full"
          onBlur={(e) => saveEdit('label', e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') saveEdit('label', (e.target as HTMLInputElement).value)
            if (e.key === 'Escape') cancelEdit()
          }}
        />
      ) : (
        <div
          className="text-sm font-semibold text-text-primary cursor-text"
          onDoubleClick={() => startEdit('label')}
        >
          {d.label}
        </div>
      )}
      <Handle type="source" position={Position.Right} className="!bg-accent !w-2 !h-2" />
    </div>
  )
}
```

**Step 4: Apply same pattern to MessageNode, PersonaNode, DecisionNode, KpiNode, TouchpointNode**

Each node gets onDoubleClick on its primary text field(s), switching to an input. Follow the StageNode pattern — inline input with autoFocus, onBlur saves, Enter saves, Escape cancels.

Key fields per node:
- MessageNode: `content`
- PersonaNode: `name`, `demographics`
- DecisionNode: `question`
- KpiNode: `value`, `label`
- TouchpointNode: `label`

**Step 5: Verify inline editing**

Run: `npm run dev` — add a Stage node, double-click its label, type new text, press Enter. Should update.

**Step 6: Commit**

```bash
git add src/
git commit -m "feat: inline editing — double-click any node field to edit in place"
```

---

## Task 8: Asset Preview Panel (Slide-In)

**Files:**
- Create: `src/components/panel/AssetPreviewPanel.tsx`
- Create: `src/stores/panelStore.ts`
- Modify: `src/components/nodes/TouchpointNode.tsx`
- Modify: `src/components/canvas/BoardCanvas.tsx`

**Step 1: Create panel store**

In `src/stores/panelStore.ts`:
```ts
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
```

**Step 2: Create AssetPreviewPanel**

In `src/components/panel/AssetPreviewPanel.tsx`:
```tsx
import { motion, AnimatePresence } from 'framer-motion'
import { usePanelStore } from '../../stores/panelStore'

export function AssetPreviewPanel() {
  const { isOpen, asset, close } = usePanelStore()

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
              <button className="text-xs px-3 py-1.5 bg-accent/10 text-accent rounded-md hover:bg-accent/20">
                Edit in Stitch
              </button>
              <button className="text-xs px-3 py-1.5 bg-hover text-text-secondary rounded-md hover:text-text-primary">
                Sync Screenshot
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
```

**Step 3: Wire TouchpointNode Preview button to panel**

Update TouchpointNode's Preview button to call `usePanelStore().openPreview(...)`.

**Step 4: Add AssetPreviewPanel to BoardCanvas**

```tsx
import { AssetPreviewPanel } from '../panel/AssetPreviewPanel'

// Inside the wrapping div, after ReactFlow:
<AssetPreviewPanel />
```

**Step 5: Verify panel opens**

Run: `npm run dev` — add a Touchpoint node, hover to see buttons, click "Preview" → panel slides in from right.

**Step 6: Commit**

```bash
git add src/
git commit -m "feat: asset preview panel — slide-in iframe preview with Stitch action buttons"
```

---

## Task 9: Seed Data — Pre-Load Journeys & Funnels

**Files:**
- Create: `src/data/seeds/panama-journey.ts`
- Create: `src/data/seeds/panama-funnel.ts`
- Create: `src/data/seeds/tm-journey.ts`
- Create: `src/data/seeds/israel-journey.ts`
- Create: `src/data/seeds/index.ts`
- Modify: `src/stores/canvasStore.ts`

**Step 1: Create Panama customer journey seed**

In `src/data/seeds/panama-journey.ts`:
```ts
import type { Node, Edge } from '@xyflow/react'

export const panamaJourneyNodes: Node[] = [
  // Personas (top row)
  { id: 'p1', type: 'persona', position: { x: 0, y: 0 }, data: {
    name: 'The Expat Entrepreneur', demographics: 'Hotel/resort owner, North American/European, thinks in USD',
    painPoints: ['High electricity costs', 'Grid unreliability', 'Eco-branding needs'],
    channels: ['WhatsApp (EN)', 'Email'], color: '#8b5cf6',
  }},
  { id: 'p2', type: 'persona', position: { x: 0, y: 200 }, data: {
    name: 'The Chain Manager', demographics: 'Corporate supermarket manager, requires HQ approval',
    painPoints: ['Massive electricity bills', 'Flat roof opportunity', 'Corporate sustainability goals'],
    channels: ['Email', 'In-person'], color: '#06b6d4',
  }},
  { id: 'p3', type: 'persona', position: { x: 0, y: 400 }, data: {
    name: 'The Finca Owner', demographics: 'Agricultural landowner, traditional, relationship-first',
    painPoints: ['Rising costs', 'Land underutilization', 'Off-grid needs'],
    channels: ['Personal intro', 'WhatsApp (ES)'], color: '#f97316',
  }},

  // Awareness stage
  { id: 's1', type: 'stage', position: { x: 300, y: 100 }, data: { label: 'Awareness', funnelStage: '1' } },
  { id: 't1', type: 'touchpoint', position: { x: 300, y: 250 }, data: { label: 'Landing Page (Expats)', type: 'page', url: '' } },
  { id: 't2', type: 'touchpoint', position: { x: 300, y: 400 }, data: { label: 'Landing Page (Hotels)', type: 'page', url: '' } },
  { id: 'm1', type: 'message', position: { x: 300, y: 550 }, data: { content: 'Su Techo Ya Genera Dinero. Solo Falta Activarlo.', language: 'ES' } },

  // Interest stage
  { id: 's2', type: 'stage', position: { x: 600, y: 100 }, data: { label: 'Interest', funnelStage: '2' } },
  { id: 't3', type: 'touchpoint', position: { x: 600, y: 250 }, data: { label: 'ROI Calculator', type: 'page', url: '' } },
  { id: 't4', type: 'touchpoint', position: { x: 600, y: 400 }, data: { label: 'WhatsApp First Contact', type: 'whatsapp' } },

  // Consideration stage
  { id: 's3', type: 'stage', position: { x: 900, y: 100 }, data: { label: 'Consideration', funnelStage: '3' } },
  { id: 'd1', type: 'decision', position: { x: 900, y: 250 }, data: { question: 'Fills form?', yesLabel: 'Yes', noLabel: 'No' } },
  { id: 't5', type: 'touchpoint', position: { x: 900, y: 420 }, data: { label: 'Free Site Assessment', type: 'form' } },

  // Decision stage
  { id: 's4', type: 'stage', position: { x: 1200, y: 100 }, data: { label: 'Decision', funnelStage: '4' } },
  { id: 't6', type: 'touchpoint', position: { x: 1200, y: 250 }, data: { label: 'Custom Proposal (EPC vs PPA)', type: 'page' } },
  { id: 'k1', type: 'kpi', position: { x: 1200, y: 420 }, data: { label: 'Avg Cycle', value: '2-9 mo', target: '< 3 mo' } },

  // Conversion stage
  { id: 's5', type: 'stage', position: { x: 1500, y: 100 }, data: { label: 'Conversion', funnelStage: '5' } },
  { id: 't7', type: 'touchpoint', position: { x: 1500, y: 250 }, data: { label: 'Contract Signing', type: 'page' } },
  { id: 'k2', type: 'kpi', position: { x: 1500, y: 420 }, data: { label: 'Target CR', value: '5-10%', trend: 'up' } },
]

export const panamaJourneyEdges: Edge[] = [
  // Personas → Awareness
  { id: 'e-p1-s1', source: 'p1', target: 's1', animated: true, style: { stroke: '#8b5cf6' } },
  { id: 'e-p2-s1', source: 'p2', target: 's1', animated: true, style: { stroke: '#06b6d4' } },
  { id: 'e-p3-s1', source: 'p3', target: 's1', animated: true, style: { stroke: '#f97316' } },
  // Stage flow
  { id: 'e-s1-s2', source: 's1', target: 's2', style: { stroke: '#f59e0b' } },
  { id: 'e-s2-s3', source: 's2', target: 's3', style: { stroke: '#f59e0b' } },
  { id: 'e-s3-s4', source: 's3', target: 's4', style: { stroke: '#f59e0b' } },
  { id: 'e-s4-s5', source: 's4', target: 's5', style: { stroke: '#f59e0b' } },
  // Touchpoints
  { id: 'e-s1-t1', source: 's1', target: 't1', style: { stroke: '#27272a' } },
  { id: 'e-s1-t2', source: 's1', target: 't2', style: { stroke: '#27272a' } },
  { id: 'e-t2-m1', source: 't2', target: 'm1', style: { stroke: '#27272a' } },
  { id: 'e-s2-t3', source: 's2', target: 't3', style: { stroke: '#27272a' } },
  { id: 'e-s2-t4', source: 's2', target: 't4', style: { stroke: '#27272a' } },
  { id: 'e-s3-d1', source: 's3', target: 'd1', style: { stroke: '#27272a' } },
  { id: 'e-d1-t5', source: 'd1', target: 't5', sourceHandle: 'yes', style: { stroke: '#22c55e' } },
  { id: 'e-s4-t6', source: 's4', target: 't6', style: { stroke: '#27272a' } },
  { id: 'e-s4-k1', source: 's4', target: 'k1', style: { stroke: '#27272a' } },
  { id: 'e-s5-t7', source: 's5', target: 't7', style: { stroke: '#27272a' } },
  { id: 'e-s5-k2', source: 's5', target: 'k2', style: { stroke: '#27272a' } },
]
```

**Step 2: Create seed index that maps board IDs to seed data**

In `src/data/seeds/index.ts`:
```ts
import { panamaJourneyNodes, panamaJourneyEdges } from './panama-journey'

export const seedData: Record<string, { nodes: any[]; edges: any[] }> = {
  'panama-journey': { nodes: panamaJourneyNodes, edges: panamaJourneyEdges },
  // Add more seeds per product-board as they are created
}
```

**Step 3: Load seeds into canvas store on init**

Modify `src/stores/canvasStore.ts` — import seeds and set as initial state:
```ts
import { seedData } from '../data/seeds'

// In the store definition:
nodes: Object.fromEntries(
  Object.entries(seedData).map(([k, v]) => [k, v.nodes])
),
edges: Object.fromEntries(
  Object.entries(seedData).map(([k, v]) => [k, v.edges])
),
```

**Step 4: Verify Panama journey renders**

Run: `npm run dev` — select Panama → מסע לקוח tab → see the full journey with personas, stages, touchpoints, messages, decisions, and KPIs connected with colored edges.

**Step 5: Commit**

```bash
git add src/data/ src/stores/canvasStore.ts
git commit -m "feat: seed Panama customer journey with 3 personas + 5-stage flow"
```

---

## Task 10: Stitch Integration

**Files:**
- Create: `src/lib/stitch.ts`
- Modify: `src/components/panel/AssetPreviewPanel.tsx`

**Step 1: Create Stitch helper functions**

In `src/lib/stitch.ts`:
```ts
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
  // For now, store project reference for manual Stitch usage
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
```

**Step 2: Wire Stitch buttons in AssetPreviewPanel**

Update the "Edit in Stitch" and "Sync Screenshot" buttons to call these helpers and update node data via `useCanvasStore().updateNodeData()`.

**Step 3: Commit**

```bash
git add src/lib/stitch.ts src/components/panel/AssetPreviewPanel.tsx
git commit -m "feat: Stitch MCP integration scaffolding — create, export, sync helpers"
```

---

## Task 11: Supabase Auth + Persistence

**Files:**
- Create: `src/lib/supabase.ts`
- Create: `src/components/auth/AuthGate.tsx`
- Create: `src/hooks/usePersistence.ts`
- Create: `supabase/migrations/001_schema.sql`
- Modify: `src/App.tsx`

**Step 1: Create Supabase migration**

In `supabase/migrations/001_schema.sql`:
```sql
-- Products
create table products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  brand_config jsonb default '{}',
  icon text,
  created_at timestamptz default now()
);

-- Boards
create table boards (
  id uuid primary key default gen_random_uuid(),
  product_id uuid references products(id) on delete cascade,
  type text not null check (type in ('journey', 'funnel')),
  name text not null,
  viewport_state jsonb default '{}',
  created_at timestamptz default now()
);

-- Nodes
create table nodes (
  id uuid primary key default gen_random_uuid(),
  board_id uuid references boards(id) on delete cascade,
  type text not null,
  position_x float not null default 0,
  position_y float not null default 0,
  data_json jsonb default '{}',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Edges
create table edges (
  id uuid primary key default gen_random_uuid(),
  board_id uuid references boards(id) on delete cascade,
  source_node uuid references nodes(id) on delete cascade,
  target_node uuid references nodes(id) on delete cascade,
  source_handle text,
  target_handle text,
  label text,
  style jsonb default '{}',
  created_at timestamptz default now()
);

-- Assets
create table assets (
  id uuid primary key default gen_random_uuid(),
  node_id uuid references nodes(id) on delete cascade,
  type text not null check (type in ('page', 'email', 'ad', 'whatsapp', 'form')),
  url text,
  screenshot_url text,
  stitch_project_id text,
  stitch_screen_id text,
  created_at timestamptz default now()
);

-- Product Members (access control)
create table product_members (
  id uuid primary key default gen_random_uuid(),
  product_id uuid references products(id) on delete cascade,
  user_id uuid references auth.users(id) on delete cascade,
  role text not null default 'viewer' check (role in ('admin', 'editor', 'viewer')),
  created_at timestamptz default now(),
  unique(product_id, user_id)
);

-- RLS
alter table products enable row level security;
alter table boards enable row level security;
alter table nodes enable row level security;
alter table edges enable row level security;
alter table assets enable row level security;
alter table product_members enable row level security;

-- Admin sees all
create policy "admin_all" on products for all
  using (auth.jwt() ->> 'email' = 'k@kanielt.com');

create policy "admin_all" on boards for all
  using (exists (
    select 1 from products where products.id = boards.product_id
    and auth.jwt() ->> 'email' = 'k@kanielt.com'
  ));

-- Members see their products
create policy "members_select" on products for select
  using (exists (
    select 1 from product_members
    where product_members.product_id = products.id
    and product_members.user_id = auth.uid()
  ));

create policy "members_select" on boards for select
  using (exists (
    select 1 from product_members pm
    join products p on p.id = pm.product_id
    where p.id = boards.product_id
    and pm.user_id = auth.uid()
  ));

-- Similar policies for nodes, edges, assets (cascade through board → product)
create policy "members_select" on nodes for select
  using (exists (
    select 1 from boards b
    join product_members pm on pm.product_id = b.product_id
    where b.id = nodes.board_id and pm.user_id = auth.uid()
  ));

create policy "members_select" on edges for select
  using (exists (
    select 1 from boards b
    join product_members pm on pm.product_id = b.product_id
    where b.id = edges.board_id and pm.user_id = auth.uid()
  ));

create policy "members_select" on assets for select
  using (exists (
    select 1 from nodes n
    join boards b on b.id = n.board_id
    join product_members pm on pm.product_id = b.product_id
    where n.id = assets.node_id and pm.user_id = auth.uid()
  ));

-- Editors can insert/update
create policy "editors_modify" on nodes for all
  using (exists (
    select 1 from boards b
    join product_members pm on pm.product_id = b.product_id
    where b.id = nodes.board_id
    and pm.user_id = auth.uid()
    and pm.role in ('admin', 'editor')
  ));
```

**Step 2: Create Supabase client**

In `src/lib/supabase.ts`:
```ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

**Step 3: Create AuthGate component**

In `src/components/auth/AuthGate.tsx`:
```tsx
import { useEffect, useState, type ReactNode } from 'react'
import { supabase } from '../../lib/supabase'
import type { User } from '@supabase/supabase-js'

export function AuthGate({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
      setLoading(false)
    })
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })
    return () => subscription.unsubscribe()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-base flex items-center justify-center">
        <div className="text-text-secondary">Loading...</div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-base flex items-center justify-center">
        <div className="bg-card border border-border rounded-lg p-8 w-[360px]">
          <h1 className="text-lg font-semibold text-text-primary mb-1">Product Command</h1>
          <p className="text-sm text-text-secondary mb-6">Sign in with magic link</p>
          {sent ? (
            <p className="text-sm text-accent">Check your email for the login link.</p>
          ) : (
            <form onSubmit={async (e) => {
              e.preventDefault()
              await supabase.auth.signInWithOtp({ email })
              setSent(true)
            }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-3 py-2 bg-surface border border-border rounded-md text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-accent mb-3"
              />
              <button className="w-full py-2 bg-accent text-base text-sm font-medium rounded-md hover:bg-accent-hover">
                Send Magic Link
              </button>
            </form>
          )}
        </div>
      </div>
    )
  }

  return <>{children}</>
}
```

**Step 4: Create persistence hook (auto-save canvas to Supabase)**

In `src/hooks/usePersistence.ts`:
```ts
import { useEffect, useRef } from 'react'
import { useCanvasStore } from '../stores/canvasStore'
import { supabase } from '../lib/supabase'

export function usePersistence(boardId: string) {
  const nodes = useCanvasStore((s) => s.getNodes(boardId))
  const edges = useCanvasStore((s) => s.getEdges(boardId))
  const timeoutRef = useRef<NodeJS.Timeout>()

  // Debounced save
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(async () => {
      // Save nodes and edges as board snapshot
      await supabase.from('boards').update({
        viewport_state: { nodes, edges, savedAt: new Date().toISOString() },
      }).eq('id', boardId)
    }, 2000)
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }
  }, [nodes, edges, boardId])
}
```

**Step 5: Wrap App with AuthGate**

Modify `src/App.tsx`:
```tsx
import { AuthGate } from './components/auth/AuthGate'
import { AppShell } from './components/layout/AppShell'
import { BoardCanvas } from './components/canvas/BoardCanvas'

export default function App() {
  return (
    <AuthGate>
      <AppShell>
        <BoardCanvas />
      </AppShell>
    </AuthGate>
  )
}
```

**Step 6: Create .env.local template**

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

**Step 7: Commit**

```bash
git add src/ supabase/
git commit -m "feat: Supabase auth (magic link) + RLS + auto-save persistence"
```

---

## Task 12: Deploy to Vercel

**Step 1: Create GitHub repo**

```bash
cd ~/Desktop/projects/tools/product-command
gh repo create kaniel149/product-command --private --source=. --push
```

**Step 2: Create Vercel project**

```bash
npx vercel --yes
```

**Step 3: Set environment variables on Vercel**

```bash
vercel env add VITE_SUPABASE_URL production
vercel env add VITE_SUPABASE_ANON_KEY production
```

**Step 4: Deploy**

```bash
vercel --prod
```

**Step 5: Verify deployed app loads with auth screen**

**Step 6: Commit any deploy config changes**

```bash
git add -A
git commit -m "chore: Vercel deployment config"
```

---

## Summary

| Task | What | Commit |
|------|------|--------|
| 1 | Project scaffold | `chore: scaffold Vite + React + Tailwind + xyflow` |
| 2 | Design system | `feat: dark theme + persona colors + xyflow overrides` |
| 3 | Layout shell | `feat: app shell + product selector + board tabs` |
| 4 | Canvas | `feat: react-flow canvas with per-board state` |
| 5 | Custom nodes | `feat: 6 custom node types` |
| 6 | Node toolbar | `feat: add any node type from toolbar` |
| 7 | Inline editing | `feat: double-click to edit in place` |
| 8 | Asset preview | `feat: slide-in iframe preview panel` |
| 9 | Seed data | `feat: seed Panama journey with personas + flows` |
| 10 | Stitch | `feat: Stitch MCP integration scaffolding` |
| 11 | Auth + DB | `feat: Supabase auth + RLS + persistence` |
| 12 | Deploy | `chore: Vercel deployment` |
