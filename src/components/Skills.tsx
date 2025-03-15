
import { SkillIcon } from "./ui/skill-icon";

const frontendSkills = [
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
];

const backendSkills = [
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
];

const toolsSkills = [
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            I specialize in building modern web applications using the latest
            technologies and frameworks. My expertise spans across frontend and
            backend development.
          </p>
        </div>

        <div className="space-y-12">
          {/* Frontend */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-center">Frontend Development</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
              {frontendSkills.map((skill, index) => (
                <SkillIcon
                  key={skill.name}
                  {...skill}
                  className={`delay-${index * 100}`}
                />
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-center">Backend Development</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {backendSkills.map((skill, index) => (
                <SkillIcon
                  key={skill.name}
                  {...skill}
                  className={`delay-${index * 100}`}
                />
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-center">Tools & Software</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {toolsSkills.map((skill, index) => (
                <SkillIcon
                  key={skill.name}
                  {...skill}
                  className={`delay-${index * 100}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
