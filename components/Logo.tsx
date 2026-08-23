export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="ReGest"
    >
      <rect width="64" height="64" rx="16" fill="#27AE9D" />
      <text
        x="50%"
        y="54%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="var(--font-inter), ui-sans-serif, system-ui, sans-serif"
        fontWeight="800"
        fontSize="34"
        fill="#ffffff"
      >
        R
      </text>
    </svg>
  );
}

export function Logo({ className = "", markClassName = "h-9 w-9" }: { className?: string; markClassName?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={markClassName} />
      <span className="text-xl font-extrabold tracking-tight">
        <span className="text-regest-green">Re</span>
        <span className="text-regest-dark">Gest</span>
      </span>
    </span>
  );
}
