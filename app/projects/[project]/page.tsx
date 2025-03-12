"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import myProjects from "@/modules/clients/utils/myProjects";

function ProjectPage() {
  const params = useParams<{ project: string }>()
  const project = myProjects.find(
    (project) => project.name.toLowerCase() === params.project?.toLowerCase()
  );
  console.log("params", params)
  console.log("project",project)

  return (
    <section className="project-page">
      {/* Project Header */}
      <header className="project-header">
        <h1 className="text-3xl font-semibold">{project?.name}</h1>
        <div className="flex justify-between items-center text-lg text-gray-600">
          <span>{project?.company}</span>
          <span>{project?.duration}</span>
        </div>
      </header>

      {/* Project Image */}
      <div className="project-image my-6">
        <Image
          src={project?.image}
          width={400}
          height={400}
          alt={`${project?.name} project`}
          className="w-full h-auto rounded-md shadow-lg"
        />
      </div>

      {/* Project Summary */}
      <div className="project-summary mb-8">
        <p>{project?.description}</p>
      </div>

      {/* Project Features */}
      <div className="project-tasks mb-8">
        <h2 className="text-2xl font-medium">What I Did</h2>
        <ul className="list-disc pl-6">
          {project?.features.map((feature, i) => (
            <li key={i} className="text-gray-700">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Project Tasks */}
      <div className="project-tasks mb-8">
        <h2 className="text-2xl font-medium">What I Did</h2>
        <ul className="list-disc pl-6">
          {project?.tasks.map((task, i) => (
            <li key={i} className="text-gray-700">
              {task}
            </li>
          ))}
        </ul>
      </div>

      {/* What's Next Section */}
      {project?.nextSteps && (
        <div className="project-next-steps mb-8">
          <h2 className="text-2xl font-medium">What&apos;s Next</h2>
          <ul className="list-disc pl-6">
            {project.nextSteps.map((step, i) => (
              <li key={i} className="text-gray-700">
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
