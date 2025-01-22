"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { projectsData } from "@/data/projectsData"
import { ProjectModal } from "@/components/project-modal"

export default function AdminProjects() {
  const [projects, setProjects] = useState(projectsData)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentProject, setCurrentProject] = useState(null)

  const handleAddProject = () => {
    setCurrentProject(null)
    setIsModalOpen(true)
  }

  const handleEditProject = (project) => {
    setCurrentProject(project)
    setIsModalOpen(true)
  }

  const handleSaveProject = (project) => {
    if (project.id) {
      // Update existing project
      setProjects(projects.map((p) => (p.id === project.id ? project : p)))
    } else {
      // Add new project
      setProjects([...projects, { ...project, id: Date.now() }])
    }
    // TODO: Implement API call to save project
    console.log("Saving project:", project)
  }

  const handleDeleteProject = (id: number) => {
    setProjects(projects.filter((p) => p.id !== id))
    // TODO: Implement API call to delete project
    console.log("Deleting project with id:", id)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manage Projects</h1>
      <Button onClick={handleAddProject} className="mb-4">
        Add New Project
      </Button>

      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.id} className="flex items-center justify-between p-4 bg-card rounded-lg">
            <div>
              <h3 className="font-bold">{project.title}</h3>
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </div>
            <div>
              <Button variant="outline" className="mr-2" onClick={() => handleEditProject(project)}>
                Edit
              </Button>
              <Button variant="destructive" onClick={() => handleDeleteProject(project.id)}>
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveProject}
        project={currentProject}
      />
    </div>
  )
}

