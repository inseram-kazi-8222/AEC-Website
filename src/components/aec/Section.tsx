import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  tone?: "plain" | "muted";
  children: React.ReactNode;
}

export function Section({ id, title, subtitle, tone = "plain", children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 border-t border-border",
        tone === "muted" && "bg-muted/60",
      )}
      aria-labelledby={`${id}-title`}
    >
      <div className="container py-14 sm:py-16">
        <div className="max-w-4xl">
          <div className="flex items-start gap-4">
            <div className="mt-1 h-10 w-1 rounded-full bg-primary" aria-hidden="true" />
            <div className="min-w-0">
              <h2
                id={`${id}-title`}
                className="text-balance text-lg font-semibold tracking-[0.18em] text-primary uppercase"
              >
                {title}
              </h2>
              {subtitle ? <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p> : null}
            </div>
          </div>
        </div>

        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
