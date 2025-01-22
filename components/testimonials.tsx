"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "John's creativity and technical skills are truly impressive. He delivered an outstanding website for our company.",
    author: "Sarah Johnson",
    role: "CEO, TechCorp",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote: "Working with John was a pleasure. He understood our vision and brought it to life beautifully.",
    author: "Michael Chen",
    role: "Marketing Director, DesignHub",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote: "John's attention to detail and problem-solving skills made our project a success. Highly recommended!",
    author: "Emily Rodriguez",
    role: "Founder, StartupX",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export function Testimonials() {
  return (
    <section className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Client Testimonials</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Here's what some of my clients have to say about working with me.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-6"
          >
            <Quote className="text-blue-400 mb-4" size={32} />
            <p className="text-white/90 italic mb-4">"{testimonial.quote}"</p>
            <div className="flex items-center">
              <Image
                src={testimonial.avatar || "/placeholder.svg"}
                alt={testimonial.author}
                width={50}
                height={50}
                className="rounded-full mr-4"
              />
              <div>
                <p className="text-white font-semibold">{testimonial.author}</p>
                <p className="text-white/70 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

