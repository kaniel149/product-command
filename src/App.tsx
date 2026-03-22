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
