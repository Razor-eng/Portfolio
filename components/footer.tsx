"use client";

import { GithubIcon, LinkedInIcon } from "@/data/icons";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const path = usePathname();

    return (
        <footer className={cn(
            "w-full",
            path !== "/" && "bg-gradient-to-r from-primary/0 via-primary/5 to-primary/20"
        )}>
            <div className="py-4 px-2 sm:px-16 flex space-y-0 sm:gap-4 items-center justify-between">
                <p className="text-base text-neutral-600">
                    <span className="text-neutral-400">© {currentYear} /</span>
                    <span className="px-1">{"Rajat Kumar Maharana"}</span>
                    {/* <span className="text-neutral-400">
                        /{" "}
                        <a
                            href="mailto:mrajat00@gmail.com"
                            className="text-indigo-600"
                            style={{ marginLeft: "-0.125rem" }}
                        >
                            Connect with me
                        </a>
                    </span> */}
                </p>
                <div className="flex sm:gap-4">
                    <motion.a href="https://github.com/razor-eng" target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-5 sm:w-6 mx-2'
                    >
                        <GithubIcon />
                    </motion.a>
                    <motion.a href="https://www.linkedin.com/in/rajat-kumar-maharana" target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-5 sm:w-6 mx-2'
                    >
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a href="mailto:mrajat00@gmail.com" target={'_blank'}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-5 sm:w-6 mx-2'
                    >
                        <Image priority height={500} width={500} className="size-full" src={'/svgs/gmail.svg'} alt="mail" />
                    </motion.a>
                </div>
            </div>
        </footer>
    );
};