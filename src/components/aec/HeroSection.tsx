import * as React from "react";
import heroImage from "@/assets/aec-hero.jpg";
import heroSideCard from "@/assets/hero-side-card.jpg";
import logoFull from "@/assets/aec-logo-full.png";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

import { FadeIn } from "@/components/aec/FadeIn";
import { Button } from "@/components/ui/button";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}


export function HeroSection() {
  return (
    <section id="hero" className="scroll-mt-28 dark" aria-labelledby="hero-title">
      <div className="relative border-b border-border">
        {/* Subtle industry background (blueprint grid + faint image) */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div
            className={
              "absolute inset-0 opacity-60 " +
              "[background-image:linear-gradient(to_right,hsl(var(--border)/0.45)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.45)_1px,transparent_1px)] " +
              "[background-size:56px_56px]"
            }
          />
          <img
            src={heroImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-[0.22] motion-safe:animate-[aec-hero-pan_18s_ease-in-out_infinite] motion-reduce:animate-none"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/25 via-background/60 to-background/95" />
        </div>

        <div className="relative">
          <div className="container py-16 sm:py-20 lg:py-24">
            <FadeIn>
              <div className="grid items-start gap-12 lg:grid-cols-12">
                {/* Left */}
                <div className="lg:col-span-7">
                  <header>
                    <p className="text-xs font-semibold tracking-[0.22em] uppercase text-muted-foreground">
                      Architectural • Structural • MEP • Project Management
                    </p>
                    <h1
                      id="hero-title"
                      className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-[0.08em] uppercase sm:text-5xl"
                    >
                      AGILE ENGINEERING
                      <br />
                      CONSULTANTS
                    </h1>
                    <p className="mt-3 text-sm font-semibold tracking-[0.18em] uppercase text-primary">(AEC)</p>
                  </header>

                  <div className="mt-8 max-w-[38rem] space-y-6 text-sm leading-relaxed text-foreground/80">
                    <p>
                      Agile Engineering Consultants (AEC) is an Architectural Engineering Consultancy, and our business is
                      rapidly emerging in Architecture, Structure & MEP Design and Project Management, mainly in United Arab
                      Emirates (UAE) and across Middle East region.
                    </p>
                    <p>
                      Our team comprises of high-quality professionals who strive to provide professional services to ensure
                      that we play a major role in the national growth of UAE through our experience and expertise.
                    </p>
                    <p>
                      Customer focus is our top priority and one of our core values. We strive to build strong relationship
                      with our clients by providing best services in line with project requirements.
                    </p>
                  </div>

                  <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                    <Button
                      className="gap-2"
                      onClick={() => scrollToId("projects")}
                      aria-label="View our projects"
                    >
                      View Our Projects <ArrowRight className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="cta"
                      onClick={() => scrollToId("contact")}
                      aria-label="Contact us"
                    >
                      Contact Us
                    </Button>
                  </div>
                </div>

                {/* Right (image-first) */}
                <aside className="lg:col-span-5">
                  <div className="overflow-hidden rounded-lg border border-border bg-card">
                    <div className="relative aspect-[4/3]">
                      <img
                        src={heroSideCard}
                        alt="Agile Engineering Consultants office and team"
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-background/25" aria-hidden="true" />
                    </div>

                    <div className="bg-secondary p-7">
                      <img
                        src={logoFull}
                        alt="Agile Engineering Consultants (AEC) logo"
                        className="h-10 w-auto object-contain"
                        loading="lazy"
                      />
                      <div className="mt-5 text-xs font-semibold tracking-[0.22em] uppercase text-muted-foreground">
                        Contact Information
                      </div>
                      <div className="mt-5 space-y-4 text-sm text-foreground/80">
                        <div className="flex items-start gap-3">
                          <Phone className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                          <span>+971-4-33 999 25</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Mail className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                          <a className="story-link text-foreground" href="mailto:info@agileeng.net">
                            info@agileeng.net
                          </a>
                        </div>
                        <div className="flex items-start gap-3">
                          <MapPin className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                          <span>P.O. Box 89804, Dubai, United Arab Emirates</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
