"use client"

import { useRef } from "react"
import { domAnimation, LazyMotion, motion, useInView } from "framer-motion"
import { TECHNOLOGIES } from "@/data/technologies"

export function Skills() {
  const textRef = useRef(null);
  const stackRef = useRef(null);
  const isTextInView = useInView(textRef, { once: true });
  const isStackInView = useInView(stackRef, { once: true });
  const techData = TECHNOLOGIES();

  return (
    <LazyMotion features={domAnimation}>
      <section className="relative overflow-hidden bg-gradient-to-tl from-background via-background to-primary/20">
        <div className="container mx-auto px-4 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center relative pb-2">
              <span className="w-full h-[2px] bg-[#1a1443]"></span>
              <span
                ref={textRef}
                style={{
                  transform: isTextInView ? "none" : "translateX(-200px)",
                  opacity: isTextInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
                className="bg-[#1a1443] w-fit text-white px-5 py-3 text-xl rounded-md whitespace-nowrap"
              >
                MY SKILLS
              </span>
              <span className="w-full h-[2px] bg-[#1a1443]"></span>
            </div>
            <p
              className="text-muted-foreground max-w-2xl mx-auto"
              ref={textRef}
              style={{
                transform: isTextInView ? "none" : "translateX(-200px)",
                opacity: isTextInView ? 1 : 0,
                transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
              }}
            >
              I work with the following technologies and tools:
            </p>
          </motion.div>
          {!!techData.length && (
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
              {techData.map((tech, index) => index < 4 && (
                <div
                  key={tech.category}
                  ref={stackRef}
                  className="flex flex-col gap-4 flex-1 md:flex-auto"
                  style={{
                    transform: isStackInView ? "none" : `${index === 0 ? "translateY(250px)" : `translateY(${200 / index}px)`}`,
                    opacity: isStackInView ? 1 : 0,
                    transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${index === 0 ? 0 : 0.5 * index}s`
                  }}
                >
                  <div className="bg-white dark:bg-gray-800 h-full shadow-lg rounded-xl p-6 hover:scale-105 transform transition duration-300 ease-in-out">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-4">
                      {tech.category}
                    </h3>
                    <div className="grid items-center grid-cols-3 gap-x-5 gap-y-8">
                      {tech.items.map((item) => (
                        <div key={item.name} className="group relative flex">
                          <span role="img">
                            {item.icon}
                          </span>
                          <span
                            className="group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity bg-gray-800 text-sm text-gray-100 rounded-md absolute left-4 -translate-x-1/2 translate-y-full opacity-0 mt-3 mx-auto px-2 w-max"
                          >
                            {item.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </LazyMotion>
  )
}

