
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface SkillIconProps {
  name: string;
  icon: string;
  className?: string;
}

export const SkillIcon = ({ name, icon, className }: SkillIconProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col items-center opacity-0",
        isVisible && "animate-fade-up",
        className
      )}
    >
      <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white/70 rounded-lg shadow-sm p-2 mb-2 glass hover:scale-110 transition-transform duration-300">
        <img src={icon} alt={name} className="max-w-full max-h-full" />
      </div>
      <span className="text-xs md:text-sm font-medium">{name}</span>
    </div>
  );
};
