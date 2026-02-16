import { Card, CardContent } from "@/components/ui/card";

import bg1ResidentialVillaDubaiHills from "@/assets/projects/bg1-residential-villa-dubai-hills.png";
import interoceanOfficeWarehouse from "@/assets/projects/interocean-office-warehouse.png";
import mosqueStructural from "@/assets/projects/mosque-structural.png";
import spiralStaircase from "@/assets/projects/spiral-staircase.png";
import arcshipOfficeWarehouse from "@/assets/projects/arcship-office-warehouse.png";
import nashWarehouseDesignDevelopment from "@/assets/projects/nash-warehouse-design-development.png";
import bgp14ResidentialApartments from "@/assets/projects/bgp14-residential-apartments.png";
import alayaGardensClubhouseCanopy from "@/assets/projects/alaya-gardens-clubhouse-canopy.png";

const services = [
  {
    title: "Architectural Design",
    image: bg1ResidentialVillaDubaiHills,
    alt: "Architectural design concept rendering",
  },
  {
    title: "MEP Design",
    image: interoceanOfficeWarehouse,
    alt: "MEP design coordination for industrial facility",
  },
  {
    title: "Structural Design",
    image: mosqueStructural,
    alt: "Structural design for mosque project",
  },
  {
    title: "Interior Design",
    image: spiralStaircase,
    alt: "Interior design detail featuring spiral staircase",
  },
  {
    title: "Civil Engineering",
    image: arcshipOfficeWarehouse,
    alt: "Civil engineering works for office and warehouse",
  },
  {
    title: "Value Engineering",
    image: nashWarehouseDesignDevelopment,
    alt: "Value engineering for warehouse design development",
  },
  {
    title: "Quantity Surveying",
    image: bgp14ResidentialApartments,
    alt: "Quantity surveying for residential apartments",
  },
  {
    title: "Project & Contract Management",
    image: alayaGardensClubhouseCanopy,
    alt: "Project and contract management for canopy structure",
  },
] as const;

export function ServicesGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((s) => (
        <Card
          key={s.title}
          className="group overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-3 hover:shadow-xl hover:border-brand-electric/30"
        >
          <div className="relative aspect-[4/3] overflow-hidden border-b border-border bg-muted">
            <img
              src={s.image}
              alt={s.alt}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              loading="lazy"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40"
              aria-hidden="true"
            />
            {/* Overlay icon or indicator on hover could go here, but keeping it clean for corporate look */}
          </div>

          <CardContent className="p-6 relative">
            {/* Subtle animated underline */}
            <div className="text-sm font-semibold tracking-[0.06em] uppercase transition-colors group-hover:text-brand-electric">
              {s.title}
            </div>
            <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-brand-electric transition-all duration-300 group-hover:w-full" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
