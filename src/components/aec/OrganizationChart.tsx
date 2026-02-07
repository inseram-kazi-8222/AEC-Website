import { cn } from "@/lib/utils";

function Box({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-card px-4 py-3 text-sm",
        "text-foreground",
        className,
      )}
    >
      {children}
    </div>
  );
}

function GroupTitle({ children }: { children: React.ReactNode }) {
  return <div className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">{children}</div>;
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
      {items.map((i) => (
        <li key={i} className="leading-relaxed">
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
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 flex flex-col items-center">
              <Box className="w-[280px] text-center font-semibold">Board of Directors</Box>
              <div className="relative h-10 w-px bg-border" aria-hidden="true" />
              <Box className="w-[280px] text-center font-semibold">Managing Director</Box>
            </div>

            <div className="col-span-12 relative">
              <div className="absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-border" aria-hidden="true" />
              <div className="grid grid-cols-12 gap-6 pt-8">
                <div className="col-span-6 flex flex-col items-center">
                  <div className="absolute left-1/4 top-0 h-8 w-px bg-border" aria-hidden="true" />
                  <Box className="w-full max-w-[420px]">
                    <GroupTitle>Admin & Account Dept.</GroupTitle>
                    <List items={["HR & Administration", "Accounts & Finance"]} />
                  </Box>
                </div>

                <div className="col-span-6 flex flex-col items-center">
                  <div className="absolute left-3/4 top-0 h-8 w-px bg-border" aria-hidden="true" />

                  <Box className="w-full max-w-[520px]">
                    <GroupTitle>Technical & Project Dept.</GroupTitle>

                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      <div>
                        <div className="text-xs font-semibold tracking-[0.14em] uppercase">Design Team</div>
                        <List
                          items={[
                            "Architectural / Interior Design / 3D CAD / Studio Design",
                            "Architectural Draftsman",
                            "MEP Engineers",
                            "MEP Draftsman",
                            "Structural Engineer",
                            "Structural Draftsman",
                            "QS / Contract Engineer",
                          ]}
                        />
                      </div>
                      <div>
                        <div className="text-xs font-semibold tracking-[0.14em] uppercase">Projects & Contract Management</div>
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
        <div className="grid gap-4">
          <Box className="text-center font-semibold">Board of Directors</Box>
          <Box className="text-center font-semibold">Managing Director</Box>

          <Box>
            <GroupTitle>Admin & Account Dept.</GroupTitle>
            <List items={["HR & Administration", "Accounts & Finance"]} />
          </Box>

          <Box>
            <GroupTitle>Technical & Project Dept.</GroupTitle>

            <div className="mt-4 grid gap-4">
              <div>
                <div className="text-xs font-semibold tracking-[0.14em] uppercase">Design Team</div>
                <List
                  items={[
                    "Architectural / Interior Design / 3D CAD / Studio Design",
                    "Architectural Draftsman",
                    "MEP Engineers",
                    "MEP Draftsman",
                    "Structural Engineer",
                    "Structural Draftsman",
                    "QS / Contract Engineer",
                  ]}
                />
              </div>
              <div>
                <div className="text-xs font-semibold tracking-[0.14em] uppercase">Projects & Contract Management</div>
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
