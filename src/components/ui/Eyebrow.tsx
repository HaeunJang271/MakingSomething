import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Monospace meta label used above section headlines.
 */
export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "font-mono text-[11px] uppercase tracking-[0.12em] text-muted break-words md:tracking-[0.18em]",
        className,
      )}
    >
      {children}
    </p>
  );
}
