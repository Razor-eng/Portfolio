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

interface SkillModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (skill: any) => void
  skill?: any
}

export function SkillModal({ isOpen, onClose, onSave, skill }: SkillModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    icon: "",
    color: "",
    level: 0,
    category: "",
    description: "",
    details: "",
  })

  useEffect(() => {
    if (skill) {
      setFormData(skill)
    } else {
      setFormData({
        name: "",
        icon: "",
        color: "",
        level: 0,
        category: "",
        description: "",
        details: "",
      })
    }
  }, [skill])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: name === "level" ? Number.parseInt(value) : value })
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
          <DialogTitle>{skill ? "Edit Skill" : "Add New Skill"}</DialogTitle>
          <DialogDescription>
            {skill ? "Edit the details of your skill." : "Add a new skill to your portfolio."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <Input name="name" placeholder="Skill Name" value={formData.name} onChange={handleInputChange} />
            <Input name="icon" placeholder="Icon (import path)" value={formData.icon} onChange={handleInputChange} />
            <Input name="color" placeholder="Color" value={formData.color} onChange={handleInputChange} />
            <Input
              name="level"
              type="number"
              placeholder="Level (0-100)"
              value={formData.level}
              onChange={handleInputChange}
            />
            <Input name="category" placeholder="Category" value={formData.category} onChange={handleInputChange} />
            <Textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleInputChange}
            />
            <Textarea name="details" placeholder="Details" value={formData.details} onChange={handleInputChange} />
          </div>
          <DialogFooter>
            <Button type="submit">{skill ? "Update" : "Add"} Skill</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

