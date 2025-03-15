
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

type AnimatedTextProps = {
  text: string;
  className?: string;
  once?: boolean;
  threshold?: number;
};

export const AnimatedText = ({
  text,
  className,
  once = true,
  threshold = 0.1,
}: AnimatedTextProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [once, threshold]);

  const words = text.split(" ");

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <div className="flex flex-wrap">
        {words.map((word, i) => (
          <span
            key={i}
            className={cn(
              "mr-1.5 mb-1.5 transform opacity-0",
              isVisible && "animate-fade-up"
            )}
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};
