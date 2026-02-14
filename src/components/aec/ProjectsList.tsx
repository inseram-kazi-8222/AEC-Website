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
        title: "G+1 Villa",
        location: "Nad Al Shiba, Dubai, UAE",
        stage: "Ongoing",
      },
      {
        title: "G+1 Villa",
        location: "Dubai South, UAE",
        stage: "Design Approved",
      },
      {
        title: "Latifa Villa",
        location: "Dubai, UAE",
        stage: "Under Design Development",
      },
      {
        title: "G+1 Villa",
        location: "Al Qusais, Dubai, UAE",
        stage: "Under Construction",
      },
      {
        title: "B+G+1 Villa",
        location: "Al Khawaneej 2, Dubai, UAE",
        stage: "Ongoing",
      },
      {
        title: "G+1 Villa",
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

function ProjectItem({
  title,
  location,
  stage,
  onOpen,
}: {
  title: string;
  location: string;
  stage: string;
  onOpen: () => void;
}) {
  return (
    <button type="button" onClick={onOpen} className="text-left">
      <Card className="shadow-none break-inside-avoid transition-[transform,box-shadow,border-color] hover:-translate-y-0.5 hover:shadow-md hover:border-primary/30">
        <CardContent className="p-6">
          <div className="text-sm font-semibold text-foreground">{title}</div>
          <div className="mt-2 text-sm text-muted-foreground">
            <div>Location – {location}</div>
            <div>Stage – {stage}</div>
          </div>
          <div className="mt-4 text-xs font-semibold tracking-[0.18em] uppercase text-primary">
            View details
          </div>
        </CardContent>
      </Card>
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
