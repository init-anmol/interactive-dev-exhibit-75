
import { ProjectCard } from "./ui/project-card";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform built with Next.js, featuring product search, filtering, cart functionality, and Stripe payment integration.",
    tags: ["Next.js", "React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team workspaces, and progress tracking features.",
    tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1672&q=80",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Finance Dashboard",
    description:
      "An analytics dashboard for financial data visualization with interactive charts, data filtering, and report generation.",
    tags: ["Next.js", "TypeScript", "Recharts", "Supabase"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Social Media Platform",
    description:
      "A social networking application with user profiles, real-time messaging, post sharing, and content discovery features.",
    tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white/50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            Here's a selection of my recent work showcasing my skills and
            experience in web development, from interactive user interfaces to
            complex backend systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              className={`delay-${index * 100}`}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center h-12 px-6 rounded-lg bg-secondary text-secondary-foreground font-medium transition-colors hover:bg-secondary/80"
          >
            View more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
