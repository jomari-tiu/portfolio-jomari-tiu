import { websitesList, ProjectList_MSYS } from "@/data/ProjectList";
import ProjectDetailClient from "./ProjectDetailClient";

export async function generateStaticParams() {
  const allProjects = [...websitesList, ...ProjectList_MSYS];

  return allProjects.map((project) => ({
    id: encodeURIComponent(project.title),
  }));
}

export default function ProjectDetailPage() {
  return <ProjectDetailClient />;
}
