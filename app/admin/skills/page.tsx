"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { skillsData } from "@/data/skillsData"
import { SkillModal } from "@/components/skill-modal"

export default function AdminSkills() {
  const [skills, setSkills] = useState(skillsData)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentSkill, setCurrentSkill] = useState(null)

  const handleAddSkill = () => {
    setCurrentSkill(null)
    setIsModalOpen(true)
  }

  const handleEditSkill = (skill) => {
    setCurrentSkill(skill)
    setIsModalOpen(true)
  }

  const handleSaveSkill = (skill) => {
    if (skills.find((s) => s.name === skill.name)) {
      // Update existing skill
      setSkills(skills.map((s) => (s.name === skill.name ? skill : s)))
    } else {
      // Add new skill
      setSkills([...skills, skill])
    }
    // TODO: Implement API call to save skill
    console.log("Saving skill:", skill)
  }

  const handleDeleteSkill = (name: string) => {
    setSkills(skills.filter((s) => s.name !== name))
    // TODO: Implement API call to delete skill
    console.log("Deleting skill:", name)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manage Skills</h1>
      <Button onClick={handleAddSkill} className="mb-4">
        Add New Skill
      </Button>

      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-center justify-between p-4 bg-card rounded-lg">
            <div>
              <h3 className="font-bold">{skill.name}</h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </div>
            <div>
              <Button variant="outline" className="mr-2" onClick={() => handleEditSkill(skill)}>
                Edit
              </Button>
              <Button variant="destructive" onClick={() => handleDeleteSkill(skill.name)}>
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>

      <SkillModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveSkill}
        skill={currentSkill}
      />
    </div>
  )
}

