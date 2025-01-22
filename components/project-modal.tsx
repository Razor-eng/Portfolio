import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (project: any) => void
  project?: any
}

export function ProjectModal({ isOpen, onClose, onSave, project }: ProjectModalProps) {
  const [formData, setFormData] = useState({
    id: 0,
    title: "",
    slug: "",
    description: "",
    fullDescription: "",
    image: "",
    link: "",
    tags: [],
    features: [],
    technologies: [],
  })

  useEffect(() => {
    if (project) {
      setFormData(project)
    } else {
      setFormData({
        id: 0,
        title: "",
        slug: "",
        description: "",
        fullDescription: "",
        image: "",
        link: "",
        tags: [],
        features: [],
        technologies: [],
      })
    }
  }, [project])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleArrayInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const { value } = e.target
    setFormData({ ...formData, [field]: value.split(",").map((item) => item.trim()) })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{project ? "Edit Project" : "Add New Project"}</DialogTitle>
          <DialogDescription>
            {project ? "Edit the details of your project." : "Add a new project to your portfolio."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <Input name="title" placeholder="Project Title" value={formData.title} onChange={handleInputChange} />
            <Input name="slug" placeholder="Slug" value={formData.slug} onChange={handleInputChange} />
            <Textarea
              name="description"
              placeholder="Short Description"
              value={formData.description}
              onChange={handleInputChange}
            />
            <Textarea
              name="fullDescription"
              placeholder="Full Description"
              value={formData.fullDescription}
              onChange={handleInputChange}
            />
            <Input name="image" placeholder="Image URL" value={formData.image} onChange={handleInputChange} />
            <Input name="link" placeholder="Project Link" value={formData.link} onChange={handleInputChange} />
            <Input
              name="tags"
              placeholder="Tags (comma-separated)"
              value={formData.tags.join(", ")}
              onChange={(e) => handleArrayInputChange(e, "tags")}
            />
            <Input
              name="features"
              placeholder="Features (comma-separated)"
              value={formData.features.join(", ")}
              onChange={(e) => handleArrayInputChange(e, "features")}
            />
            <Input
              name="technologies"
              placeholder="Technologies (comma-separated)"
              value={formData.technologies.join(", ")}
              onChange={(e) => handleArrayInputChange(e, "technologies")}
            />
          </div>
          <DialogFooter>
            <Button type="submit">{project ? "Update" : "Add"} Project</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

