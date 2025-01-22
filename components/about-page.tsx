"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Briefcase, GraduationCap, Heart } from "lucide-react"
import Link from "next/link"

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
}

const staggerChildren = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}
const timeline = [
    { year: "2020", description: "Started my development journey" },
    { year: "2021", description: "Built my first full-stack app" },
    { year: "2022", description: "Joined a tech startup" },
    { year: "2023", description: "Launched my portfolio" },
];


export function AboutPage() {
    return (
        <div className="container mx-auto px-4">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold text-center mb-12"
            >
                About Me
            </motion.h1>

            <motion.div variants={staggerChildren} initial="initial" animate="animate" className="space-y-16">
                <motion.section variants={fadeInUp} className="space-y-4">
                    <h2 className="text-3xl font-bold mb-4 flex items-center">
                        <Briefcase className="mr-2" /> Professional Background
                    </h2>
                    <p className="text-lg">
                        Hi, I'm John Doe, a passionate full-stack developer with over 5 years of experience in creating innovative
                        web applications. I specialize in React, Node.js, and cloud technologies, always striving to build
                        scalable and efficient solutions that make a real impact.
                    </p>
                    <p className="text-lg">
                        Throughout my career, I've had the opportunity to work on a diverse range of projects, from small startups
                        to large enterprise applications. This experience has honed my skills in:
                    </p>
                    <ul className="list-disc list-inside text-lg ml-4">
                        <li>Front-end development with React, Next.js, and modern CSS frameworks</li>
                        <li>Back-end development using Node.js, Express, and various databases</li>
                        <li>Cloud infrastructure and deployment on platforms like AWS and Vercel</li>
                        <li>Agile methodologies and team collaboration</li>
                        <li>Performance optimization and accessibility improvements</li>
                    </ul>
                    <p className="text-lg">
                        I'm always excited to take on new challenges and learn cutting-edge technologies to stay at the forefront
                        of web development.
                    </p>
                </motion.section>

                <motion.section variants={fadeInUp} className="space-y-4">
                    <h2 className="text-3xl font-bold mb-4 flex items-center">
                        <GraduationCap className="mr-2" /> Education and Continuous Learning
                    </h2>
                    <p className="text-lg">
                        My journey in tech started with a deep curiosity about how things work, which led me to pursue formal
                        education in computer science. Here's a snapshot of my academic background:
                    </p>
                    <div className="space-y-4 ml-4">
                        <div>
                            <h3 className="text-xl font-semibold">Master of Science in Computer Science</h3>
                            <p className="text-lg text-muted-foreground">Stanford University, 2018 - 2020</p>
                            <ul className="list-disc list-inside text-lg">
                                <li>Specialized in Artificial Intelligence and Machine Learning</li>
                                <li>Thesis: "Optimizing Neural Networks for Edge Computing Devices"</li>
                                <li>GPA: 3.9/4.0</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Bachelor of Science in Software Engineering</h3>
                            <p className="text-lg text-muted-foreground">Massachusetts Institute of Technology, 2014 - 2018</p>
                            <ul className="list-disc list-inside text-lg">
                                <li>Minor in Data Science</li>
                                <li>Capstone Project: "Developing a Real-time Collaborative Coding Platform"</li>
                                <li>GPA: 3.8/4.0</li>
                            </ul>
                        </div>
                    </div>
                    <p className="text-lg">
                        Beyond formal education, I'm a firm believer in lifelong learning. I regularly attend tech conferences,
                        participate in online courses, and contribute to open-source projects to stay updated with the latest
                        industry trends and best practices.
                    </p>
                </motion.section>

                <motion.section variants={fadeInUp} className="space-y-4">
                    <h2 className="text-3xl font-bold mb-4 flex items-center">
                        <Heart className="mr-2" /> Passions and Interests
                    </h2>
                    <p className="text-lg">
                        When I'm not immersed in code, you can find me engaged in various activities that fuel my creativity and
                        keep me balanced:
                    </p>
                    <ul className="list-disc list-inside text-lg ml-4">
                        <li>Contributing to open-source projects and giving back to the developer community</li>
                        <li>Writing technical blog posts to share knowledge and insights</li>
                        <li>Mentoring aspiring developers and participating in coding bootcamps</li>
                        <li>Exploring nature through hiking and landscape photography</li>
                        <li>Practicing mindfulness and yoga to maintain work-life balance</li>
                    </ul>
                    <p className="text-lg">
                        I believe that these diverse interests not only make me a well-rounded individual but also contribute to
                        my problem-solving skills and creativity in software development.
                    </p>
                </motion.section>

                <motion.div variants={fadeInUp} className="text-center">
                    <p className="text-lg mb-4">
                        I'm always open to new opportunities and collaborations. If you'd like to work together or just have a
                        chat about technology, feel free to reach out!
                    </p>
                    <Button asChild>
                        <Link href="/contact">
                            Get in Touch <ArrowRight className="ml-2" size={16} />
                        </Link>
                    </Button>
                </motion.div>
            </motion.div>

            {/* Timeline Section */}
            <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">My Journey</h2>
                <div className="space-y-6">
                    {timeline.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-4 rounded-lg shadow-md"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <p className="font-bold">{item.year}</p>
                            <p>{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

