import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
}

/**
 * Constrains page content to a consistent editorial max width.
 */
export function Container({
  children,
  className,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-[1280px] px-4 md:px-8 lg:px-10",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
