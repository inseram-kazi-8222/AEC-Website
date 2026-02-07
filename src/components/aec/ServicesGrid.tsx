import { Card, CardContent } from "@/components/ui/card";

const services = [
  "Architectural Design",
  "MEP Design",
  "Structural Design",
  "Interior Design",
  "Civil Engineering",
  "Value Engineering",
  "Quantity Surveying",
  "Project & Contract Management",
] as const;

export function ServicesGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((s) => (
        <Card key={s} className="shadow-none">
          <CardContent className="p-6">
            <div className="text-sm font-semibold tracking-[0.06em] uppercase">{s}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
