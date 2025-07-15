interface BadgeSpanProps {
  children: React.ReactNode
  className: string
}

export default function BadgeSpan({ children, className }: BadgeSpanProps) {
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${className}`}>
      { children }
    </span>
  )
}