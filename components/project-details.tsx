"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Code, Gauge } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/lib/types";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import TransitionEffect from "./transition-effect";
import { technologies } from "@/data/technologies";
import Link from "next/link";
import { GithubIcon } from "@/data/icons";
import { Dialog, DialogContent, DialogOverlay, DialogTitle, DialogTrigger } from "./ui/dialog";

interface ProjectDetailsProps {
    project: Project;
    relatedProjects?: Project[];
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
    const [isInView, setIsInView] = useState(false);

    const skillsData = Object.values(technologies).flat().filter((tech) => project.technologies.includes(tech.name));

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsInView(true);
        }, 500);

        return () => clearTimeout(timeout);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0
        }
    };

    const [isLoading, setLoading] = useState(true);

    return (
        <>
            <TransitionEffect />
            <AnimatePresence mode="wait">
                {isInView && (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="container mx-auto px-6 lg:px-12"
                    >
                        <motion.div className="flex justify-around gap-12 flex-col lg:flex-row">
                            <div className="max-w-2xl flex-1">
                                <motion.div
                                    variants={itemVariants}
                                    className="mb-4 space-y-4"
                                >
                                    <div className="flex flex-wrap items-center gap-4 mb-6">
                                        <Badge
                                            className={cn(
                                                "px-4 py-2 text-sm font-semibold rounded-md",
                                                project.category === "Featured" && "bg-amber-500/10 text-amber-500 hover:bg-amber-500/20",
                                                project.category === "Recent" && "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20",
                                                project.category === "Landing Page" && "bg-green-500/10 text-green-500 hover:bg-green-500/20",
                                            )}
                                        >
                                            {project.category}
                                        </Badge>
                                        <div className="flex font-semibold items-center gap-2 text-muted-foreground">
                                            <Calendar className="w-4 h-4" />
                                            <span>{project.year}</span>
                                        </div>
                                        {skillsData.length === project.technologies.length &&
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <Code className="w-4 h-4" />
                                                <span>{project.technologies.length} Technologies</span>
                                            </div>
                                        }
                                        <div
                                            className={cn(
                                                "flex items-center gap-2 px-3 py-2 rounded-md shadow-sm bg-gray-500/10",
                                                {
                                                    "text-green-700": project.complexity === "Beginner",
                                                    "text-yellow-700": project.complexity === "Intermediate",
                                                    "text-red-700": project.complexity === "Advanced",
                                                }
                                            )}
                                        >
                                            <Gauge className="w-4 h-4" />
                                            <span className="font-semibold capitalize">{project.complexity}</span>
                                        </div>
                                    </div>

                                    <h1 className="md:text-4xl text-4xl font-bold tracking-tight">{project.title}</h1>
                                </motion.div>

                                <motion.div
                                    variants={itemVariants}
                                    className="mb-6"
                                >
                                    {project.images.length > 0 ? (
                                        <Carousel className="w-full">
                                            <CarouselContent>
                                                {project.images.map((image, index) => (
                                                    <CarouselItem key={index}>
                                                        <motion.div
                                                            className="relative aspect-video rounded-lg overflow-hidden"
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            transition={{ duration: 0.5 }}
                                                        >
                                                            <Dialog>
                                                                <DialogTrigger asChild>
                                                                    <div>
                                                                        {isLoading && <div className="absolute inset-0 animate-pulse bg-gray-300 dark:bg-gray-700" />}
                                                                        <Image
                                                                            src={image ? `${image}?w=800&h=600&fit=crop` : "/placeholder.svg"}
                                                                            alt={`${project.title} screenshot ${index + 1}`}
                                                                            fill
                                                                            className={`aspect-video cursor-pointer transition-all duration-700 ease-in-out ${isLoading ? 'scale-105 blur-sm' : 'scale-100 blur-0'
                                                                                }`}
                                                                            priority={index === 0}
                                                                            loading={index === 0 ? 'eager' : 'lazy'}
                                                                            placeholder="blur"
                                                                            blurDataURL="/placeholder.svg"
                                                                            onLoadingComplete={() => setLoading(false)}
                                                                        />
                                                                    </div>
                                                                </DialogTrigger>
                                                                <DialogOverlay />
                                                                <DialogContent className="p-0 sm:max-w-4xl">
                                                                    <DialogTitle className="hidden">{project.title}</DialogTitle>
                                                                    <div className="relative w-full aspect-video">
                                                                        {isLoading && <div className="absolute inset-0 animate-pulse bg-gray-300 dark:bg-gray-700" />}
                                                                        <Image
                                                                            src={image ? `${image}?w=800&h=600&fit=crop` : "/placeholder.svg"}
                                                                            alt={`${project.title} screenshot ${index + 1}`}
                                                                            fill
                                                                            className={`aspect-video cursor-pointer transition-all duration-700 ease-in-out ${isLoading ? 'scale-105 blur-sm' : 'scale-100 blur-0'
                                                                                }`}
                                                                            priority={index === 0}
                                                                            loading={index === 0 ? 'eager' : 'lazy'}
                                                                            placeholder="blur"
                                                                            blurDataURL="/placeholder.svg"
                                                                            onLoadingComplete={() => setLoading(false)}
                                                                        />
                                                                    </div>
                                                                </DialogContent>
                                                            </Dialog>
                                                        </motion.div>
                                                    </CarouselItem>
                                                ))}
                                            </CarouselContent>
                                            <CarouselPrevious />
                                            <CarouselNext />
                                        </Carousel>
                                    ) : (
                                        <div className="relative aspect-video rounded-lg overflow-hidden">
                                            <Image
                                                src="/placeholder.svg"
                                                alt="/Placeholder.svg"
                                                fill
                                                className="aspect-video"
                                                loading="lazy"
                                                placeholder="blur"
                                            />
                                        </div>
                                    )}
                                </motion.div>
                                <div className="flex flex-wrap gap-2">
                                    {skillsData.map((skill, id) => (
                                        <Badge
                                            key={skill.name}
                                            variant="secondary"
                                            className="px-3 py-1 text-sm rounded bg-blue-500/20 hover:bg-blue-500/30"
                                        >
                                            <motion.div
                                                className="dark:text-white/80 flex items-center justify-center flex-nowrap gap-1"
                                                initial="initial"
                                                whileInView="animate"
                                                viewport={{
                                                    once: true,
                                                }}
                                            >
                                                <Image
                                                    src={skill.icon}
                                                    alt={skill.name}
                                                    width={25}
                                                    height={25}
                                                    className="rounded-md"
                                                    priority={id < 5}
                                                />
                                                <span>{skill.name}</span>
                                            </motion.div>
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <motion.div
                                variants={itemVariants}
                                className="prose prose-lg dark:prose-invert max-w-xl min-h-full flex flex-col justify-between"
                            >
                                <div className="flex flex-col space-y-8">
                                    <div className="space-y-2">
                                        <h2 className="text-3xl font-bold">Project Overview</h2>
                                        <p className="text-muted-foreground">{project.longDescription}</p>
                                    </div>

                                    {project.features ? (
                                        <div className="space-y-2">
                                            <h3 className="text-2xl font-bold">Features</h3>
                                            <ul className="list-disc list-inside text-muted-foreground">
                                                {project.features.map((feature) => (
                                                    <li key={feature}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ) : (
                                        <div className="grid md:grid-cols-2 gap-12">
                                            <div className="space-y-2">
                                                <h3 className="text-2xl font-bold">The Challenge</h3>
                                                <p className="text-muted-foreground">{project.challenge}</p>
                                            </div>
                                            <div className="space-y-2">
                                                <h3 className="text-2xl font-bold">The Solution</h3>
                                                <p className="text-muted-foreground">{project.solution}</p>
                                            </div>
                                        </div>
                                    )}

                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold">Technical Implementation</h3>
                                        <p className="text-muted-foreground">{project.technicalDetails}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4 mt-6">
                                    {project.demoUrl && (
                                        <Button size="lg" asChild>
                                            <Link
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2"
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                                Live Demo
                                            </Link>
                                        </Button>
                                    )}
                                    {project.repoUrl && (
                                        <Button size="lg" variant="outline" asChild>
                                            <Link
                                                href={project.repoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2"
                                            >
                                                <div className="w-6">
                                                    <GithubIcon />
                                                </div>
                                                Source Code
                                            </Link>
                                        </Button>
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}