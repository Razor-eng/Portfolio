"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Search, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SectionBackground } from "./section-background"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development",
    excerpt: "Exploring upcoming trends and technologies in web development.",
    image: "/placeholder.svg?height=200&width=300",
    date: "2023-06-15",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Mastering React Hooks",
    excerpt: "A comprehensive guide to using React Hooks effectively.",
    image: "/placeholder.svg?height=200&width=300",
    date: "2023-06-01",
    category: "React",
  },
  {
    id: 3,
    title: "Optimizing Website Performance",
    excerpt: "Tips and tricks to improve your website's loading speed.",
    image: "/placeholder.svg?height=200&width=300",
    date: "2023-05-20",
    category: "Performance",
  },
  {
    id: 4,
    title: "Introduction to TypeScript",
    excerpt: "Learn the basics of TypeScript and its benefits in web development.",
    image: "/placeholder.svg?height=200&width=300",
    date: "2023-05-10",
    category: "TypeScript",
  },
  {
    id: 5,
    title: "Building Responsive Layouts with CSS Grid",
    excerpt: "A step-by-step guide to creating responsive layouts using CSS Grid.",
    image: "/placeholder.svg?height=200&width=300",
    date: "2023-04-28",
    category: "CSS",
  },
  {
    id: 6,
    title: "Getting Started with Next.js",
    excerpt: "An introduction to Next.js and its key features for React developers.",
    image: "/placeholder.svg?height=200&width=300",
    date: "2023-04-15",
    category: "Next.js",
  },
]

export function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setPosts(blogPosts)
      setIsLoading(false)
    }, 1500)
  }, [])

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <SectionBackground>
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Blog</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my latest thoughts, tutorials, and insights on web development and design.
          </p>
        </motion.div>

        <div className="mb-8">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center items-center h-64"
            >
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </motion.div>
          ) : filteredPosts.length > 0 ? (
            <motion.div
              key="posts"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card backdrop-blur-sm rounded-lg overflow-hidden"
                >
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="text-sm text-primary mb-2 inline-block">{post.category}</span>
                    <h3 className="text-xl font-bold text-foreground mb-2">{post.title}</h3>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                      <Button variant="link" className="text-primary">
                        Read More <ArrowRight className="ml-2" size={16} />
                      </Button>
                    </div>
                  </div>
                </motion.div>
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
              No blog posts found. Try adjusting your search.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionBackground>
  )
}

