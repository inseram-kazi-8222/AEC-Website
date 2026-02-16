import { Users, ShieldCheck, Handshake, BriefcaseBusiness, type LucideIcon } from "lucide-react";

type ValueItem = {
  title: string;
  Icon: LucideIcon;
  glowColor: string;
};

const values: ValueItem[] = [
  {
    title: "Customer Focus",
    Icon: Handshake,
    glowColor: "bg-brand-lime/30",
  },
  {
    title: "Professionalism",
    Icon: BriefcaseBusiness,
    glowColor: "bg-brand-electric/30",
  },
  {
    title: "Teamwork",
    Icon: Users,
    glowColor: "bg-brand-lime/30",
  },
  {
    title: "Integrity",
    Icon: ShieldCheck,
    glowColor: "bg-brand-electric/30",
  },
];

export function ValuesGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {values.map(({ title, Icon, glowColor }) => (
        <div key={title} className="group relative isolate">
          {/* Individual soft glow behind with default visibility */}
          <div
            className={`absolute -inset-2 -z-10 rounded-3xl opacity-50 blur-2xl transition-all duration-500 group-hover:opacity-100 ${glowColor}`}
          />

          <div className="h-full break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-brand-navy/80 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-brand-navy/90 hover:shadow-2xl">
            <Icon className="h-8 w-8 text-brand-lime transition-colors duration-300 group-hover:text-white group-hover:drop-shadow-md" aria-hidden="true" />
            <div className="mt-4 text-sm font-semibold tracking-[0.08em] uppercase text-white drop-shadow-sm">
              {title}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
