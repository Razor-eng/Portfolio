"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink, Moon, Sun } from "lucide-react"
import Link from "next/link"
import TransitionEffect from "./transition-effect"
import { useTheme } from "next-themes"

const personalInfo = {
  name: "Rajat Kumar Maharana",
  title: "Full Stack Java Developer",
  email: "mrajat00@gmail.com",
  phone: "9861711134",
  location: "Berhampur, India",
  links: [
    { name: "Portfolio", url: "https://rajat-r.vercel.app" },
    { name: "GitHub", url: "https://github.com/razor-eng" },
    { name: "LinkedIn", url: "https://linkedin.com/rajat-kumar-maharana" },
  ],
};

const education = [
  {
    degree: "B.Tech in Computer Science",
    school: "National Institute of Science and Technology",
    year: "2018 - 2022",
    score: "8.2 GPA",
  },
  {
    degree: "12th (CBSE - PCM)",
    school: "Centurion Public School",
    year: "2017 - 2018",
    score: "7.9 GPA",
  },
  {
    degree: "Secondary School",
    school: "Centurion Public School",
    year: "2015 - 2016",
    score: "86%",
  },
];

const experience = [
  {
    title: "Front-End Developer (Freelancer)",
    company: "Fiverr",
    year: "May 2024 - October 2024",
    responsibilities: [
      "Developed responsive web apps using Next.js, React, and TypeScript, improving page load speed by 30% for 5000+ active users",
      "Styled mobile-first UIs with Tailwind CSS, increasing mobile traffic by 40% and boosting user engagement by 15%",
      "Integrated APIs and optimized performance, reducing response times by 50% and enhancing app speed by 20%",
      "Ensured SEO optimization and cross-browser compatibility, achieving a 95+% SEO score and increasing organic traffic by 25%",
      "Delivered 5+ major projects with 90%+ client satisfaction",
    ],
  },
];

const skills = [
  "Java", "React.js", "Next.js", "C++", "Python", "HTML", "CSS", "JavaScript", "TypeScript",
  "TailwindCSS", "Redux Toolkit", "MySQL", "MongoDB", "Firebase", "Git", "J2EE", "Spring Boot",
  "Node.js", "Express.js", "REST APIs", "Microservices", "Spring Tool Suite", "OS", "DBMS",
  "Computer Networks", "OOP", "Critical Thinking", "Problem Solving",
];

const certifications = [
  {
    name: "Java Full Stack Development Certification",
    issuer: "Digital Lync Hyderabad",
    year: "2024",
    url: ""
  },
];

const projects = [
  {
    name: "JIRA Application",
    description: "A project management app for issue tracking, task management, and workflow automation using Next.js, TailwindCSS, Hono, and Appwrite",
    url: "https://jira-2024.vercel.app",
  },
  {
    name: "E-Commerce Website",
    description: "A fully responsive e-commerce platform with an admin panel using React.js, TailwindCSS, and Firebase",
    url: "https://easybuyy.vercel.app",
  },
  {
    name: "File Management & Sharing Platform",
    description: "A responsive platform for file uploads, organization, and sharing using React 19, Next.js 15, TailwindCSS, and Appwrite",
    url: "https://storeit-r.vercel.app",
  },
];

export function ResumePage() {
  const { theme, setTheme } = useTheme()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      let current = ""

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        if (window.pageYOffset >= sectionTop - 60) {
          current = section.getAttribute("id") || ""
        }
      })

      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <TransitionEffect />
      {/* <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-50" style={{ scaleX }} /> */}
      <motion.main
        className="container mx-auto px-4 py-8 max-w-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <section id="about" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{personalInfo.name}</h2>
            <p className="text-xl text-muted-foreground mb-4">{personalInfo.title}</p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <p className="text-muted-foreground">{personalInfo.email}</p>
              <p className="text-muted-foreground">{personalInfo.phone}</p>
              <p className="text-muted-foreground">{personalInfo.location}</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
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
          </motion.div>
        </section>

        <div className="grid md:grid-cols-2">
          <Section id="education" title="Education">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-4"
              >
                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                <p className="text-muted-foreground">{edu.school}</p>
                <p className="text-sm text-muted-foreground">{edu.year}</p>
              </motion.div>
            ))}
          </Section>

          <Section id="experience" title="Experience">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-6"
              >
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                <p className="text-muted-foreground">{exp.company}</p>
                <p className="text-sm text-muted-foreground mb-2">{exp.year}</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </Section>
        </div>

        <Section id="skills" title="Skills">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-2"
          >
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </Section>

        <div className="grid md:grid-cols-2">
          <Section id="certifications" title="Certifications">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-4"
              >
                <h3 className="text-lg font-semibold">{cert.name}</h3>
                <p className="text-muted-foreground">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground">{cert.year}</p>
                <Link href={cert.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  View Certificate <ExternalLink className="inline-block ml-1" size={14} />
                </Link>
              </motion.div>
            ))}
          </Section>

          <Section id="projects" title="Projects">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-4"
              >
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <p className="text-muted-foreground mb-2">{project.description}</p>
                <Link href={project.url} className="text-primary hover:underline">
                  View Project <ExternalLink className="inline-block ml-1" size={14} />
                </Link>
              </motion.div>
            ))}
          </Section>
        </div>
      </motion.main>
    </>
  )
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-16">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-6"
      >
        {title}
      </motion.h2>
      {children}
    </section>
  )
}



