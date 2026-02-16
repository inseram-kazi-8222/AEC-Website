import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { projectTitleToImage } from "@/components/aec/project-media";
import { ProjectDetailsDialog, type ProjectDetails } from "@/components/aec/ProjectDetailsDialog";

type ProjectCategory = {
  title: string;
  projects: { title: string; location: string; stage: string }[];
};

const categories: ProjectCategory[] = [
  {
    title: "Industrial Works",
    projects: [
      {
        title: "G+1 Office & Warehouse (Interocean Ship Engineering services FZCO)",
        location: "Dubai Maritime city FZE, Dubai, UAE",
        stage: "Ongoing",
      },
      {
        title: "G+1 Office & Warehouse (Arcship Marine FZCO)",
        location: "Dubai Maritime city FZE, Dubai, UAE",
        stage: "Ongoing",
      },
      {
        title: "Warehouse Design Development (Nash Engineering)",
        location: "Jebal Ali, Dubai, UAE",
        stage: "Ongoing",
      },
    ],
  },
  {
    title: "Structural Works",
    projects: [
      {
        title: "Saadiyat Iceland Development, The Grove (Structural Work)",
        location: "Abu Dhabi, UAE",
        stage: "Under Construction",
      },
      {
        title: "Mosque (Structural Work)",
        location: "Damac Hills, Dubai, UAE",
        stage: "Under Construction",
      },
      {
        title: "Shading Pavilion",
        location: "Abu Dhabi, UAE",
        stage: "Completed",
      },
      {
        title: "Spiral Staircase",
        location: "Dubai, UAE",
        stage: "Construction",
      },
      {
        title: "Alaya Gardens – Clubhouse Canopy (Structural)",
        location: "Tilal Al-Ghaf, Dubai, UAE",
        stage: "Ongoing",
      },
    ],
  },
  {
    title: "Residential Works",
    projects: [
      {
        title: "B+G+P+14 Floor Residential apartments",
        location: "Jabal Ali First, Dubai, UAE",
        stage: "Ongoing",
      },
      {
        title: "B+G+1 Floor Residential Villa",
        location: "Dubai Hills, Dubai, UAE",
        stage: "Ongoing",
      },
      {
        title: "G+1 Villa (Nad Al Shiba)",
        location: "Nad Al Shiba, Dubai, UAE",
        stage: "Ongoing",
      },
      {
        title: "G+1 Villa (Sharjah)",
        location: "Sharjah, Dubai, UAE",
        stage: "Ongoing",
      },
      {
        title: "G+1 Villa (Dubai South)",
        location: "Dubai South, UAE",
        stage: "Design Approved",
      },
      {
        title: "Latifa Villa",
        location: "Dubai, UAE",
        stage: "Under Design Development",
      },
      {
        title: "G+1 Villa (Al Qusais)",
        location: "Al Qusais, Dubai, UAE",
        stage: "Under Construction",
      },
      {
        title: "B+G+1 Villa",
        location: "Al Khawaneej 2, Dubai, UAE",
        stage: "Ongoing",
      },
      {
        title: "G+1 Villa (Al Mamzar)",
        location: "Al Mamzar, Dubai, UAE",
        stage: "Ongoing",
      },
      {
        title: "Abdulla Al Khaja",
        location: "Al Awir First, Dubai, UAE",
        stage: "Ongoing",
      },
      {
        title: "G+2 Labour Accommodation",
        location: "Dubai, UAE",
        stage: "Completed",
      },
      {
        title: "G+4 Residential Building",
        location: "Dubai South, UAE",
        stage: "Under Design Development",
      },
      {
        title: "G+5 Labour Accommodation",
        location: "AL WARSAN 2, Dubai, UAE",
        stage: "Ongoing",
      },
      {
        title: "G+1+RF Residential Villa",
        location: "DAMAC HILLS 2 DUBAI RESIDENTIAL",
        stage: "Ongoing",
      }
    ],
  },
  {
    title: "Commercial Works",
    projects: [
      {
        title: "Front Elevation Development",
        location: "Al Manara, Dubai, UAE",
        stage: "Completed",
      },
      {
        title: "2B+G+2M+RF SOMEONE STAGE OFFICE BUILDING",
        location: "AL QUOZ DUBAI COMMERCIAL,",
        stage: "Ongoing",
      },
      {
        title: "Art Gallery",
        location: "Jumeirah, UAE",
        stage: "Under Construction",
      },
      {
        title: "ADB Luxury Car Services",
        location: "DIP, Dubai, UAE",
        stage: "Ongoing",
      },
      {
        title: "G+1 Workshop and Office Block – Inter Ocean Ship Engineering Services FZE",
        location: "DMC, Dubai, UAE",
        stage: "Ongoing",
      },
      {
        title: "G+1 Residential Building",
        location: "Al Khawaneej, UAE",
        stage: "Ongoing",
      },
    ],
  },
];

