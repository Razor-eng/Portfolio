"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { allProjects as projects } from "@/data/projects";
import TransitionEffect from "@/components/transition-effect";
import AnimatedText from "@/components/animated-text";
import { GroupByOption, Project, SortOption } from "@/lib/types";
import { ProjectsFilter } from "@/components/projects-filter";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<SortOption>("latest");
  const [groupBy, setGroupBy] = useState<GroupByOption | null>(null);

  const categories = [...new Set(projects.map((p) => p.category))];
  const technologies = [...new Set(projects.flatMap((p) => p.technologies))];

  return (
    <>
      <TransitionEffect />
      <div className="container mx-auto px-6 lg:px-12 space-y-3 md:space-y-6">
        {/* <AnimatedText
          text="Imagination Trumps Knowledge!"
          className='!text-left lg:!text-5xl xl:!text-center md:!text-6xl sm:!text-5xl !text-3xl pr-8' /> */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.8 }}
        >
          <ProjectsFilter
            categories={categories}
            technologies={technologies}
            onCategoryChange={setSelectedCategory}
            onTechnologiesChange={setSelectedTechnologies}
            onSortChange={setSortOption}
            onGroupByChange={setGroupBy}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1 }}
        >
          <ProjectsGrid
            projects={projects}
            selectedCategory={selectedCategory}
            selectedTechnologies={selectedTechnologies}
            sortOption={sortOption}
            groupBy={groupBy}
          />
        </motion.div>
      </div>
    </>
  );
}


interface ProjectsGridProps {
  projects: Project[];
  selectedCategory: string | null;
  selectedTechnologies: string[];
  sortOption: SortOption;
  groupBy: GroupByOption | null;
}

function ProjectsGrid({
  projects,
  selectedCategory,
  selectedTechnologies,
  sortOption,
  groupBy,
}: ProjectsGridProps) {
  // Filter projects
  let filteredProjects = projects.filter((project) => {
    if (selectedCategory && project.category !== selectedCategory) return false;
    if (
      selectedTechnologies.length > 0 &&
      !selectedTechnologies.every((tech) =>
        project.technologies.includes(tech)
      )
    )
      return false;
    return true;
  });

  // Sort projects
  filteredProjects = [...filteredProjects].sort((a, b) => {
    switch (sortOption) {
      case "latest":
        return b.year - a.year;
      case "alphabetical":
        return a.title.localeCompare(b.title);
      case "complexity":
        const complexityOrder = {
          Beginner: 1,
          Intermediate: 2,
          Advanced: 3,
        };
        return (
          complexityOrder[b.complexity] - complexityOrder[a.complexity]
        );
      default:
        return 0;
    }
  });

  // Group projects
  const groupedProjects = groupBy
    ? filteredProjects.reduce((acc, project) => {
      let key = "";
      switch (groupBy) {
        case "category":
          key = project.category;
          break;
        case "techStack":
          key = project.technologies[0];
          break;
        case "year":
          key = project.year.toString();
          break;
      }
      if (!acc[key]) acc[key] = [];
      acc[key].push(project);
      return acc;
    }, {} as Record<string, Project[]>)
    : { all: filteredProjects };

  return (
    <div className="space-y-8">
      {Object.entries(groupedProjects).map(([group, projects]) => (
        <motion.div
          key={group}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {group !== "all" && (
            <h2 className="text-2xl font-bold mb-4">{group}</h2>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}


interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Link href={`/projects/${project.slug}`}>
        <Card className="overflow-hidden group cursor-pointer h-full flex flex-col">
          <CardHeader className="p-0">
            {
              project.images.length > 0 ? (
                <Carousel className="w-full">
                  <CarouselContent>
                    {project.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative aspect-video">
                          <Image
                            src={image}
                            alt={`${project.title} screenshot ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              ) : (
                <div className="relative aspect-video">
                  <Image
                    src="/placeholder.svg"
                    alt="placeholder"
                    fill
                    className="object-cover"
                  />
                </div>
              )
            }
          </CardHeader>
          <CardContent className="pt-6 pb-3 px-3 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-muted-foreground mb-2 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="capitalize rounded-md py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <Separator className="mb-1" />
            <div className="flex items-center justify-between mt-1">
              <Badge
                className={cn(
                  "px-4 text-sm font-semibold rounded transition-colors",
                  project.category === "Featured" && "bg-amber-500/10 text-amber-500 hover:bg-amber-500/30",
                  project.category === "Recent" && "bg-blue-500/10 text-blue-500 hover:bg-blue-500/30",
                  project.category === "Landing Page" && "bg-green-500/10 text-green-500 hover:bg-green-500/30",
                )}
              >
                {project.category}
              </Badge>
              <span className="text-sm font-semibold text-muted-foreground">{project.year}</span>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}