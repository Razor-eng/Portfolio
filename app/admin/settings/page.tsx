"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AdminSettings() {
  const [navItems, setNavItems] = useState([
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ])

  const [socialLinks, setSocialLinks] = useState([
    { name: "GitHub", url: "https://github.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "Twitter", url: "https://twitter.com" },
  ])

  const handleNavItemSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement API call to update nav items
    console.log("Updating nav items:", navItems)
  }

  const handleSocialLinkSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement API call to update social links
    console.log("Updating social links:", socialLinks)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Navbar Items</h2>
        <form onSubmit={handleNavItemSubmit} className="space-y-4">
          {navItems.map((item, index) => (
            <div key={index} className="flex space-x-2">
              <Input
                placeholder="Name"
                value={item.name}
                onChange={(e) => {
                  const newNavItems = [...navItems]
                  newNavItems[index].name = e.target.value
                  setNavItems(newNavItems)
                }}
              />
              <Input
                placeholder="Path"
                value={item.path}
                onChange={(e) => {
                  const newNavItems = [...navItems]
                  newNavItems[index].path = e.target.value
                  setNavItems(newNavItems)
                }}
              />
              <Button
                type="button"
                variant="destructive"
                onClick={() => {
                  const newNavItems = navItems.filter((_, i) => i !== index)
                  setNavItems(newNavItems)
                }}
              >
                Remove
              </Button>
            </div>
          ))}
          <Button type="button" onClick={() => setNavItems([...navItems, { name: "", path: "" }])}>
            Add Nav Item
          </Button>
          <Button type="submit">Update Navbar Items</Button>
        </form>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Social Links</h2>
        <form onSubmit={handleSocialLinkSubmit} className="space-y-4">
          {socialLinks.map((link, index) => (
            <div key={index} className="flex space-x-2">
              <Input
                placeholder="Name"
                value={link.name}
                onChange={(e) => {
                  const newSocialLinks = [...socialLinks]
                  newSocialLinks[index].name = e.target.value
                  setSocialLinks(newSocialLinks)
                }}
              />
              <Input
                placeholder="URL"
                value={link.url}
                onChange={(e) => {
                  const newSocialLinks = [...socialLinks]
                  newSocialLinks[index].url = e.target.value
                  setSocialLinks(newSocialLinks)
                }}
              />
              <Button
                type="button"
                variant="destructive"
                onClick={() => {
                  const newSocialLinks = socialLinks.filter((_, i) => i !== index)
                  setSocialLinks(newSocialLinks)
                }}
              >
                Remove
              </Button>
            </div>
          ))}
          <Button type="button" onClick={() => setSocialLinks([...socialLinks, { name: "", url: "" }])}>
            Add Social Link
          </Button>
          <Button type="submit">Update Social Links</Button>
        </form>
      </section>
    </div>
  )
}

