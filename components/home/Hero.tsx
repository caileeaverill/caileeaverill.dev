"use client";


import { motion } from "motion/react";

export default function HomeHero() {
  return (
    <div className="min-h-screen relative mx-auto flex max-w-7xl flex-col items-center justify-center">
      
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-3xl font-bold text-black md:text-4xl lg:text-7xl dark:text-white">
          {"Hello. My name is Cailee."
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 0.9,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-300"
        >
          Front-end software developer. 6 years in. I build things for the web and try not to break them. Welcome to my portfolio.
        </motion.p>
      </div>
    </div>
  );
}