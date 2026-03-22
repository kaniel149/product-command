import { AppShell } from './components/layout/AppShell'
import { BoardCanvas } from './components/canvas/BoardCanvas'

export default function App() {
  return (
    <AppShell>
      <BoardCanvas />
    </AppShell>
  )
}
