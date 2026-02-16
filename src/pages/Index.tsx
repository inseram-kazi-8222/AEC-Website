import logoFull from "@/assets/aec-logo-full.png";

import { AecHeader } from "@/components/aec/AecHeader";
import { FadeIn } from "@/components/aec/FadeIn";
import { Section } from "@/components/aec/Section";
import { HeroSection } from "@/components/aec/HeroSection";
import { OrganizationChart } from "@/components/aec/OrganizationChart";
import { ProjectsList } from "@/components/aec/ProjectsList";
import { ServicesGrid } from "@/components/aec/ServicesGrid";
import { ValuesGrid } from "@/components/aec/ValuesGrid";

const primaryNavLinks = [
  { id: "introduction", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "org-chart", label: "Organization" },
  { id: "contact", label: "Contact" },
] as const;

const moreNavLinks = [
  { id: "about", label: "About Us" },
  { id: "vision", label: "Vision" },
  { id: "values", label: "Values" },
  { id: "team", label: "Team" },
  { id: "office", label: "Office" },
] as const;

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AecHeader primaryLinks={[...primaryNavLinks]} moreLinks={[...moreNavLinks]} />

      <main>
        {/* 1) HERO */}
        <HeroSection />

        {/* 2) INTRODUCTION */}
        <FadeIn>
          <Section id="introduction" title="INTRODUCTION">
            <div className="space-y-6 text-lg leading-relaxed text-foreground/80 text-justify">
              <p>
                AEC is an Engineering Consultancy, established and operating in United Arab Emirates (UAE). We provide complete
                solution in architectural, structural and MEP engineering as per the client’s requirement to provide the
                highest value.
              </p>
              <div className="rounded-lg border border-white/20 bg-white/10 backdrop-blur-md p-5">
                <p className="border-l-2 border-primary/40 pl-5 text-base leading-relaxed text-foreground/70 text-justify">
                  AEC comprises exceptionally skilled and experienced staff with expertise in engineering design and project
                  management. Our team follows a design orientated methodology backed by stringent project management to ensure
                  we deliver the projects on time and as per client's expectations.
                </p>
              </div>
            </div>
          </Section>
        </FadeIn>

        {/* 3) ABOUT US */}
        <FadeIn>
          <Section id="about" title="ABOUT US">
            <div className="space-y-8">
              <div className="space-y-5 text-lg leading-relaxed text-foreground/80 text-justify">
                <p>
                  AEC has been established by a group of competent professionals involved in the industry for the past 20
                  years, having vast experience in Building Design, Industrial Design & Construction and Project Management.
                </p>

                <div className="rounded-lg border border-border bg-card/80 p-5">
                  <p className="text-lg font-medium leading-relaxed text-primary text-center">
                    Customer focus and professionalism is at the heart of our business.
                  </p>
                </div>

                <p>
                  Through passionate efforts and teamwork, we deliver high-quality results thereby maintaining high level of
                  integrity.
                </p>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {/* Card 1 */}
                <div className="group relative isolate">
                  {/* Individual soft glow behind */}
                  <div className="absolute -inset-2 -z-10 rounded-3xl bg-brand-electric/20 opacity-70 blur-2xl transition-all duration-500 group-hover:bg-brand-electric/30 group-hover:opacity-100" />

                  <div className="break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-brand-navy/80 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-brand-navy/90 hover:shadow-2xl">
                    <div className="relative">
                      <div className="text-4xl font-bold tracking-tight text-white drop-shadow-sm">20+</div>
                      <div className="mt-2 text-sm font-medium tracking-wide text-white/80">Years industry experience</div>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="group relative isolate">
                  <div className="absolute -inset-2 -z-10 rounded-3xl bg-brand-lime/20 opacity-70 blur-2xl transition-all duration-500 group-hover:bg-brand-lime/30 group-hover:opacity-100" />

                  <div className="break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-brand-navy/80 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-brand-navy/90 hover:shadow-2xl">
                    <div className="relative">
                      <div className="text-4xl font-bold tracking-tight text-white drop-shadow-sm">100+</div>
                      <div className="mt-2 text-sm font-medium tracking-wide text-white/80">Projects delivered</div>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="group relative isolate">
                  <div className="absolute -inset-2 -z-10 rounded-3xl bg-brand-electric/20 opacity-70 blur-2xl transition-all duration-500 group-hover:bg-brand-electric/30 group-hover:opacity-100" />

                  <div className="break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-brand-navy/80 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-brand-navy/90 hover:shadow-2xl">
                    <div className="relative">
                      <div className="text-4xl font-bold tracking-tight text-white drop-shadow-sm">UAE</div>
                      <div className="mt-2 text-sm font-medium tracking-wide text-white/80">& Middle East presence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </FadeIn>

        {/* 4) OUR VISION */}
        <FadeIn>
          <Section id="vision" title="OUR VISION">
            <ul className="max-w-4xl list-disc space-y-2 pl-5 text-lg leading-relaxed text-muted-foreground text-justify">
              <li>
                To be known as a leading, innovative organization, at the forefront of Architecture, Structural, MEP
                Engineering Services, Project and Contract Management.
              </li>
              <li>To ensure excellence through customer centricity and teamwork.</li>
            </ul>
          </Section>
        </FadeIn>

        {/* 5) VALUES */}
        <FadeIn>
          <Section id="values" title="OUR PRINCIPLES AND VALUES" tone="muted">
            <ValuesGrid />
          </Section>
        </FadeIn>

        {/* 6) SERVICES */}
        <FadeIn>
          <Section id="services" title="OUR SERVICES" tone="muted">
            <ServicesGrid />
          </Section>
        </FadeIn>

        {/* 7) ORG CHART */}
        <FadeIn>
          <Section id="org-chart" title="ORGANIZATION CHART" tone="muted">
            <OrganizationChart />
          </Section>
        </FadeIn>

        {/* 8) OUR TEAM */}
        <FadeIn>
          <Section id="team" title="OUR TEAM">
            <div className="max-w-4xl space-y-4 text-lg leading-relaxed text-muted-foreground text-justify">
              <p>
                AEC team is based in Dubai, comprising of highly experienced and qualified professionals, well-equipped to
                handle and deliver projects as per client needs.
              </p>
              <p>
                AEC staff has experience in various projects such as residential buildings, high rise buildings, commercial,
                retail, offices, petrol stations, malls, resorts & interior design, villas, mosque, labor accommodation etc.
              </p>
            </div>
          </Section>
        </FadeIn>

        {/* 9) OFFICE ADDRESS */}
        <FadeIn>
          <Section id="office" title="OFFICE ADDRESS" tone="muted">
            <div className="mx-auto max-w-xl text-center">
              <div className="group relative isolate">
                {/* Individual soft glow behind */}
                <div className="absolute -inset-2 -z-10 rounded-3xl bg-brand-lime/20 opacity-70 blur-2xl transition-all duration-500 group-hover:bg-brand-lime/30 group-hover:opacity-100" />

                <div className="break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-brand-navy/80 p-10 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-brand-navy/90 hover:shadow-2xl">
                  <div className="space-y-3 text-lg font-medium leading-relaxed text-white">
                    <div>City Business Bay Center</div>
                    <div>Office Number 316</div>
                    <div>Near Abu Hail Metro Station</div>
                    <div>P.O. Box 89804, Dubai, UAE</div>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </FadeIn>

        {/* 10) PROJECTS */}
        <FadeIn>
          <Section id="projects" title="PROJECTS">
            <ProjectsList />
          </Section>
        </FadeIn>

        {/* 11) FOOTER / CONTACT */}
        <section
          id="contact"
          className="scroll-mt-28 border-t border-border bg-brand-navy text-brand-navy-foreground"
          aria-labelledby="contact-title"
        >
          <div className="container py-16 sm:py-24">
            <div className="grid gap-12 md:grid-cols-4 lg:gap-16">
              {/* Left: Logo & Description */}
              <div className="md:col-span-1">
                <img
                  src={logoFull}
                  alt="Agile Engineering Consultants (AEC) logo"
                  className="h-27 w-auto object-contain brightness-0 invert"
                  loading="lazy"
                />
                <p className="mt-6 text-sm leading-relaxed text-brand-navy-foreground/80">
                  AEC is a leading engineering consultancy providing comprehensive solutions in architectural, structural and MEP engineering.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-sm font-semibold tracking-[0.1em] uppercase text-white">Quick Links</h3>
                <div className="mt-6 space-y-3">
                  <a href="#introduction" className="block text-sm text-brand-navy-foreground/80 transition-colors hover:text-primary">
                    About
                  </a>
                  <a href="#services" className="block text-sm text-brand-navy-foreground/80 transition-colors hover:text-primary">
                    Services
                  </a>
                  <a href="#projects" className="block text-sm text-brand-navy-foreground/80 transition-colors hover:text-primary">
                    Projects
                  </a>
                  <a href="#org-chart" className="block text-sm text-brand-navy-foreground/80 transition-colors hover:text-primary">
                    Organization
                  </a>
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-sm font-semibold tracking-[0.1em] uppercase text-white">Our Services</h3>
                <div className="mt-6 space-y-3">
                  <div className="text-sm text-brand-navy-foreground/80">Architectural Design</div>
                  <div className="text-sm text-brand-navy-foreground/80">Structural Works</div>
                  <div className="text-sm text-brand-navy-foreground/80">MEP Engineering</div>
                  <div className="text-sm text-brand-navy-foreground/80">Project Management</div>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-sm font-semibold tracking-[0.1em] uppercase text-white">Contact Us</h3>
                <div className="mt-6 space-y-4">
                  <div className="flex gap-3">
                    <span className="text-primary">📍</span>
                    <p className="text-sm text-brand-navy-foreground/80">P.O. Box 89804, Dubai, United Arab Emirates</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary">📞</span>
                    <a href="tel:+97143399925" className="text-sm text-brand-navy-foreground/80 transition-colors hover:text-primary">
                      +971-4-33 999 25
                    </a>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary">✉️</span>
                    <a href="mailto:info@agileeng.net" className="text-sm text-brand-navy-foreground/80 transition-colors hover:text-primary">
                      info@agileeng.net
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="my-12 h-px bg-brand-navy-foreground/10" />

            {/* Bottom */}
            <div className="text-center">
              <p className="text-sm text-brand-navy-foreground/60">
                © 2026 Agile Engineering Consultants. All rights reserved.
              </p>
              <p className="mt-2 text-xs text-brand-navy-foreground/50">
                Designed with ❤️ for engineering excellence
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;

