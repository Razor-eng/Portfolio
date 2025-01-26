import React from "react";
import { LucideGraduationCap } from "lucide-react";
import { CgWorkAlt } from "react-icons/cg";
import { FaBriefcase, FaCode, FaLaptopCode } from "react-icons/fa";

export const experiencesData = [
    {
        title: "Completed My Graduation",
        location: "Remote",
        description: "I successfully completed my graduation, marking the beginning of my professional journey.",
        icon: React.createElement(LucideGraduationCap),
        date: "2022",
    },
    {
        title: "Began as a Frontend Developer",
        location: "Remote",
        description: "I started my professional journey as a frontend developer, working on web-based projects.",
        icon: React.createElement(CgWorkAlt),
        date: "2023",
    },
    {
        title: "Completed Full-Stack Java Developer Course",
        location: "Remote",
        description: "I successfully completed a comprehensive Full-Stack Java Developer course, enhancing my backend and full-stack expertise.",
        icon: React.createElement(FaCode),
        date: "2024",
    },
    {
        title: "Started Internship as a Full-Stack Developer",
        location: "Remote",
        description: "I began a 6-month internship to gain hands-on experience working on full-stack development projects.",
        icon: React.createElement(FaLaptopCode),
        date: "2024",
    },
    {
        title: "Started Freelancing as a Full-Stack Developer",
        location: "Remote",
        description: "After completing my internship, I worked as a freelancer for 4 months, delivering full-stack projects to various clients.",
        icon: React.createElement(FaBriefcase),
        date: "2024",
    },
] as const;
