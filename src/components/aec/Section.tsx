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
        "relative overflow-hidden",
        // more deliberate, premium spacing
        "py-24 sm:py-28",
        tone === "muted" && "bg-muted/60 aec-blueprint",
      )}
      aria-labelledby={`${id}-title`}
    >
      <div className="container">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid gap-10 md:grid-cols-[minmax(220px,320px)_1fr] md:gap-14">
            {/* Left rail / label */}
            <div className="md:pt-1">
              <h2
                id={`${id}-title`}
                className="text-xs font-semibold tracking-[0.22em] text-foreground/80 uppercase"
              >
                {title}
              </h2>
              <div className="mt-4 h-px w-10 bg-primary" aria-hidden="true" />
              {subtitle ? (
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{subtitle}</p>
              ) : null}
            </div>

            {/* Right rail / content */}
            <div className="min-w-0">
              <div className="max-w-[700px]">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
