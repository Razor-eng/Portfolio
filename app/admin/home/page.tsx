"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  heroData,
  aboutMeData,
  skillsData,
  featuredProjectsData,
  latestBlogPostsData,
  contactData,
} from "@/data/homeData"

export default function AdminHome() {
  const [hero, setHero] = useState(heroData)
  const [aboutMe, setAboutMe] = useState(aboutMeData)
  const [skills, setSkills] = useState(skillsData)
  const [featuredProjects, setFeaturedProjects] = useState(featuredProjectsData)
  const [latestBlogPosts, setLatestBlogPosts] = useState(latestBlogPostsData)
  const [contact, setContact] = useState(contactData)

  const handleHeroSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement API call to update hero data
    console.log("Updating hero data:", hero)
  }

  const handleAboutMeSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement API call to update about me data
    console.log("Updating about me data:", aboutMe)
  }

  const handleSkillsSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement API call to update skills data
    console.log("Updating skills data:", skills)
  }

  const handleFeaturedProjectsSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement API call to update featured projects data
    console.log("Updating featured projects data:", featuredProjects)
  }

  const handleLatestBlogPostsSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement API call to update latest blog posts data
    console.log("Updating latest blog posts data:", latestBlogPosts)
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement API call to update contact data
    console.log("Updating contact data:", contact)
  }

  return (
    <div className="space-y-12">
      <h1 className="text-3xl font-bold mb-6">Manage Home Page Content</h1>

      <section>
        <h2 className="text-2xl font-bold mb-4">Hero Section</h2>
        <form onSubmit={handleHeroSubmit} className="space-y-4">
          <Input
            placeholder="Greeting"
            value={hero.greeting}
            onChange={(e) => setHero({ ...hero, greeting: e.target.value })}
          />
          <Input placeholder="Name" value={hero.name} onChange={(e) => setHero({ ...hero, name: e.target.value })} />
          <Input placeholder="Title" value={hero.title} onChange={(e) => setHero({ ...hero, title: e.target.value })} />
          <Textarea
            placeholder="Description"
            value={hero.description}
            onChange={(e) => setHero({ ...hero, description: e.target.value })}
          />
          <Input
            placeholder="Primary CTA Text"
            value={hero.cta.primary.text}
            onChange={(e) =>
              setHero({ ...hero, cta: { ...hero.cta, primary: { ...hero.cta.primary, text: e.target.value } } })
            }
          />
          <Input
            placeholder="Primary CTA Link"
            value={hero.cta.primary.link}
            onChange={(e) =>
              setHero({ ...hero, cta: { ...hero.cta, primary: { ...hero.cta.primary, link: e.target.value } } })
            }
          />
          <Input
            placeholder="Secondary CTA Text"
            value={hero.cta.secondary.text}
            onChange={(e) =>
              setHero({ ...hero, cta: { ...hero.cta, secondary: { ...hero.cta.secondary, text: e.target.value } } })
            }
          />
          <Input
            placeholder="Secondary CTA Link"
            value={hero.cta.secondary.link}
            onChange={(e) =>
              setHero({ ...hero, cta: { ...hero.cta, secondary: { ...hero.cta.secondary, link: e.target.value } } })
            }
          />
          <Input
            placeholder="Image URL"
            value={hero.image}
            onChange={(e) => setHero({ ...hero, image: e.target.value })}
          />
          <Button type="submit">Update Hero</Button>
        </form>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">About Me Section</h2>
        <form onSubmit={handleAboutMeSubmit} className="space-y-4">
          <Input
            placeholder="Title"
            value={aboutMe.title}
            onChange={(e) => setAboutMe({ ...aboutMe, title: e.target.value })}
          />
          <Textarea
            placeholder="Description (separate paragraphs with a new line)"
            value={aboutMe.description.join("\n")}
            onChange={(e) => setAboutMe({ ...aboutMe, description: e.target.value.split("\n") })}
          />
          <Input
            placeholder="CTA Text"
            value={aboutMe.cta.text}
            onChange={(e) => setAboutMe({ ...aboutMe, cta: { ...aboutMe.cta, text: e.target.value } })}
          />
          <Input
            placeholder="CTA Link"
            value={aboutMe.cta.link}
            onChange={(e) => setAboutMe({ ...aboutMe, cta: { ...aboutMe.cta, link: e.target.value } })}
          />
          <Input
            placeholder="Image URL"
            value={aboutMe.image}
            onChange={(e) => setAboutMe({ ...aboutMe, image: e.target.value })}
          />
          <Button type="submit">Update About Me</Button>
        </form>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Skills Section</h2>
        <form onSubmit={handleSkillsSubmit} className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <Input
                placeholder="Skill Name"
                value={skill.name}
                onChange={(e) => {
                  const newSkills = [...skills]
                  newSkills[index].name = e.target.value
                  setSkills(newSkills)
                }}
              />
              <Input
                placeholder="Description"
                value={skill.description}
                onChange={(e) => {
                  const newSkills = [...skills]
                  newSkills[index].description = e.target.value
                  setSkills(newSkills)
                }}
              />
              <Input
                type="number"
                placeholder="Level"
                value={skill.level}
                onChange={(e) => {
                  const newSkills = [...skills]
                  newSkills[index].level = Number.parseInt(e.target.value)
                  setSkills(newSkills)
                }}
              />
              <Textarea
                placeholder="Details"
                value={skill.details}
                onChange={(e) => {
                  const newSkills = [...skills]
                  newSkills[index].details = e.target.value
                  setSkills(newSkills)
                }}
              />
            </div>
          ))}
          <Button type="submit">Update Skills</Button>
        </form>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Featured Projects Section</h2>
        <form onSubmit={handleFeaturedProjectsSubmit} className="space-y-4">
          {featuredProjects.map((project, index) => (
            <div key={index} className="space-y-2">
              <Input
                placeholder="Project Title"
                value={project.title}
                onChange={(e) => {
                  const newProjects = [...featuredProjects]
                  newProjects[index].title = e.target.value
                  setFeaturedProjects(newProjects)
                }}
              />
              <Textarea
                placeholder="Description"
                value={project.description}
                onChange={(e) => {
                  const newProjects = [...featuredProjects]
                  newProjects[index].description = e.target.value
                  setFeaturedProjects(newProjects)
                }}
              />
              <Input
                placeholder="Image URL"
                value={project.image}
                onChange={(e) => {
                  const newProjects = [...featuredProjects]
                  newProjects[index].image = e.target.value
                  setFeaturedProjects(newProjects)
                }}
              />
              <Input
                placeholder="Project Link"
                value={project.link}
                onChange={(e) => {
                  const newProjects = [...featuredProjects]
                  newProjects[index].link = e.target.value
                  setFeaturedProjects(newProjects)
                }}
              />
              <Input
                placeholder="Tags (comma-separated)"
                value={project.tags.join(", ")}
                onChange={(e) => {
                  const newProjects = [...featuredProjects]
                  newProjects[index].tags = e.target.value.split(", ")
                  setFeaturedProjects(newProjects)
                }}
              />
            </div>
          ))}
          <Button type="submit">Update Featured Projects</Button>
        </form>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Latest Blog Posts Section</h2>
        <form onSubmit={handleLatestBlogPostsSubmit} className="space-y-4">
          {latestBlogPosts.map((post, index) => (
            <div key={index} className="space-y-2">
              <Input
                placeholder="Post Title"
                value={post.title}
                onChange={(e) => {
                  const newPosts = [...latestBlogPosts]
                  newPosts[index].title = e.target.value
                  setLatestBlogPosts(newPosts)
                }}
              />
              <Textarea
                placeholder="Excerpt"
                value={post.excerpt}
                onChange={(e) => {
                  const newPosts = [...latestBlogPosts]
                  newPosts[index].excerpt = e.target.value
                  setLatestBlogPosts(newPosts)
                }}
              />
              <Input
                placeholder="Image URL"
                value={post.image}
                onChange={(e) => {
                  const newPosts = [...latestBlogPosts]
                  newPosts[index].image = e.target.value
                  setLatestBlogPosts(newPosts)
                }}
              />
              <Input
                placeholder="Date"
                value={post.date}
                onChange={(e) => {
                  const newPosts = [...latestBlogPosts]
                  newPosts[index].date = e.target.value
                  setLatestBlogPosts(newPosts)
                }}
              />
              <Input
                placeholder="Post Link"
                value={post.link}
                onChange={(e) => {
                  const newPosts = [...latestBlogPosts]
                  newPosts[index].link = e.target.value
                  setLatestBlogPosts(newPosts)
                }}
              />
            </div>
          ))}
          <Button type="submit">Update Latest Blog Posts</Button>
        </form>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Contact Section</h2>
        <form onSubmit={handleContactSubmit} className="space-y-4">
          <Input
            placeholder="Title"
            value={contact.title}
            onChange={(e) => setContact({ ...contact, title: e.target.value })}
          />
          <Textarea
            placeholder="Description"
            value={contact.description}
            onChange={(e) => setContact({ ...contact, description: e.target.value })}
          />
          <Input
            placeholder="Email"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
          />
          <Input
            placeholder="Phone"
            value={contact.phone}
            onChange={(e) => setContact({ ...contact, phone: e.target.value })}
          />
          <Input
            placeholder="Location"
            value={contact.location}
            onChange={(e) => setContact({ ...contact, location: e.target.value })}
          />
          {contact.socialLinks.map((link, index) => (
            <div key={index} className="flex space-x-2">
              <Input
                placeholder="Social Link Name"
                value={link.name}
                onChange={(e) => {
                  const newLinks = [...contact.socialLinks]
                  newLinks[index].name = e.target.value
                  setContact({ ...contact, socialLinks: newLinks })
                }}
              />
              <Input
                placeholder="Social Link URL"
                value={link.url}
                onChange={(e) => {
                  const newLinks = [...contact.socialLinks]
                  newLinks[index].url = e.target.value
                  setContact({ ...contact, socialLinks: newLinks })
                }}
              />
            </div>
          ))}
          <Button type="submit">Update Contact</Button>
        </form>
      </section>
    </div>
  )
}

