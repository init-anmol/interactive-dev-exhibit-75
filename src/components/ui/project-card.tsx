
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  className?: string;
}

export const ProjectCard = ({
  title,
  description,
  tags,
  image,
  liveUrl,
  githubUrl,
  className,
}: ProjectCardProps) => {
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
        "rounded-xl overflow-hidden bg-white shadow-md project-card-hover opacity-0",
        isVisible && "animate-fade-up",
        className
      )}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 text-balance">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-secondary px-2.5 py-1 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium animated-underline"
            >
              <ExternalLink className="mr-1.5 h-4 w-4" />
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium animated-underline"
            >
              <Github className="mr-1.5 h-4 w-4" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
