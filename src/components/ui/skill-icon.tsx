
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
      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white rounded-xl shadow-sm p-3 mb-3 glass">
        <img src={icon} alt={name} className="max-w-full max-h-full" />
      </div>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
};
