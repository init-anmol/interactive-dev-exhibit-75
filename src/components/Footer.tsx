
import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-1">Portfolio</h3>
            <p className="text-sm text-muted-foreground">
              Full Stack Web Developer
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-foreground transition-colors hover:bg-white shadow-sm"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-foreground transition-colors hover:bg-white shadow-sm"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href="mailto:example@example.com"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-foreground transition-colors hover:bg-white shadow-sm"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Your Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
