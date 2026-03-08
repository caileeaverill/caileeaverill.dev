"use client";


import { CodeBlock } from "@/components/ui/code-block";
import Image from "next/image";

const code = `{
 "name": "Cailee Averill",
 "location": "London, Ontario, Canada (UTC-05:00)",
 "areasOfExpertise": [
  "Frontend Application Development",
  "Next.js / React / TypeScript Ecosystem",
  "Component-Driven UI Architecture",
  "Performance, Accessibility & Responsive Design",
  "REST API Development (Node.js)"
],
 "learning": [
  "Data Structures & Algorithms",
  "Object-Oriented Systems Programming",
  "Software Design Patterns & Architecture",
],
 "fun": {
  "dogOwner": true,
  "favMovie": "Ex Machina (2014)",
  "likesPineappleOnPizza": true
 }
}`;

const About = () => {
    return (
        <section className="flex flex-col items-center gap-6 md:flex-row">
            <div className="max-w-2xl">
                <h1 className="text-3xl font-bold mb-1.5">About me</h1>
                <p className="mb-6 text-neutral-600 dark:text-neutral-100">
                    I build modern web applications with React and TypeScript, focusing on performance, accessibility, and scalable UI architecture.
                    I&apos;m now expanding into full-stack and software engineering through backend development, data structures, and systems programming.
                </p>
            </div>
            <CodeBlock
                language="json"
                filename="about.json"
                code={code}
            />
            <Image src="/mobile/json_mobile.png" alt="About" width={500} height={500} className="rounded-sm block md:hidden" />
        </section>
    )
}

export default About