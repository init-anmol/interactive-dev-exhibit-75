
import { cn } from "@/lib/utils";
import { ArrowDown, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatedText } from "./ui/animated-text";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/50 rounded-bl-[100px] blur-3xl -z-10 opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/70 rounded-tr-[50px] blur-3xl -z-10 opacity-60"></div>

      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div
              className={cn(
                "opacity-0 transform translate-y-4 transition-all duration-700 ease-out",
                isLoaded && "opacity-100 translate-y-0"
              )}
            >
              <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-secondary mb-4">
                <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                Available for work
              </span>
            </div>

            <div className="space-y-4">
              <AnimatedText
                text="Full Stack Developer Specializing in Next.js"
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
              />

              <AnimatedText
                text="I build responsive, accessible, and performant web applications with modern technologies."
                className="text-xl text-muted-foreground max-w-xl"
              />
            </div>

            <div
              className={cn(
                "flex flex-wrap gap-4 opacity-0",
                isLoaded && "animate-fade-up stagger-delay-5"
              )}
            >
              <a
                href="#projects"
                className="inline-flex items-center h-12 px-6 rounded-lg bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90"
              >
                View my work
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center h-12 px-6 rounded-lg bg-secondary text-secondary-foreground font-medium transition-colors hover:bg-secondary/90"
              >
                Contact me
              </a>
            </div>
          </div>

          <div
            className={cn(
              "relative mx-auto lg:mr-0 max-w-md opacity-0",
              isLoaded && "animate-fade-in stagger-delay-3"
            )}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-100 to-blue-100 transform rotate-6 rounded-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
                alt="Developer workspace"
                className="relative z-10 rounded-2xl shadow-lg animate-float"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <a
            href="#projects"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-white/100 transition-colors"
            aria-label="Scroll to projects"
          >
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
