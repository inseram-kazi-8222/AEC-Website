import * as React from "react";
import { Menu, ChevronDown } from "lucide-react";

import logoMark from "@/assets/aec-logo-mark.png";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { type SectionLink, useActiveSection } from "@/hooks/use-active-section";

interface AecHeaderProps {
  primaryLinks: SectionLink[];
  moreLinks?: SectionLink[];
}

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function AecHeader({ primaryLinks, moreLinks = [] }: AecHeaderProps) {
  const isMobile = useIsMobile();
  const allLinks = React.useMemo(() => [...primaryLinks, ...moreLinks], [primaryLinks, moreLinks]);
  const activeId = useActiveSection(allLinks);

  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkBase =
    "relative px-1 py-2 text-xs font-semibold tracking-[0.18em] uppercase transition-colors text-brand-navy-foreground/85 hover:text-brand-navy-foreground";
  const underline =
    "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-brand-electric after:transition-transform after:duration-300 hover:after:scale-x-100";
  const active = "text-brand-electric after:scale-x-100";

  return (
    <header
      className={cn(
        "aec-header sticky top-0 z-50 w-full border-b border-border bg-brand-navy supports-[backdrop-filter]:bg-brand-navy/95 backdrop-blur transition-all",
        scrolled ? "shadow-sm" : "shadow-none",
      )}
    >
      <div
        className={cn("container flex items-center justify-between", scrolled ? "h-16" : "h-20")}
        style={{ transition: "height 200ms ease" }}
      >
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("hero");
          }}
          className="flex items-center gap-3"
          aria-label="Agile Engineering Consultants (AEC) — Go to top"
        >
          <img
            src={logoMark}
            alt="AEC logo mark"
            className={cn(
              "h-10 w-10 shrink-0 object-contain transition-[width,height] duration-200",
              scrolled ? "h-9 w-9" : "h-10 w-10",
            )}
            loading="eager"
          />

          <span className="flex flex-col leading-none">
            <span className="text-lg font-semibold tracking-[0.22em] text-brand-navy-foreground">AEC</span>
            <span className="mt-1 text-[11px] font-semibold tracking-[0.18em] uppercase text-brand-navy-foreground/75">
              Agile Engineering Consultants
            </span>
          </span>
        </a>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="border-brand-navy-foreground/30 bg-transparent text-brand-navy-foreground hover:bg-brand-navy-foreground/10"
                aria-label="Open navigation menu"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="p-0" side="right">
              <div className="p-6">
                <div className="text-sm font-semibold tracking-[0.18em] uppercase text-primary">Navigation</div>
                <Separator className="my-4" />

                <nav className="grid gap-2">
                  {primaryLinks.map((l) => (
                    <a
                      key={l.id}
                      href={`#${l.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToId(l.id);
                      }}
                      className={cn(
                        "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                        l.id === activeId ? "bg-accent text-foreground" : "hover:bg-accent",
                      )}
                    >
                      {l.label}
                    </a>
                  ))}

                  {moreLinks.length ? (
                    <Accordion type="single" collapsible className="mt-2">
                      <AccordionItem value="more" className="border-b-0">
                        <AccordionTrigger className="rounded-md px-3 py-2 text-sm font-medium hover:no-underline hover:bg-accent">
                          More
                        </AccordionTrigger>
                        <AccordionContent className="pt-2">
                          <div className="grid gap-1">
                            {moreLinks.map((l) => (
                              <a
                                key={l.id}
                                href={`#${l.id}`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  scrollToId(l.id);
                                }}
                                className={cn(
                                  "rounded-md px-3 py-2 text-sm transition-colors",
                                  l.id === activeId ? "bg-accent text-foreground" : "hover:bg-accent",
                                )}
                              >
                                {l.label}
                              </a>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : null}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="hidden lg:flex items-center gap-8">
            {primaryLinks.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(l.id);
                }}
                className={cn(linkBase, underline, l.id === activeId && active)}
              >
                {l.label}
              </a>
            ))}

            {moreLinks.length ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    className={cn(
                      linkBase,
                      underline,
                      moreLinks.some((l) => l.id === activeId) && active,
                      "inline-flex items-center gap-1",
                    )}
                    aria-label="Open more navigation links"
                  >
                    More <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="z-50 w-56 bg-popover">
                  {moreLinks.map((l, idx) => (
                    <React.Fragment key={l.id}>
                      <DropdownMenuItem
                        onSelect={(e) => {
                          e.preventDefault();
                          scrollToId(l.id);
                        }}
                        className={cn("cursor-pointer", l.id === activeId && "text-primary")}
                      >
                        {l.label}
                      </DropdownMenuItem>
                      {idx === 0 ? <DropdownMenuSeparator /> : null}
                    </React.Fragment>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : null}
          </nav>
        )}
      </div>
    </header>
  );
}
