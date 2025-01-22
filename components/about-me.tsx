"use client"

import { domAnimation, LazyMotion, motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { WelcomeAnimation } from "./welcome-animation"
import { useRef } from "react"
import { TimeLine } from "./timeline"

export function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <LazyMotion features={domAnimation}>
      <section className="relative overflow-hidden bg-gradient-to-tr from-background via-background to-primary/20 md:pl-32" id="about">
        <section className="container mx-auto px-4 md:py-16 flex flex-col gap-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">About Me</h2>
              <div
                ref={ref}
                style={{
                  transform: isInView ? "none" : "translateX(-200px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
              >
                <p className="text-muted-foreground mb-6">
                  Hi, I'm Rajat, a passionate and highly skilled Software Developer with a Bachelor's degree in Technology (B.Tech) in Computer Science, specializing in full-stack development. With over 3 years of experience, expertise spans across front-end and back-end technologies, including Java, React, TailwindCSS, MySQL, Next.js, and Vue.js.
                </p>
                <p className="text-muted-foreground mb-6">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
                  sharing my knowledge through tech blogs and community meetups.
                </p>
                <Button asChild>
                  <a href="/about">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </a>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md mx-auto hidden md:block"
            >
              <WelcomeAnimation />
            </motion.div>
          </div>
          <TimeLine />
        </section>
      </section>
    </LazyMotion>
  )
}

