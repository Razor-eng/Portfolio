"use client"

import { useRef } from "react"
import { domAnimation, LazyMotion, motion, useInView } from "framer-motion"
import { technologies } from "@/data/technologies"
import Link from "next/link";
import Image from "next/image";

const tech = Object.entries(technologies)
  .flatMap(([category, items]) =>
    items.map((item) => ({
      ...item,
      category,
    }))
  );

const techVariants = Object.keys(technologies);

export function Skills() {
  const textRef = useRef(null);
  const isTextInView = useInView(textRef, { once: true });

  const languages = Object.entries(technologies)
    .flatMap(([category, technology]) => (
      <div className="w-full h-fit flex gap-2 md:flex-row flex-col" key={category}>
        <h3 className="md:hidden font-semibold">{category}</h3>
        <motion.div
          className="w-full flex flex-row flex-wrap gap-2"
          variants={fadeIn({ direction: "right", type: "spring", delay: 0.75, duration: 1 })}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {technology.map((tech) => (
            <Link
              href={tech.link}
              key={tech.name}
              target="_blank"
              className="flex flex-row"
            >
              <div className="w-[40px] h-[40px] relative flex flex-row items-center group cursor-pointer">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                />
                <div className="opacity-0 w-fit min-w-[80px] bg-blue-50 dark:bg-zinc-700 whitespace-nowrap text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 px-3 -top-3/4 -left-1/3 pointer-events-none">
                  {tech.name}
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    ));

  const techNames = techVariants.map((tech, index) => (
    <h3 className="h-[50px] md:flex items-center hidden" key={index}>
      {tech}
    </h3>
  ));

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
          <motion.div
            variants={fadeIn({ direction: "", type: "spring", delay: 0.1, duration: 1 })}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-6 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-200 md:w-fit md:min-w-[60%] w-full p-4 md:p-8 mx-auto rounded-lg shadow-lg flex flex-col md:flex-row gap-8"
          >
            <motion.div
              variants={textVariant({ delay: 0 })}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col justify-between md:w-[20%] w-full gap-4"
            >
              {techNames}
            </motion.div>
            <div className="w-[2px] h-auto bg-primary/50 rounded-lg md:block hidden mx-8" />
            <div className="flex-1 flex flex-col gap-6">
              {languages}
            </div>
          </motion.div>
        </div>
      </section>
    </LazyMotion>
  )
}

interface FadeInProps {
  direction: "left" | "right" | "up" | "down" | "";
  type: string;
  delay: number;
  duration: number;
}

const fadeIn = ({ direction, type, delay, duration }: FadeInProps) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut"
      }
    }
  };
};

interface TextVariantProps {
  delay: number;
}

const textVariant = ({ delay }: TextVariantProps) => {
  return {
    hidden: {
      y: -50,
      opacity: 0
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay
      }
    }
  };
};