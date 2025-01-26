"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Hero } from "@/components/hero"
import { AboutMe } from "@/components/about-me"
import { FeaturedProjects } from "@/components/featured-projects"
import { Skills } from "@/components/skills"
import TransitionEffect from "@/components/transition-effect"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

function AnimatedSection({ children }: { children: React.ReactNode }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <AnimatedSection>
          <AboutMe />
        </AnimatedSection>
        <AnimatedSection>
          <FeaturedProjects />
        </AnimatedSection>
        <AnimatedSection>
          <Skills />
        </AnimatedSection>
      </motion.main>
    </>
  )
}

