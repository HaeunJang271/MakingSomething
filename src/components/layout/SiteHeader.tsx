"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/seo";

const links = [
  { href: "/about", label: "ABOUT" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/makers", label: "MAKERS" },
  { href: "/join", label: "JOIN" },
];

/**
 * Site-wide navigation. Desktop shows full links; mobile shows logo only.
 */
export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between gap-3 px-4 md:h-16 md:px-8 lg:px-10">
        <Link
          href="/"
          className="min-w-0 truncate font-display text-sm font-bold tracking-[0.06em] md:text-base md:tracking-[0.08em]"
          aria-label="MAKE SOMETHING home"
        >
          MAKE SOMETHING
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-mono text-[11px] tracking-[0.16em] transition-colors hover:text-accent",
                pathname === link.href || pathname.startsWith(`${link.href}/`)
                  ? "text-fg"
                  : "text-muted",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <span className="font-mono text-[10px] tracking-[0.14em] text-muted">
            {siteConfig.status}
          </span>
          <Link
            href="/join"
            className="border border-fg px-3 py-1.5 font-mono text-[11px] tracking-[0.14em] transition-colors hover:border-accent hover:bg-accent hover:text-white"
          >
            JOIN
          </Link>
        </div>
      </div>
    </header>
  );
}
