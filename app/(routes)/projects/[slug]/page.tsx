"use client";

import { projects } from "@/data/projects"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { notFound } from "next/navigation"

export default function Project({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/projects" className="inline-flex items-center text-primary hover:underline mb-6">
          <ArrowLeft className="mr-2" size={16} />
          Back to Projects
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{project.title}</h1>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12"
      >
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={1200}
          height={675}
          className="rounded-lg shadow-lg"
        />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:col-span-2"
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">Project Overview</h2>
          <p className="text-muted-foreground mb-6">{project.fullDescription}</p>

          <h3 className="text-xl font-bold text-foreground mb-4">Key Features</h3>
          <ul className="list-disc list-inside text-muted-foreground mb-6">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <Button asChild>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project <ExternalLink className="ml-2" size={16} />
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-xl font-bold text-foreground mb-4">Technologies Used</h3>
          <ul className="space-y-2">
            {project.technologies.map((tech, index) => (
              <li key={index} className="bg-secondary text-secondary-foreground px-3 py-1 rounded">
                {tech}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

