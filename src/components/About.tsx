
import { AnimatedText } from "./ui/animated-text";

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/50">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <AnimatedText
                text="Hi, I'm [Your Name]"
                className="text-3xl md:text-4xl font-bold tracking-tight"
              />

              <div className="space-y-4">
                <AnimatedText
                  text="I'm a full stack developer with a passion for creating elegant, efficient, and user-friendly web applications."
                  className="text-lg text-muted-foreground"
                />

                <AnimatedText
                  text="With 2+ years of experience in web development, I specialize in building modern applications using React, Next.js, and other cutting-edge technologies. I have a strong foundation in HTML, CSS, JavaScript, and various front-end frameworks, as well as experience with back-end technologies and databases."
                  className="text-lg text-muted-foreground"
                />

                <AnimatedText
                  text="I'm currently pursuing my MCA, which has strengthened my computer science fundamentals and problem-solving abilities. I'm passionate about clean code, intuitive user interfaces, and creating solutions that make a positive impact."
                  className="text-lg text-muted-foreground"
                />

                <AnimatedText
                  text="When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or expanding my knowledge through online courses and tech meetups."
                  className="text-lg text-muted-foreground"
                />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-100 to-blue-100 transform -rotate-6 rounded-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="Portrait"
                className="relative z-10 rounded-2xl shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
