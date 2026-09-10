"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  className?: string;
  label?: string;
}

/**
 * Animated horizontal progress bar for project completion.
 */
export function ProgressBar({ value, className, label }: ProgressBarProps) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const clamped = Math.max(0, Math.min(100, value));

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(clamped);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [clamped]);

  return (
    <div className={cn("w-full", className)} ref={ref}>
      {label ? (
        <div className="mb-2 flex justify-between font-mono text-[11px] tracking-[0.12em] text-muted">
          <span>{label}</span>
          <span>{clamped}%</span>
        </div>
      ) : null}
      <div
        className="h-px w-full bg-border"
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label ?? "Progress"}
      >
        <div
          className="h-full bg-accent transition-[width] duration-1000 ease-out motion-reduce:transition-none"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}
