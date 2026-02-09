import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export type ProjectDetails = {
  title: string;
  location: string;
  stage: string;
  imageSrc?: string;
};

export function ProjectDetailsDialog({
  open,
  onOpenChange,
  project,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: ProjectDetails | null;
}) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] max-w-5xl max-h-[85vh] p-0 overflow-hidden">
        <div className="grid gap-0 md:grid-cols-[1.2fr_1fr]">
          <div className="bg-muted/30">
            {project.imageSrc ? (
              <AspectRatio ratio={16 / 10}>
                <img
                  src={project.imageSrc}
                  alt={`${project.title} project image`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </AspectRatio>
            ) : (
              <div className="flex h-full min-h-[240px] items-center justify-center p-8 text-sm text-muted-foreground">
                Image coming soon
              </div>
            )}
          </div>

          <div className="p-6 sm:p-8">
            <DialogHeader>
              <DialogTitle className="text-balance text-lg sm:text-xl">
                {project.title}
              </DialogTitle>
            </DialogHeader>

            <div className="mt-6 space-y-4 text-sm">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground">Location</div>
                <div className="mt-1 text-foreground">{project.location}</div>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <div className="text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground">Stage</div>
                <div className="mt-1 text-foreground">{project.stage}</div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
