import { motion } from 'framer-motion'
import React from 'react'

const quote = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08
        }
    }
}
const singleWord = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        }
    }
}

interface AnimatedTextProps {
    text: string;
    className?: string;
}

const AnimatedText = ({ text, className = "" }: AnimatedTextProps) => {
    return (
        <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0'>
            <motion.h1
                className={`${className} inline-block w-full text-dark font-bold capitalize text-6xl dark:text-light`}
                variants={quote}
                initial="initial"
                animate="animate"
            >
                {
                    text.split(" ").map((word, index) =>
                        <motion.span
                            key={word + '-' + index}
                            className=' inline-block'
                            variants={singleWord}
                        >
                            {word}&nbsp;
                        </motion.span>
                    )
                }
            </motion.h1>
        </div>
    )
}

export default AnimatedText