import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        
        <ProjectCard
          src="/learnquest.png"
          title="LearnQuest"
          description="An AI-powered learning platform that adapts to each student's needs and recommends personalized learning paths."
        />

        <ProjectCard
          src="/zentry-ai.png"
          title="Zentry – AI Admission Agent"
          description="An intelligent admission assistant that guides students through the application process, answering queries in real-time."
        />

        <ProjectCard
          src="/visitor-entry.png"
          title="Visitor Entry Website"
          description="A digital visitor management system that streamlines check-ins, tracks visits, and enhances building security."
        />

      </div>
    </div>
  );
};

export default Projects;