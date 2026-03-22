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
