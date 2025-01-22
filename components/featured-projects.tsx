"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { featuredProjectsData } from "@/data/homeData"

export function FeaturedProjects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const ref = useRef(null)
  const stackRef = useRef(null);
  const isStackInView = useInView(stackRef, { once: true });
  const isInView = useInView(ref, { once: true })
  const textRef = useRef(null);
  const isTextInView = useInView(textRef, { once: true });

  return (
    <section className="relative overflow-hidden bg-gradient-to-bl from-background via-background to-primary/20">
      <section className="container mx-auto px-4 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center relative pb-2">
            <span className="w-full h-[2px] bg-[#1a1443]"></span>
            <span
              ref={textRef}
              style={{
                transform: isTextInView ? "none" : "translateX(-200px)",
                opacity: isTextInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
              }}
              className="bg-[#1a1443] w-fit text-white px-5 py-3 text-xl rounded-md whitespace-nowrap"
            >
              FEATURED PROJECTS
            </span>
            <span className="w-full h-[2px] bg-[#1a1443]"></span>
          </div>
          <p
            className="text-muted-foreground max-w-2xl mx-auto"
            ref={textRef}
            style={{
              transform: isTextInView ? "none" : "translateX(-200px)",
              opacity: isTextInView ? 1 : 0,
              transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
          >
            Here are some of my recent projects that showcase my skills and creativity.
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
          }}
        >
          {featuredProjectsData.map((project, index) => (
            <div
              key={project.id}
              className="bg-card backdrop-blur-sm overflow-hidden border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700 group transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-out"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              ref={stackRef}
              style={{
                transform: isStackInView ? "none" : `${index === 0 ? "translateY(250px)" : `translateY(${200 / index}px)`}`,
                opacity: isStackInView ? 1 : 0,
                transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${index === 0 ? 0 : 0.5 * index}s`
              }}
            >
              <div className="relative aspect-video rounded-t-lg overflow-hidden"              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-500 ease-in-out transform hover:scale-110 blur-sm group-hover:blur-none"
                />
                <motion.div
                  className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-t-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Button variant="outline" className="dark:text-white dark:border-white border-black transition-colors duration-300 dark:hover:bg-primary/10 bg-secondary hover:bg-secondary/60" asChild>
                    <a href={project.link} className="flex items-center">
                      View Project <ArrowUpRight className="ml-2" size={16} />
                    </a>
                  </Button>
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full shadow-md transition-all duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: tagIndex * 1
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </section>
    </section>
  )
}
