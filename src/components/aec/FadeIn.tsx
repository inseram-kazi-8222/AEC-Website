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
        "transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className,
      )}
    >
      {children}
    </Comp>
  );
}