interface ProjectItemProps {
  title: string;
  location: string;
  stage: string;
  imageSrc?: string;
  onOpen: () => void;
}

function ProjectItem({
  title,
  location,
  stage,
  imageSrc,
  onOpen,
}: ProjectItemProps) {
  return (
    <button type="button" onClick={onOpen} className="group relative block w-full overflow-hidden rounded-xl bg-muted text-left shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
      {/* Image with zoom effect */}
      <div className="aspect-[16/10] w-full overflow-hidden">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-secondary text-muted-foreground">
            No Image
          </div>
        )}

        {/* Dark overlay fade-in */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
      </div>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="translate-y-2 transform transition-transform duration-300 group-hover:translate-y-0">
          <div className="text-xs font-semibold tracking-widest text-brand-orange uppercase mb-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {stage}
          </div>
          <h4 className="text-lg font-bold leading-tight drop-shadow-md mb-1">{title}</h4>
          <p className="text-sm text-white/80 line-clamp-1">{location}</p>
        </div>
      </div>
    </button>
  );
}


export function ProjectsList() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<ProjectDetails | null>(null);
  const [activeCategory, setActiveCategory] = React.useState(categories[0]?.title ?? "");

  const openProject = React.useCallback((p: { title: string; location: string; stage: string }) => {
    setSelected({
      title: p.title,
      location: p.location,
      stage: p.stage,
      imageSrc: projectTitleToImage[p.title],
    });
    setOpen(true);
  }, []);

  const currentCategory = categories.find((cat) => cat.title === activeCategory) ?? categories[0];

  return (
    <>
      <div className="space-y-8">
        <div className="rounded-2xl border border-border bg-card/90 p-6 shadow-sm">
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => {
              const isActive = cat.title === activeCategory;
              return (
                <button
                  key={cat.title}
                  type="button"
                  onClick={() => setActiveCategory(cat.title)}
                  className={
                    "rounded-xl border px-6 py-3 text-xs font-semibold tracking-[0.18em] uppercase transition-colors" +
                    (isActive
                      ? " border-primary/70 bg-primary/10 text-primary"
                      : " border-foreground/20 text-foreground/70 hover:border-primary/50 hover:text-primary")
                  }
                >
                  {cat.title}
                </button>
              );
            })}
          </div>
        </div>

        {currentCategory ? (
          <section key={currentCategory.title} aria-label={currentCategory.title}>
            <h3 className="text-sm font-semibold tracking-[0.14em] uppercase text-primary">
              {currentCategory.title}
            </h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {currentCategory.projects.map((p) => (
                <ProjectItem
                  key={`${currentCategory.title}-${p.title}`}
                  title={p.title}
                  location={p.location}
                  stage={p.stage}
                  onOpen={() => openProject(p)}
                  imageSrc={projectTitleToImage[p.title]}
                />
              ))}
            </div>
          </section>
        ) : null}
      </div>

      <ProjectDetailsDialog
        open={open}
        onOpenChange={(next) => {
          setOpen(next);
          if (!next) setSelected(null);
        }}
        project={selected}
      />
    </>
  );
}
