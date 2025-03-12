"use client";

import { useParams } from "next/navigation";
import BasicButton from "@/core/ui/Button/BasicButton";
import myProjects from "@/modules/clients/utils/myProjects";
import Icon from "@/core/ui/Icons/Icon";

function ProjectPage() {
  const params = useParams<{ project: string }>();
  const project = myProjects.find(
    (project) => project.name.toLowerCase() === params.project?.toLowerCase()
  );

  return (
    <section className="min-h-screen bg-radial from-slate-800 from-20% to-slate-950 relative p-8">
      {/* Project Header */}
      <header className="flex flex-col gap-2">
        <div className="flex items-center ">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-800 to-purple-500 text-transparent bg-clip-text">
            {project?.name}
          </h1>
          <BasicButton
            onPress={() => window.open(project?.externalLink)}
            isIconOnly={true}
            startContent={
              <Icon
                name="ExternalLink"
                strokeWidth={2}
                size={26}
                color="white"
              />
            }
          />
        </div>
        <div className="flex items-center text-slate-400 gap-6">
          <span className="text-lg font-semibold">{project?.position}</span>
          <span className="text-lg">{project?.company}</span>
          <span className="text-lg">{project?.duration}</span>
        </div>
        <p className="text-slate-400">{project?.description}</p>
      </header>

      {/* Project Summary */}
      <div className="project-summary mb-8"></div>

      {/* Project Features */}
      <div className="project-tasks mb-8">
        <h2 className="text-2xl font-medium bg-gradient-to-r from-purple-800 to-purple-500 text-transparent bg-clip-text">
          Main Features
        </h2>
        <ul className="list-disc pl-6">
          {project?.features.map((feature, i) => (
            <li key={i} className="text-slate-400">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Project Tasks */}
      <div className="project-tasks mb-8">
        <h2 className="text-2xl font-medium bg-gradient-to-r from-purple-800 to-purple-500 text-transparent bg-clip-text">
          Main Tasks
        </h2>
        <ul className="list-disc pl-6">
          {project?.tasks.map((task, i) => (
            <li key={i} className="text-slate-400">
              {task}
            </li>
          ))}
        </ul>
      </div>

      {/* What's Next Section */}
      {project?.nextSteps && (
        <div className="project-next-steps mb-8">
          <h2 className="text-2xl font-medium bg-gradient-to-r from-purple-800 to-purple-500 text-transparent bg-clip-text">
            What&apos;s Next
          </h2>
          <ul className="list-disc pl-6">
            {project.nextSteps.map((step, i) => (
              <li key={i} className="text-slate-400">
                {step}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default ProjectPage;
