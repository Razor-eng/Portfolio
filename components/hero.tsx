"use client"

import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { heroData } from "@/data/homeData"
import AnimatedText from "./animated-text"
import Link from "next/link"
import { useRef } from "react"

export function Hero() {
  const ref = useRef(null);
  const devRef = useRef(null);
  const introRef = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isDevView = useInView(devRef, { once: true });

  return (
    <section ref={introRef} className="relative min-h-screen flex justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/20 pt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:hidden rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 dark:hidden rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-pink-300 dark:hidden rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div className="relative overflow-hidden">
              <Image
                src={heroData.image}
                width={500}
                height={500}
                alt={heroData.name}
                className="w-full md:w-full lg:w-full"
                priority
                placeholder="blur"
                blurDataURL="/placeholder.svg"
                ref={devRef}
                style={{
                  transform: isDevView ? "none" : "translateX(-200px)",
                  opacity: isDevView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatedText text="Turning Vision Into Reality With Code And Design." className='xl:!text-6xl xl:!text-left
                lg:!text-5xl !text-center md:!text-6xl sm:!text-5xl !text-3xl pr-8
              ' />
            <p
              ref={ref}
              style={{
                transform: isInView ? "none" : "translateX(100px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
              }}
              className='my-4 md:text-base font-medium text-sm'
            >
              {heroData.description}
            </p>
            <div
              ref={ref}
              style={{
                transform: isInView ? "none" : "translateX(100px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
              }}
              className="flex space-x-4 mt-10"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                asChild
              >
                <Link href={heroData.cta.primary.link}>
                  {heroData.cta.primary.text} <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hover:bg-secondary/80 transition-colors duration-300"
                asChild
              >
                <Link href="mailto:mrajat00@gmail.com" target={'_blank'} prefetch={false}>{heroData.cta.secondary.text}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

