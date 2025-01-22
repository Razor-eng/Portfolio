"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"
import { contactData } from "@/data/homeData"

export function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formState)
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/20">
      <section className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">{contactData.title}</h2>
          <p className="text-muted-foreground text-center mb-8">{contactData.description}</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                placeholder="Name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="bg-background border-border text-foreground placeholder:text-muted-foreground"
              />
              <Input
                placeholder="Email"
                type="email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="bg-background border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <Textarea
              placeholder="Message"
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              className="bg-background border-border text-foreground placeholder:text-muted-foreground min-h-[150px]"
            />
            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Send Message <Send className="ml-2" size={16} />
            </Button>
          </form>
        </motion.div>
      </section>
    </section>
  )
}

