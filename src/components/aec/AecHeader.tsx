import * as React from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { type SectionLink, useActiveSection } from "@/hooks/use-active-section";

interface AecHeaderProps {
  links: SectionLink[];
}

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function AecHeader({ links }: AecHeaderProps) {
  const isMobile = useIsMobile();
  const activeId = useActiveSection(links);

  return (
    <header className="aec-header sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container flex h-16 items-center justify-between gap-6">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("hero");
          }}
          className="group flex items-baseline gap-3 min-w-0"
          aria-label="Go to top"
        >
          <span className="text-base font-semibold tracking-[0.28em] text-primary">AEC</span>
          <span className="hidden sm:inline text-xs tracking-[0.22em] uppercase text-muted-foreground group-hover:text-foreground transition-colors">
            Agile Engineering Consultants
          </span>
        </a>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open navigation menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="p-0" side="right">
              <div className="p-6">
                <div className="text-sm font-semibold tracking-[0.18em] uppercase text-primary">Navigation</div>
                <Separator className="my-4" />
                <nav className="grid gap-2">
                  {links.map((l) => (
                    <a
                      key={l.id}
                      href={`#${l.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToId(l.id);
                      }}
                      className={cn(
                        "rounded-md px-3 py-2 text-sm transition-colors",
                        l.id === activeId ? "bg-accent text-accent-foreground" : "hover:bg-accent",
                      )}
                    >
                      {l.label}
                    </a>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(l.id);
                }}
                className={cn(
                  "rounded-md px-3 py-2 text-xs tracking-[0.16em] uppercase transition-colors",
                  l.id === activeId
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent",
                )}
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
