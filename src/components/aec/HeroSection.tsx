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
        {/* Animated abstract background */}
        <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-brand-navy/95 via-brand-navy/90 to-black/95">
          {/* Subtle animated particles/shapes */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -top-[10%] -left-[10%] h-[50vh] w-[50vh] rounded-full bg-brand-electric blur-[120px] animate-pulse" />
            <div className="absolute top-[40%] -right-[10%] h-[60vh] w-[60vh] rounded-full bg-brand-lime blur-[150px] animate-pulse delay-1000" />
            <div className="absolute -bottom-[20%] left-[20%] h-[40vh] w-[40vh] rounded-full bg-brand-orange blur-[100px] animate-pulse delay-700" />
          </div>

          {/* Engineering grid overlay */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

          <img
            src={heroImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-overlay motion-safe:animate-[aec-hero-pan_25s_ease-in-out_infinite]"
            loading="eager"
          />
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
