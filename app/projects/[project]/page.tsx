import { cache } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import OpenLinkButton from "@/core/ui/Button/OpenLinkButton";
import myProjects from "@/modules/clients/utils/myProjects";
import Icon from "@/core/ui/Icons/Icon";

interface ProjectPageProps {
  params: Promise<{ project: string }>;
}

const getProject = cache((project: string) =>
  myProjects.find((el) => el.name.toLowerCase() === project?.toLowerCase())
);

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { project } = await params;
  const myProject = getProject(project);

  return {
    title: myProject?.name,
    description: myProject?.summary,
    keywords: myProject?.stack.join(),
    openGraph: {
      title: myProject?.name,
      description: myProject?.summary,
      type: "article",
      url: `${baseUrl}/projects/${myProject?.name}`,
      authors: [`${baseUrl}`],
      images: [
        {
          url: `${baseUrl}${myProject?.image}}`,
          width: 1024,
          height: 576,
          alt: myProject?.name,
          type: "image/png",
        },
      ],
    },
  };
}

async function ProjectPage({ params }: ProjectPageProps) {
  const { project } = await params;
  const myProject = getProject(project);
  console.log("project", myProject);

  return (
    <section className="min-h-screen bg-radial from-slate-800 from-20% to-slate-950 relative p-8">
      {/* Project Header */}
      <header className="flex flex-col gap-2">
        <div className="flex items-center ">
          <Link className="mr-8" href={"/"}>
            <Icon name="MoveLeft" strokeWidth={2} size={26} color="white" />
          </Link>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-800 to-purple-500 text-transparent bg-clip-text">
            {myProject?.name}
          </h1>
          <OpenLinkButton url={myProject?.externalLink} />
        </div>
        <div className="flex flex-col gap-1 md:flex-row md:items-center">
          <span className="text-lg font-semibold text-slate-600!">
            {myProject?.position} |
          </span>
          <span className="text-lg text-slate-600!">
            {myProject?.company} |
          </span>
          <span className="text-lg text-slate-600!">{myProject?.duration}</span>
        </div>
        <p className="text-slate-400">{myProject?.description}</p>
      </header>

      {/* Project Summary */}
      <div className="project-summary mb-8"></div>

      {/* Project Features */}
      <article className="project-tasks mb-8">
        <h2 className="text-2xl font-medium bg-gradient-to-r from-purple-800 to-purple-500 text-transparent bg-clip-text">
          Main Features
        </h2>
        <ul className="list-disc pl-6">
          {myProject?.features.map((feature, i) => (
            <li key={i} className="text-slate-400">
              {feature}
            </li>
          ))}
        </ul>
      </article>

      {/* Project Tasks */}
      <article className="project-tasks mb-8">
        <h2 className="text-2xl font-medium bg-gradient-to-r from-purple-800 to-purple-500 text-transparent bg-clip-text">
          My key contributions
        </h2>
        <ul className="list-disc pl-6">
          {myProject?.tasks.map((task, i) => (
            <li key={i} className="text-slate-400">
              {task}
            </li>
          ))}
        </ul>
      </article>

      {/* What's Next Section */}
      {myProject?.nextSteps && (
        <article className="project-next-steps mb-8">
          <h2 className="text-2xl font-medium bg-gradient-to-r from-purple-800 to-purple-500 text-transparent bg-clip-text">
            What&apos;s Next
          </h2>
          <ul className="list-disc pl-6">
            {myProject.nextSteps.map((step, i) => (
              <li key={i} className="text-slate-400">
                {step}
              </li>
            ))}
          </ul>
        </article>
      )}
    </section>
  );
}

export default ProjectPage;
