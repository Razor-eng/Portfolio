"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { allProjects, allProjects as projects } from "@/data/projects";
import TransitionEffect from "@/components/transition-effect";
import AnimatedText from "@/components/animated-text";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button"
import type { SortOption, GroupByOption, CategoryOption, Project } from "@/lib/types"
import { SlidersHorizontal } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryOption | null>(null)
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([])
  const [sortOption, setSortOption] = useState<SortOption>("latest")
  const [groupBy, setGroupBy] = useState<GroupByOption | null>(null)

  const categories = [...new Set(allProjects.map((p) => p.category))]
  const [sortBy, setSortBy] = useState<SortOption>("latest")

  const handleCategoryChange = (category: CategoryOption | "all") => {
    const newCategory = category === "all" ? null : category
    setSelectedCategory(newCategory)
  }

  const handleSortChange = (value: SortOption) => {
    setSortOption(value)
    setSortBy(value)
  }

  const handleGroupByChange = (value: GroupByOption | "none") => {
    setGroupBy(value === "none" ? null : value)
  }

  return (
    <>
      <TransitionEffect />
      <div className="container mx-auto px-4 lg:px-12 space-y-6">
        {/* <AnimatedText
          text="Imagination Trumps Knowledge!"
          className='!text-left lg:!text-5xl xl:!text-center md:!text-6xl sm:!text-5xl !text-3xl pr-8' /> */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.8 }}
        >
          <div>
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8 rounded-lg border md:p-4 shadow-lg bg-gradient-to-l from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Category</h3>
                <Select onValueChange={handleCategoryChange} value={selectedCategory || "all"}>
                  <SelectTrigger className="w-full border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500">
                    <SelectValue placeholder="Select a Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel className="text-gray-500 dark:text-gray-400">Category</SelectLabel>
                      <SelectItem value="all">All</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Sort By</h3>
                <Select onValueChange={handleSortChange} value={sortBy}>
                  <SelectTrigger className="w-full border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500">
                    <SelectValue placeholder="Select sort option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="latest">Latest First</SelectItem>
                    <SelectItem value="alphabetical">Alphabetical</SelectItem>
                    <SelectItem value="complexity">Complexity</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Group By</h3>
                <Select onValueChange={handleGroupByChange} value={groupBy || "none"}>
                  <SelectTrigger className="w-full border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500">
                    <SelectValue placeholder="Select group by option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">None</SelectItem>
                    <SelectItem value="category">Category</SelectItem>
                    <SelectItem value="techStack">Tech Stack</SelectItem>
                    <SelectItem value="year">Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Dialog>
              <DialogTrigger asChild className="md:hidden">
                <Button
                  variant="outline"
                  size={"lg"}
                  className="w-full py-6 flex items-center font-semibold text-base gap-2"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  Filter & Sort
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader className="flex items-center justify-between">
                  <DialogTitle>Filter Projects</DialogTitle>
                  <DialogDescription>You can use this to filter through projects</DialogDescription>
                </DialogHeader>
                <Separator className="my-4" />
                <div className="h-full pb-16">
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Category</h3>
                    <Select onValueChange={handleCategoryChange} value={selectedCategory || "all"}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Category</SelectLabel>
                          <SelectItem value="all">All</SelectItem>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>

                    <h3 className="text-sm font-medium">Sort By</h3>
                    <Select onValueChange={handleSortChange} value={sortBy}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select sort option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="latest">Latest First</SelectItem>
                        <SelectItem value="alphabetical">Alphabetical</SelectItem>
                        <SelectItem value="complexity">Complexity</SelectItem>
                      </SelectContent>
                    </Select>

                    <h3 className="text-sm font-medium">Group By</h3>
                    <Select onValueChange={handleGroupByChange} value={groupBy || "none"}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select group by option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">None</SelectItem>
                        <SelectItem value="category">Category</SelectItem>
                        <SelectItem value="techStack">Tech Stack</SelectItem>
                        <SelectItem value="year">Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1 }}
        >
          <ProjectsGrid
            projects={allProjects}
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
  const [isLoading, setLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Link href={`/projects/${project.slug}`}>
        <Card
          className={cn(
            "overflow-hidden group cursor-pointer h-full flex flex-col",
            project.category === "Featured" && "border-amber-500/50",
            project.category === "Recent" && "border-blue-500/50",
            project.category === "Landing Page" && "border-green-500/50",
            project.category === "Clone" && "border-purple-500/50",
          )}
        >
          <CardHeader className="p-0">
            {
              project.images.length > 0 ? (
                <Carousel className="w-full">
                  <CarouselContent>
                    {project.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative aspect-video">
                          {isLoading && (
                            <div className="absolute inset-0 animate-pulse bg-gray-300 dark:bg-gray-700" />
                          )}
                          <Image
                            src={image}
                            alt={`${project.title} screenshot ${index + 1}`}
                            fill
                            className={`transition-all duration-700 ease-in-out ${isLoading ? 'scale-105 blur-sm' : 'scale-100 blur-0'}`}
                            placeholder="blur"
                            blurDataURL="/placeholder.svg"
                            onLoad={() => setLoading(false)}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            loading="lazy"
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
                    className="object-contain"
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
            </div>
            <div className="flex flex-col">
              <div className="flex flex-wrap gap-1 mb-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <Badge key={tech} variant="secondary" className="capitalize rounded-md py-1">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 3 && (
                  <Badge variant="secondary" className="capitalize rounded-md py-1">
                    +{project.technologies.length - 3}
                  </Badge>
                )}
              </div>
              <Separator className="mb-1" />
              <div className="flex items-center justify-between mt-1">
                <Badge
                  className={cn(
                    "px-4 text-sm font-semibold rounded transition-colors",
                    project.category === "Featured" && "bg-amber-500/10 text-amber-500 hover:bg-amber-500/30",
                    project.category === "Recent" && "bg-blue-500/10 text-blue-500 hover:bg-blue-500/30",
                    project.category === "Landing Page" && "bg-green-500/10 text-green-500 hover:bg-green-500/30",
                    project.category === "Clone" && "bg-purple-500/10 text-purple-500 hover:bg-purple-500/30"
                  )}
                >
                  {project.category}
                </Badge>
                <span className="text-sm font-semibold text-muted-foreground">{project.year}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}