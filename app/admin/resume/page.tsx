"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function AdminResume() {
  const [resumeData, setResumeData] = useState({
    personalInfo: {
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
    },
    education: [
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
    ],
    experience: [
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
    ],
    skills: [
      "JavaScript (ES6+)",
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "GraphQL",
      "RESTful APIs",
      "Git",
      "Agile Methodologies",
      "Test-Driven Development",
    ],
    certifications: [
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
    ],
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement API call to update resume data
    console.log("Updating resume data:", resumeData)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manage Resume</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
          <div className="space-y-4">
            <Input
              placeholder="Name"
              value={resumeData.personalInfo.name}
              onChange={(e) =>
                setResumeData({
                  ...resumeData,
                  personalInfo: { ...resumeData.personalInfo, name: e.target.value },
                })
              }
            />
            <Input
              placeholder="Title"
              value={resumeData.personalInfo.title}
              onChange={(e) =>
                setResumeData({
                  ...resumeData,
                  personalInfo: { ...resumeData.personalInfo, title: e.target.value },
                })
              }
            />
            <Input
              placeholder="Email"
              value={resumeData.personalInfo.email}
              onChange={(e) =>
                setResumeData({
                  ...resumeData,
                  personalInfo: { ...resumeData.personalInfo, email: e.target.value },
                })
              }
            />
            <Input
              placeholder="Phone"
              value={resumeData.personalInfo.phone}
              onChange={(e) =>
                setResumeData({
                  ...resumeData,
                  personalInfo: { ...resumeData.personalInfo, phone: e.target.value },
                })
              }
            />
            <Input
              placeholder="Location"
              value={resumeData.personalInfo.location}
              onChange={(e) =>
                setResumeData({
                  ...resumeData,
                  personalInfo: { ...resumeData.personalInfo, location: e.target.value },
                })
              }
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="space-y-2 mb-4">
              <Input
                placeholder="Degree"
                value={edu.degree}
                onChange={(e) => {
                  const newEducation = [...resumeData.education]
                  newEducation[index].degree = e.target.value
                  setResumeData({ ...resumeData, education: newEducation })
                }}
              />
              <Input
                placeholder="School"
                value={edu.school}
                onChange={(e) => {
                  const newEducation = [...resumeData.education]
                  newEducation[index].school = e.target.value
                  setResumeData({ ...resumeData, education: newEducation })
                }}
              />
              <Input
                placeholder="Year"
                value={edu.year}
                onChange={(e) => {
                  const newEducation = [...resumeData.education]
                  newEducation[index].year = e.target.value
                  setResumeData({ ...resumeData, education: newEducation })
                }}
              />
            </div>
          ))}
          <Button
            type="button"
            onClick={() =>
              setResumeData({
                ...resumeData,
                education: [...resumeData.education, { degree: "", school: "", year: "" }],
              })
            }
          >
            Add Education
          </Button>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="space-y-2 mb-4">
              <Input
                placeholder="Title"
                value={exp.title}
                onChange={(e) => {
                  const newExperience = [...resumeData.experience]
                  newExperience[index].title = e.target.value
                  setResumeData({ ...resumeData, experience: newExperience })
                }}
              />
              <Input
                placeholder="Company"
                value={exp.company}
                onChange={(e) => {
                  const newExperience = [...resumeData.experience]
                  newExperience[index].company = e.target.value
                  setResumeData({ ...resumeData, experience: newExperience })
                }}
              />
              <Input
                placeholder="Year"
                value={exp.year}
                onChange={(e) => {
                  const newExperience = [...resumeData.experience]
                  newExperience[index].year = e.target.value
                  setResumeData({ ...resumeData, experience: newExperience })
                }}
              />
              <Textarea
                placeholder="Responsibilities (one per line)"
                value={exp.responsibilities.join("\n")}
                onChange={(e) => {
                  const newExperience = [...resumeData.experience]
                  newExperience[index].responsibilities = e.target.value.split("\n")
                  setResumeData({ ...resumeData, experience: newExperience })
                }}
              />
            </div>
          ))}
          <Button
            type="button"
            onClick={() =>
              setResumeData({
                ...resumeData,
                experience: [...resumeData.experience, { title: "", company: "", year: "", responsibilities: [] }],
              })
            }
          >
            Add Experience
          </Button>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <Textarea
            placeholder="Skills (comma-separated)"
            value={resumeData.skills.join(", ")}
            onChange={(e) => setResumeData({ ...resumeData, skills: e.target.value.split(", ") })}
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Certifications</h2>
          {resumeData.certifications.map((cert, index) => (
            <div key={index} className="space-y-2 mb-4">
              <Input
                placeholder="Certification Name"
                value={cert.name}
                onChange={(e) => {
                  const newCertifications = [...resumeData.certifications]
                  newCertifications[index].name = e.target.value
                  setResumeData({ ...resumeData, certifications: newCertifications })
                }}
              />
              <Input
                placeholder="Issuer"
                value={cert.issuer}
                onChange={(e) => {
                  const newCertifications = [...resumeData.certifications]
                  newCertifications[index].issuer = e.target.value
                  setResumeData({ ...resumeData, certifications: newCertifications })
                }}
              />
              <Input
                placeholder="Year"
                value={cert.year}
                onChange={(e) => {
                  const newCertifications = [...resumeData.certifications]
                  newCertifications[index].year = e.target.value
                  setResumeData({ ...resumeData, certifications: newCertifications })
                }}
              />
              <Input
                placeholder="URL"
                value={cert.url}
                onChange={(e) => {
                  const newCertifications = [...resumeData.certifications]
                  newCertifications[index].url = e.target.value
                  setResumeData({ ...resumeData, certifications: newCertifications })
                }}
              />
            </div>
          ))}
          <Button
            type="button"
            onClick={() =>
              setResumeData({
                ...resumeData,
                certifications: [...resumeData.certifications, { name: "", issuer: "", year: "", url: "" }],
              })
            }
          >
            Add Certification
          </Button>
        </section>

        <Button type="submit">Update Resume</Button>
      </form>
    </div>
  )
}

