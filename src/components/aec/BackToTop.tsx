import { ArrowUp } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

export function BackToTop() {
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 400);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            type="button"
            onClick={scrollToTop}
            className={cn(
                "fixed bottom-8 right-8 z-50 rounded-full bg-brand-orange text-white shadow-lg transition-all duration-300 hover:bg-brand-orange/90 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2",
                visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
            )}
            aria-label="Scroll to top"
        >
            <div className="flex h-12 w-12 items-center justify-center">
                <ArrowUp className="h-6 w-6" />
            </div>
        </button>
    );
}
