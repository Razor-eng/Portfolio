"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useScroll, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/data/experienceData";
import { useTheme } from "next-themes";
import TransitionEffect from "@/components/transition-effect";
import AnimatedText from "@/components/animated-text";
import Image from "next/image";
import { technologies } from "@/data/technologies";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
    return (
        <>
            <TransitionEffect />
            <div className="container mx-auto px-6 lg:px-12">
                <AnimatedText
                    text="Passion Fuels Purpose!"
                    className='!text-left lg:!text-5xl xl:!text-center md:!text-6xl sm:!text-5xl !text-3xl pr-8' />
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { delayChildren: 0.3, staggerChildren: 0.2, duration: 0.8 },
                        },
                    }}
                    className="space-y-20"
                >
                    <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="space-y-6 mt-10">
                        <div className='grid w-full grid-cols-8 sm:gap-16 gap-8'>
                            <div className='xl:col-span-3 flex flex-col items-start justify-start md:col-span-4 order-2 md:order-1 col-span-8'>
                                <h2 className='mb-4 text-lg font-bold uppercase text-black/75 dark:text-white/75'>Biography</h2>
                                <p className='font-medium'>
                                    Hi, {`I'm`} Rajat, a passionate and highly skilled Software Developer with a {`Bachelor's`} degree in Technology (B.Tech) in Computer Science, specializing in full-stack development. With over 3 years of experience, expertise spans across front-end and back-end technologies, including Java, React, TailwindCSS, MySQL, Next.js, and Vue.js.
                                </p>
                                <p className='font-medium my-4'>
                                    Having worked as a freelancer on platforms like Fiverr and Freelancer, have successfully delivered a wide range of projects, from creating responsive UIs with React and TailwindCSS to developing robust back-end solutions using Java and MySQL. Known for writing clean, scalable code and meeting client requirements with precision.
                                </p>
                                <p className='font-medium'>
                                    Focused on problem-solving, performance, and scalability, thrive in fast-paced environments, continuously exploring new technologies to stay ahead in the software development field.
                                </p>
                            </div>

                            <div className='xl:col-span-3 relative h-max rounded-2xl border-2 border-solid bg-white p-8 dark:bg-[#101010] md:col-span-4 md:order-1 order-2 col-span-8'>
                                <Image
                                    src="/dev.png"
                                    alt="Rajat"
                                    width={500}
                                    height={500}
                                    className="w-full lg:w-full md:inline-block md:w-full"
                                    priority
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="/placeholder.svg"
                                />
                            </div>

                            <div className='xl:col-span-2 flex xl:flex-col xl:items-end justify-between col-span-8 flex-row items-center order-3'>
                                <div className='flex flex-col xl:items-end justify-center items-center'>
                                    <span className='inline-block md:text-7xl font-semibold sm:text-6xl xs:text-5xl text-4xl'>
                                        <AnimatedNumbers value={10} />+
                                    </span>
                                    <h2 className='md:text-xl font-medium capitalize text-black/75 dark:text-white/75 xl:text-center sm:text-lg xs:text-base text-sm'>satisfied clients</h2>
                                </div>
                                <div className='flex flex-col xl:items-end justify-center items-center'>
                                    <span className='inline-block md:text-7xl font-semibold sm:text-6xl xs:text-5xl text-4xl'>
                                        <AnimatedNumbers value={40} />+
                                    </span>
                                    <h2 className='md:text-xl font-medium capitalize text-black/75 dark:text-white/75 xl:text-center sm:text-lg xs:text-base text-sm'>projects completed</h2>
                                </div>
                                <div className='flex flex-col xl:items-end justify-center items-center'>
                                    <span className='inline-block md:text-7xl font-semibold sm:text-6xl xs:text-5xl text-4xl'>
                                        <AnimatedNumbers value={4} />+
                                    </span>
                                    <h2 className='md:text-xl font-medium capitalize text-black/75 dark:text-white/75 xl:text-center sm:text-lg xs:text-base text-sm'>years of experience</h2>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <Education />

                    <Skills />
                </motion.div>

                <Experience />

                <motion.div
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
                    className="text-center mt-16"
                >
                    <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                        I'm always open to new opportunities and collaborations. If you'd like to work together or chat
                        about technology, feel free to reach out!
                    </p>
                    <Button
                        asChild
                        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg shadow-lg"
                    >
                        <Link href="/contact">
                            Get in Touch <ArrowRight className="ml-2" size={16} />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </>
    );
}

