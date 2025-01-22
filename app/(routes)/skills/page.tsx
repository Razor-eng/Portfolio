"use client"

import { useState, useEffect } from "react"
import { IconType } from "react-icons"
import { motion, AnimatePresence } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { skillsData } from "@/data/skillsData"

const categories = Array.from(new Set(skillsData.map((skill) => skill.category)))

export default function Skills() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [skills, setSkills] = useState<{ name: string; icon: IconType; color: string; level: number; category: string; }[]>([])

  useEffect(() => {
    setSkills(skillsData)
  }, [])

  const filteredSkills = skills.filter(
    (skill) =>
      skill.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!selectedCategory || skill.category === selectedCategory),
  )

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-8">My Skills</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Input
          placeholder="Search skills..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="md:w-1/2"
        />
        <Select onValueChange={(value) => setSelectedCategory(value === "all" ? null : value)}>
          <SelectTrigger className="md:w-1/2">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <AnimatePresence mode="wait">
        {filteredSkills.length > 0 ? (
          <motion.div
            key="skills"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="no-results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center text-muted-foreground py-12"
          >
            No skills found. Try adjusting your search or filter.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function SkillCard({ skill }: { skill: { name: string; icon: IconType; color: string; level: number; category: string; } }) {
  const [isHovered, setIsHovered] = useState(false)
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(skill.level);
  }, [skill.level]);

  const getProficiencyLabel = (level: number) => {
    if (level <= 40) return "Beginner"
    if (level <= 80) return "Intermediate"
    return "Advanced"
  }

  const getProficiencyColor = (level: number) => {
    if (level <= 40) return "red"
    if (level <= 80) return "yellow"
    return "green"
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white p-6 rounded-lg shadow-sm cursor-pointer transform hover:shadow-md hover:scale-102 transition-all"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
        className="text-5xl mb-4 flex justify-center items-center p-3 rounded-md bg-gray-100 shadow-sm"
        style={{ color: skill.color }}
      >
        <skill.icon />
      </motion.div>
      <h3 className="text-xl font-medium text-gray-800 mb-2 text-center">{skill.name}</h3>
      <div>
        <motion.div
          className={`inline-block mb-2 py-0.5 px-1.5 bg-${getProficiencyColor(skill.level)}-50 border border-${getProficiencyColor(skill.level)}-200 text-xs font-medium text-${getProficiencyColor(skill.level)}-600 rounded-lg dark:bg-${getProficiencyColor(skill.level)}-800/30 dark:border-${getProficiencyColor(skill.level)}-800 dark:text-${getProficiencyColor(skill.level)}-500`}
          style={{ marginLeft: `${progress - 5}%` }}
          initial={{ marginLeft: `${0 - 5}%` }}
          animate={{ marginLeft: `${progress - 5}%` }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <span>
            {progress}%
          </span>
        </motion.div>
        <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700">
          <motion.div
            className={`absolute top-0 left-0 h-full bg-${getProficiencyColor(skill.level)}-400 text-xs text-white text-center whitespace-nowrap transition-all duration-500 dark:bg-${getProficiencyColor(skill.level)}-500`}
            style={{ width: `${progress}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </motion.div >
  )
}