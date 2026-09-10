import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "accent";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-fg text-bg hover:bg-accent hover:text-white border border-fg hover:border-accent",
  secondary:
    "bg-transparent text-fg border border-fg/30 hover:border-fg",
  ghost: "bg-transparent text-fg underline-offset-4 hover:underline px-0 w-auto sm:w-auto justify-start",
  accent:
    "bg-accent text-white border border-accent hover:bg-fg hover:border-fg",
};

/**
 * Text-link styled as a button for primary navigation CTAs.
 */
export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 w-full items-center justify-center gap-2 px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200 touch-manipulation sm:w-auto",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