function Experience() {
    const { theme } = useTheme();

    return (
        <motion.section
            className="my-28"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">My Experience</h2>
            <VerticalTimeline lineColor={theme === "light" ? "#E5E7EB" : "#374151"}>
                {experiencesData.map((item, index) => (
                    <VerticalTimelineElement
                        key={index}
                        visible={true}
                        contentStyle={{
                            background: theme === "light" ? "#F9FAFB" : "#1F2937",
                            borderRadius: "0.5rem",
                            padding: "1.5rem",
                        }}
                        contentArrowStyle={{
                            borderRight:
                                theme === "light"
                                    ? "0.4rem solid #9ca3af"
                                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
                        }}
                        date={item.date}
                        icon={item.icon}
                        iconStyle={{
                            background: theme === "light" ? "#FFFFFF" : "#4B5563",
                            color: theme === "light" ? "#1F2937" : "#F9FAFB",
                        }}
                    >
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeIn}
                        >
                            <h3 className="font-semibold text-lg capitalize">{item.title}</h3>
                            <p className="font-normal text-zinc-500 text-sm !mt-0">{item.location}</p>
                            <p className="!mt-3 !font-normal text-gray-700 dark:text-white/75">
                                {item.description}
                            </p>
                        </motion.div>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </motion.section>
    );
}

const AnimatedNumbers = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement>(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on('change', (latest) => {
            if (ref.current && Number(latest.toFixed(0)) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })

    }, [springValue, value]);

    return <span ref={ref}></span>
}


interface DetailsProps {
    type: string;
    time: string;
    place: string;
    info: string;
    score: string;
}

const Details = ({ type, time, place, info, score }: DetailsProps) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 md:w-[60%] mx-auto flex flex-col justify-between w-[80%]'>
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <motion.div
                    className="p-4 sm:p-6 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                        {type}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        <span>{place}</span>
                    </p>
                    <span className="flex items-center space-x-1 text-sm mb-3">
                        <Calendar size={16} className="text-gray-500 dark:text-gray-300" />
                        &nbsp;{time}
                    </span>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-base text-gray-700 dark:text-gray-300 mb-3 leading-relaxed"
                    >
                        {info}
                    </motion.p>
                    <div className="flex items-center space-x-2 mt-3">
                        <div className="relative w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                            <div
                                className="absolute h-2 rounded-full bg-teal-500"
                                style={{ width: `${score}` }} // Adjust dynamically based on the score
                            ></div>
                        </div>
                        <span className="text-xs font-medium text-gray-800 dark:text-gray-200">
                            {score}
                        </span>
                    </div>
                </motion.div>
            </motion.div>
        </li>
    )
}

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
        layoutEffect: false
    });

    return (
        <motion.section
            className="my-28"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">My Experience</h2>

            <div ref={ref} className='lg:w-[75%] mx-auto relative md:w-[90%] w-full'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute top-0 md:w-[4px] h-full bg-black origin-top dark:bg-white w-[2px] md:left-[30px] left-[20px]'
                />
                <ul className='w-full flex flex-col items-center md:items-start justify-between ml-4 xs:ml-2'>
                    <Details
                        type="Bachelor Of Technology In Computer Science"
                        time="2018-2022"
                        place="National Institute of Science and Technology (NIST)"
                        info="Relevant courses included Data Structures and Algorithms, Computer Networks, Operating System and Java."
                        score="82%"
                    />
                    <Details
                        type="Higher Secondary"
                        time="2016-2018"
                        place="Centurion Public School (CPS)"
                        info="Relevant subjects included Maths, Physics, Chemistry, and Computer."
                        score="75%"
                    />
                    <Details
                        type="Secondary School"
                        time="2015-2016"
                        place="Centurion Public School (CPS)"
                        info="Relevant subjects included Maths, Science, Social, English and Hindi."
                        score="86%"
                    />
                </ul>
            </div>
        </motion.section>
    )
}

const LiIcon = ({ reference }: { reference: React.RefObject<HTMLLIElement> }) => {
    const { scrollYProgress } = useScroll({
        target: reference,
        offset: ["center end", "center center"]
    });
    return (
        <figure className='absolute left-0 stroke-black dark:stroke-white'>
            <svg className='-rotate-90 md:w-[60px] md:h-[60px] w-[40px] h-[40px]' width="75" height="75" viewBox='0 0 100 100'>
                <circle cx="75" cy="50" r="20" className='stroke-rose-400 dark:stroke-primary stroke-1 fill-none' />
                <motion.circle cx="75" cy="50" r="20" className='stroke-[5px] fill-white dark:fill-black'
                    style={{
                        pathLength: scrollYProgress
                    }}
                />
                <circle cx="75" cy="50" r="10" className='animate-pulse stroke-1 fill-rose-400 dark:fill-primary ' />
            </svg>
        </figure>
    )
}

function Skills() {
    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.05 * index,
            },
        }),
    };
    const skillsData = Object.values(technologies).flat();

    return (
        <motion.section
            className="my-28"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">My Skills</h2>
            <div className="w-full flex justify-center">
                <motion.ul
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.05,
                            },
                        },
                    }}
                    className="max-w-[53rem] flex flex-wrap justify-center gap-2 text-lg text-gray-800"
                >
                    {skillsData.map((skill, index) => (
                        <motion.li
                            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 flex items-center justify-center space-x-2"
                            key={index}
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            custom={index}
                        >
                            <Image
                                src={skill.icon}
                                alt={skill.name}
                                width={24}
                                height={24}
                                className="w-full h-full"
                                priority
                            />
                            <span>{skill.name}</span>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </motion.section>
    );
}