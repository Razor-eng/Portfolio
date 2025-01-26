import { ProjectDetails } from "@/components/project-details";
import { allProjects } from "@/data/projects";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// Generate static params for all projects
export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

// Dynamic metadata for SEO
export async function generateMetadata({
  params
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const project = allProjects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.images[0] }],
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = allProjects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Find related projects based on shared technologies and category
  const relatedProjects = allProjects
    .filter((p) => {
      if (p.slug === project.slug) return false;

      // Check for shared technologies
      const sharedTechs = p.technologies.filter(tech =>
        project.technologies.includes(tech)
      );

      // Projects are related if they share technologies or are in the same category
      return sharedTechs.length > 0 || p.category === project.category;
    })
    .sort((a, b) => {
      // Sort by number of shared technologies
      const aShared = a.technologies.filter(tech =>
        project.technologies.includes(tech)
      ).length;
      const bShared = b.technologies.filter(tech =>
        project.technologies.includes(tech)
      ).length;
      return bShared - aShared;
    })
    .slice(0, 3);

  return (
    <ProjectDetails project={project} relatedProjects={relatedProjects} />
  )
}