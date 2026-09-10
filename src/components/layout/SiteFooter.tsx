import Link from "next/link";
import { Container } from "@/components/ui/Container";

/**
 * Minimal site footer with brand and primary routes.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-border py-12 md:py-16">
      <Container className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold tracking-tight">
            MAKE
            <br />
            SOMETHING.
          </p>
          <p className="mt-3 max-w-sm text-sm text-muted">
            아이디어를 말하는 사람에서, 직접 만드는 사람으로.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 font-mono text-[11px] tracking-[0.14em] text-muted">
          <Link href="/about" className="hover:text-fg">
            ABOUT
          </Link>
          <Link href="/projects" className="hover:text-fg">
            PROJECTS
          </Link>
          <Link href="/makers" className="hover:text-fg">
            MAKERS
          </Link>
          <Link href="/join" className="hover:text-fg">
            JOIN
          </Link>
        </div>
      </Container>
      <Container className="mt-10">
        <p className="font-mono text-[10px] tracking-[0.12em] text-muted">
          © {new Date().getFullYear()} MAKE SOMETHING — Maker Collective
        </p>
      </Container>
    </footer>
  );
}
