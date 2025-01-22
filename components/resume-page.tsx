"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink } from 'lucide-react'
import Link from "next/link"

export function ResumePage() {
  const personalInfo = {
    name: "John Doe",
    title: "Full Stack Developer",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    links: [
      { name: "Portfolio", url: "https://johndoe.dev" },
      { name: "GitHub", url: "https://github.com/johndoe" },
      { name: "LinkedIn", url: "https://linkedin.com/in/johndoe" },
    ],
  }

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      year: "2018 - 2020",
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      school: "Massachusetts Institute of Technology",
      year: "2014 - 2018",
    },
  ]

  const experience = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovators Inc.",
      year: "2020 - Present",
      responsibilities: [
        "Lead a team of 5 developers in creating responsive and accessible web applications",
        "Implemented state management solutions using Redux and Context API",
        "Optimized application performance, resulting in a 40% increase in load speed",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "WebSolutions Co.",
      year: "2018 - 2020",
      responsibilities: [
        "Developed and maintained multiple client websites using React and Node.js",
        "Integrated third-party APIs and services to enhance website functionality",
        "Collaborated with UX designers to implement pixel-perfect, responsive designs",
      ],
    },
  ]

  const skills = [
    "JavaScript (ES6+)", "React", "Next.js", "Node.js", "TypeScript",
    "HTML5", "CSS3", "Tailwind CSS", "GraphQL", "RESTful APIs",
    "Git", "Agile Methodologies", "Test-Driven Development",
  ]

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2022",
      url: "https://www.youracclaim.com/badges/aws-certified-solutions-architect",
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      year: "2021",
      url: "https://www.credential.net/google-cloud-professional-developer",
    },
    {
      name: "React Native Specialist",
      issuer: "Udacity",
      year: "2020",
      url: "https://confirm.udacity.com/react-native-specialist",
    },
  ]

  const projects = [
    {
      name: "E-commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB",
      url: "/projects/e-commerce-platform",
    },
    {
      name: "Task Management App",
      description: "A React Native mobile app for task management and productivity",
      url: "/projects/task-management-app",
    },
    {
      name: "Portfolio Website",
      description: "A responsive portfolio website built with Next.js and Tailwind CSS",
      url: "/projects/portfolio-website",
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{personalInfo.name}</h1>
          <p className="text-xl text-muted-foreground mb-4">{personalInfo.title}</p>
          <div className="flex justify-center space-x-4 mb-6">
            <p className="text-muted-foreground">{personalInfo.email}</p>
            <p className="text-muted-foreground">{personalInfo.phone}</p>
            <p className="text-muted-foreground">{personalInfo.location}</p>
          </div>
          <div className="flex justify-center space-x-4">
            {personalInfo.links.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <Button className="mb-12">
          Download Resume <Download className="ml-2" size={16} />
        </Button>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold">{edu.degree}</h3>
              <p className="text-muted-foreground">{edu.school}</p>
              <p className="text-sm text-muted-foreground">{edu.year}</p>
            </div>
          ))}
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">Experience</h2>
          {experience.map((exp, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-semibold">{exp.title}</h3>
              <p className="text-muted-foreground">{exp.company}</p>
              <p className="text-sm text-muted-foreground mb-2">{exp.year}</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">Certifications</h2>
          {certifications.map((cert, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold">{cert.name}</h3>
              <p className="text-muted-foreground">{cert.issuer}</p>
              <p className="text-sm text-muted-foreground">{cert.year}</p>
              <Link href={cert.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                View Certificate <ExternalLink className="inline-block ml-1" size={14} />
              </Link>
            </div>
          ))}
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">Projects</h2>
          {projects.map((project, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="text-muted-foreground mb-2">{project.description}</p>
              <Link href={project.url} className="text-primary hover:underline">
                View Project <ExternalLink className="inline-block ml-1" size={14} />
              </Link>
            </div>
          ))}
        </motion.section>
      </motion.div>
    </div>
  )
}

