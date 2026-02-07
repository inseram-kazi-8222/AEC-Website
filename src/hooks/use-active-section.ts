import * as React from "react";

export interface SectionLink {
  id: string;
  label: string;
}

export function useActiveSection(links: SectionLink[]) {
  const [activeId, setActiveId] = React.useState<string>(links[0]?.id ?? "");

  React.useEffect(() => {
    const ids = links.map((l) => l.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));
        const top = visible[0]?.target as HTMLElement | undefined;
        if (top?.id) setActiveId(top.id);
      },
      {
        root: null,
        threshold: [0.15, 0.25, 0.35, 0.5, 0.75],
        rootMargin: "-20% 0px -70% 0px",
      },
    );

    elements.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [links]);

  return activeId;
}
