"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { projects } from "@/data/projects";
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerOverlay, DrawerTrigger } from "@/components/ui/drawer";

const allTags = Array.from(new Set(projects.flatMap((project) => project.tags)));

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [projectList, setProjectList] = useState<typeof projects>([]);
  const [sortBy, setSortBy] = useState<string>("title");
  const [groupBy, setGroupBy] = useState<string | null>(null);

  useEffect(() => {
    setProjectList(projects);
  }, []);

  const sortProjects = (projects: Project[]) => {
    return [...projects].sort((a, b) => {
      if (sortBy === "title") return a.title.localeCompare(b.title);
      // if (sortBy === "date") return new Date(a.date).getTime() - new Date(b.date).getTime();
      return 0;
    });
  };

  const filteredProjects =
    projectList.filter(
      (project: Project) =>
        (project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (!selectedTag || project.tags.includes(selectedTag))
    );

  const groupedProjects = groupBy
    ? sortProjects(filteredProjects).reduce((groups: { [key: string]: Project[] }, project) => {
      const groupKeys = groupBy === "tags" ? project.tags : ["All"];

      groupKeys.forEach((key) => {
        if (!groups[key]) groups[key] = [];
        groups[key].push(project);
      });

      return groups;
    }, {})
    : { All: sortProjects(filteredProjects) };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
      <div className="hidden md:flex flex-row gap-4 mb-8">
        <Input
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="md:w-full"
        />
        <Select onValueChange={(value) => setSelectedTag(value === "all" ? null : value)}>
          <SelectTrigger className="w-1/4">
            <SelectValue placeholder="Filter by tag" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Tags</SelectItem>
            {allTags.map((tag) => (
              <SelectItem key={tag} value={tag}>
                {tag}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select onValueChange={(value) => setSortBy(value)}>
          <SelectTrigger className="md:w-1/4">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="title">Title</SelectItem>
            <SelectItem value="date">Date</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={(value) => setGroupBy(value === "none" ? null : value)}>
          <SelectTrigger className="w-1/4">
            <SelectValue placeholder="Group by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">None</SelectItem>
            <SelectItem value="tags">Tags</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="md:hidden mb-8 flex items-center">
        <Input
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1"
        />
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">
              <Settings2 className="mr-2" size={16} />
            </Button>
          </DrawerTrigger>
          <DrawerOverlay />
          <DrawerContent className="p-4">
            <h2 className="text-xl font-bold mb-4">Filter Projects</h2>
            <div className="space-y-4">
              <Select onValueChange={(value) => setSelectedTag(value === "all" ? null : value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by tag" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Tags</SelectItem>
                  {allTags.map((tag) => (
                    <SelectItem key={tag} value={tag}>
                      {tag}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select onValueChange={(value) => setSortBy(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title">Title</SelectItem>
                </SelectContent>
              </Select>
              <Select onValueChange={(value) => setGroupBy(value === "none" ? null : value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Group by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="tags">Tags</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <DrawerFooter>
              <DrawerClose className="w-full">
                <Button className="w-full">
                  Apply Filters
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
      <AnimatePresence mode="wait">
        {Object.keys(groupedProjects).map((group, groupIndex) => (
          <div key={group}>
            {groupBy && <h2 className="text-2xl font-bold mb-4">{group}</h2>}
            <motion.div
              key={`group-${groupIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {groupedProjects[group].map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card backdrop-blur-sm rounded-lg overflow-hidden"
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                >
                  <div className="relative aspect-video">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 ease-in-out transform hover:scale-110"
                    />
                    <motion.div
                      className="absolute inset-0 bg-black/60 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Button
                        variant="outline"
                        className="dark:text-white dark:border-white border-black transition-colors duration-300 dark:hover:bg-primary/10 bg-secondary hover:bg-secondary/60"
                        asChild
                      >
                        <a href={project.link} className="flex items-center">
                          View Project <ArrowUpRight className="ml-2" size={16} />
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
        {!filteredProjects.length && (
          <motion.div
            key="no-results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center text-muted-foreground py-12"
          >
            No projects found. Try adjusting your search or filter.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
