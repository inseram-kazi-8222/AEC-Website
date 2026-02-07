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
            <div className="space-y-6 text-base leading-relaxed text-foreground/80">
              <p>
                AEC is an Engineering Consultancy, established and operating in United Arab Emirates (UAE). We provide complete
                solution in architectural, structural and MEP engineering as per the client’s requirement to provide the
                highest value.
              </p>
              <p className="border-l-2 border-primary/40 pl-5 text-sm leading-relaxed text-foreground/70">
                AEC comprises exceptionally skilled and experienced staff with expertise in engineering design and project
                management. Our team follows a design orientated methodology backed by stringent project management to ensure
                we deliver the projects on time and as per client’s expectations.
              </p>
            </div>
          </Section>
        </FadeIn>

        {/* 3) ABOUT US */}
        <FadeIn>
          <Section id="about" title="ABOUT US" tone="muted">
            <div className="space-y-8">
              <div className="space-y-5 text-base leading-relaxed text-foreground/80">
                <p>
                  AEC has been established by a group of competent professionals involved in the industry for the past 20
                  years, having vast experience in Building Design, Industrial Design & Construction and Project Management.
                </p>

                <div className="rounded-lg border border-border bg-card/80 p-5">
                  <p className="text-base font-medium leading-relaxed text-primary">
                    Customer focus and professionalism is at the heart of our business.
                  </p>
                </div>

                <p>
                  Through passionate efforts and teamwork, we deliver high-quality results thereby maintaining high level of
                  integrity.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="break-inside-avoid rounded-lg border border-border bg-card p-5">
                  <div className="text-2xl font-semibold tracking-tight text-foreground">20+</div>
                  <div className="mt-1 text-sm text-muted-foreground">Years industry experience</div>
                </div>
                <div className="break-inside-avoid rounded-lg border border-border bg-card p-5">
                  <div className="text-2xl font-semibold tracking-tight text-foreground">100+</div>
                  <div className="mt-1 text-sm text-muted-foreground">Projects delivered</div>
                </div>
                <div className="break-inside-avoid rounded-lg border border-border bg-card p-5">
                  <div className="text-2xl font-semibold tracking-tight text-foreground">UAE</div>
                  <div className="mt-1 text-sm text-muted-foreground">& Middle East presence</div>
                </div>
              </div>
            </div>
          </Section>
        </FadeIn>

        {/* 4) OUR VISION */}
        <FadeIn>
          <Section id="vision" title="OUR VISION">
            <ul className="max-w-4xl list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
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
          <Section id="services" title="OUR SERVICES">
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
            <div className="max-w-4xl space-y-4 text-sm leading-relaxed text-muted-foreground">
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
              <div className="rounded-lg border border-border bg-card p-8">
                <div className="space-y-1 text-sm">
                  <div>City Business Bay Center</div>
                  <div>Office Number 316</div>
                  <div>Near Abu Hail Metro Station</div>
                  <div>P.O. Box 89804, Dubai, UAE</div>
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
        <section id="contact" className="scroll-mt-28 border-t border-border bg-background" aria-labelledby="contact-title">
          <div className="container py-14 sm:py-16">
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <h2 id="contact-title" className="text-balance text-2xl font-semibold tracking-[0.12em] uppercase">
                  THANK YOU
                </h2>

                <img
                  src={logoFull}
                  alt="Agile Engineering Consultants (AEC) logo"
                  className="mx-auto mt-7 h-10 w-auto object-contain"
                  loading="lazy"
                />

                <div className="mt-6 rounded-lg border border-border bg-card p-8">
                  <div className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">
                    AGILE ENGINEERING CONSULTANTS (AEC)
                  </div>
                  <div className="mt-4 space-y-2 text-sm">
                    <div>Tel: +971-4-33 999 25</div>
                    <div>
                      <a className="text-primary underline underline-offset-4" href="mailto:info@agileeng.net">
                        info@agileeng.net
                      </a>
                    </div>
                    <div>P.O. Box 89804, Dubai, United Arab Emirates</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;

