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
