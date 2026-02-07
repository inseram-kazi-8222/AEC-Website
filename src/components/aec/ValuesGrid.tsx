import { Users, ShieldCheck, Handshake, BriefcaseBusiness } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    title: "Customer Focus",
    Icon: Handshake,
  },
  {
    title: "Professionalism",
    Icon: BriefcaseBusiness,
  },
  {
    title: "Teamwork",
    Icon: Users,
  },
  {
    title: "Integrity",
    Icon: ShieldCheck,
  },
] as const;

export function ValuesGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {values.map(({ title, Icon }) => (
        <Card key={title} className="shadow-none">
          <CardContent className="p-6">
            <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
            <div className="mt-4 text-sm font-semibold tracking-[0.08em] uppercase">{title}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
