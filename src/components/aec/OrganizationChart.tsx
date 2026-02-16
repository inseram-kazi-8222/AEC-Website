import { cn } from "@/lib/utils";

function Box({ children, className, glowColor = "bg-brand-electric/20" }: { children: React.ReactNode; className?: string; glowColor?: string }) {
  return (
    <div className="relative group isolate">
      {/* Glow effect */}
      <div
        className={`absolute -inset-1 -z-10 rounded-xl opacity-40 blur-lg transition-opacity duration-500 group-hover:opacity-100 ${glowColor}`}
      />
      <div
        className={cn(
          "rounded-lg border border-white/10 bg-brand-navy/80 px-5 py-4 text-sm shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-navy/90 hover:border-white/20",
          "text-white",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}

function GroupTitle({ children }: { children: React.ReactNode }) {
  return <div className="text-xs font-bold tracking-[0.18em] uppercase text-brand-lime drop-shadow-sm">{children}</div>;
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-1.5 text-sm text-white/70">
      {items.map((i) => (
        <li key={i} className="leading-relaxed hover:text-white transition-colors">
          {i}
        </li>
      ))}
    </ul>
  );
}

export function OrganizationChart() {
  return (
    <div className="relative">
      {/* Desktop / large layout */}
      <div className="hidden lg:block">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 flex flex-col items-center">
              <Box className="w-[300px] text-center font-bold text-lg tracking-wide" glowColor="bg-brand-electric/40">Board of Directors</Box>
              <div className="relative h-12 w-0.5 bg-brand-navy/30" aria-hidden="true" />
              <Box className="w-[300px] text-center font-bold text-lg tracking-wide" glowColor="bg-brand-lime/40">Managing Director</Box>
            </div>

            <div className="col-span-12 relative">
              {/* Horizontal connecting line */}
              <div className="absolute left-1/2 top-0 h-0.5 w-[80%] -translate-x-1/2 bg-brand-navy/30" aria-hidden="true" />

              <div className="grid grid-cols-12 gap-8 pt-10">
                <div className="col-span-6 flex flex-col items-center">
                  {/* Vertical line to group */}
                  <div className="absolute left-1/4 top-0 h-10 w-0.5 bg-brand-navy/30" aria-hidden="true" />
                  <Box className="w-full max-w-[420px]" glowColor="bg-brand-electric/30">
                    <GroupTitle>Admin & Account Dept.</GroupTitle>
                    <List items={["HR & Administration", "Accounts & Finance"]} />
                  </Box>
                </div>

                <div className="col-span-6 flex flex-col items-center">
                  {/* Vertical line to group */}
                  <div className="absolute left-3/4 top-0 h-10 w-0.5 bg-brand-navy/30" aria-hidden="true" />

                  <Box className="w-full max-w-[520px]" glowColor="bg-brand-lime/30">
                    <GroupTitle>Technical & Project Dept.</GroupTitle>

                    <div className="mt-5 grid gap-6 md:grid-cols-2">
                      <div>
                        <div className="mb-2 text-xs font-semibold tracking-[0.14em] uppercase text-white/90">Design Team</div>
                        <List
                          items={[
                            "Architectural / Interior Design / 3D CAD / Studio Design",
                            "Structural Engineer",
                            "Architectural Draftsman",
                            "MEP Engineers",
                            "MEP Draftsman",
                            "Structural Draftsman",
                            "QS / Contract Engineer",
                          ]}
                        />
                      </div>
                      <div>
                        <div className="mb-2 text-xs font-semibold tracking-[0.14em] uppercase text-white/90">Projects & Contract Management</div>
                        <List
                          items={[
                            "Project Engineer",
                            "MEP Engineer",
                            "QS / Planning / HSE Engineer",
                            "QA / QC Engineer",
                            "Secretary",
                          ]}
                        />
                      </div>
                    </div>
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile / small layout */}
      <div className="lg:hidden">
        <div className="grid gap-6">
          <Box className="text-center font-bold text-lg" glowColor="bg-brand-electric/40">Board of Directors</Box>
          <Box className="text-center font-bold text-lg" glowColor="bg-brand-lime/40">Managing Director</Box>

          <Box glowColor="bg-brand-electric/30">
            <GroupTitle>Admin & Account Dept.</GroupTitle>
            <List items={["HR & Administration", "Accounts & Finance"]} />
          </Box>

          <Box glowColor="bg-brand-lime/30">
            <GroupTitle>Technical & Project Dept.</GroupTitle>

            <div className="mt-5 grid gap-6">
              <div>
                <div className="mb-2 text-xs font-semibold tracking-[0.14em] uppercase text-white/90">Design Team</div>
                <List
                  items={[
                    "Architectural / Interior Design / 3D CAD / Studio Design",
                    "Structural Engineer",
                    "Architectural Draftsman",
                    "MEP Engineers",
                    "MEP Draftsman",
                    "Structural Draftsman",
                    "QS / Contract Engineer",
                  ]}
                />
              </div>
              <div>
                <div className="mb-2 text-xs font-semibold tracking-[0.14em] uppercase text-white/90">Projects & Contract Management</div>
                <List
                  items={["Project Engineer", "MEP Engineer", "QS / Planning / HSE Engineer", "QA / QC Engineer", "Secretary"]}
                />
              </div>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}
