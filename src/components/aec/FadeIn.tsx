import * as React from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

type As = keyof JSX.IntrinsicElements;

interface FadeInProps {
  as?: As;
  className?: string;
  children: React.ReactNode;
  once?: boolean;
}

export function FadeIn({ as = "div", className, children, once = true }: FadeInProps) {
  const { ref, inView } = useInView<HTMLElement>({ once });
  const Comp = as as any;

  return (
    <Comp
      ref={ref}
      className={cn(
        "transition-opacity duration-700 motion-reduce:transition-none",
        inView ? "opacity-100" : "opacity-0",
        className,
      )}
    >
      {children}
    </Comp>
  );
}
