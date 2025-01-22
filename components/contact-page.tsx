"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Github, Linkedin, Twitter, Instagram, Facebook, Mail } from "lucide-react"
import { SectionBackground } from "./section-background"

export function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formState)
  }

  const socialLinks = [
    { icon: <Github size={24} />, href: "https://github.com", label: "GitHub" },
    { icon: <Linkedin size={24} />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Twitter size={24} />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Instagram size={24} />, href: "https://instagram.com", label: "Instagram" },
    { icon: <Facebook size={24} />, href: "https://facebook.com", label: "Facebook" },
    { icon: <Mail size={24} />, href: "mailto:your.email@example.com", label: "Email" },
  ]

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">Get in Touch</h1>
        <p className="text-muted-foreground text-center mb-8">
          Have a project in mind or want to collaborate? I'd love to hear from you!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
            <p className="text-muted-foreground mb-6">
              Feel free to reach out through any of the following channels:
            </p>
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                  <span className="ml-2">{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <Input
                  placeholder="Email"
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground min-h-[150px]"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Send Message <Send className="ml-2" size={16} />
              </Button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

