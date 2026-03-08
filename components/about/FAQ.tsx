import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export function FAQ() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="col-span-1 bg-slate-400/15 p-6 rounded-md flex-grow">
        <h1 className="text-3xl font-bold mb-1.5">FAQ</h1>
        {/* <p className="mb-6 text-neutral-600 dark:text-neutral-100">
          Technically this is a frequently asked questions section but no one
          has ever asked me these questions before. I want to be able to answer
          these with a little bit of fun and a little bit of truth.
        </p> */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        </p>
      </div>
      {/* <Accordion
        type="single"
        collapsible
        defaultValue="why-school"
        className="col-span-2"
      >
        <AccordionItem value="why-school">
          <AccordionTrigger>
            Why did you return to school after working in the field for over 6
            years?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              If you spend enough time on Reddit, you’ll learn that going back
              to school after years in the industry is considered a <i>very</i>{" "}
              controversial life choice.
            </p>
            <p>I did it anyway. Why? </p>
            <p>
              Because I wanted to. Because I made a promise to someone that I
              would always keep learning. Because you wouldn&apos;t be reading
              this if I didn&apos;t.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="end-goal">
          <AccordionTrigger>
            What is the end goal? What do you want to achieve?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              To keep learning, keep building, and hopefully write software that
              makes people&apos;s lives a little easier.
            </p>

            <p>
              Right now that means expanding beyond the frontend and
              understanding the systems behind modern applications — backend
              architecture, cloud infrastructure, machine learning systems, and
              the engineering that makes complex software possible.
            </p>

            <p>
              If I can keep doing meaningful work while constantly improving as
              an engineer, I&apos;d say that&apos;s a pretty good end goal.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="tech-stack">
          <AccordionTrigger>
            What technologies do you enjoy working with most?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              I love working with React. Specifically with Next.JS and Tailwind
              CSS. I also enjoy using Node.JS and MongoDB for backend development. These technologies are a joy to work with and I&apos;ve built a lot of my personal projects with them.
            </p>
            <p>
              Recently, I&apos;ve been using Java for academic purposes. I enjoy the challenge of learning a new language and I&apos;ve been able to apply my knowledge of Java to my personal projects.
            </p>
            <p>I&apos;ve also grown to love Python for its ease of use and readability. I&apos;ve used it for a variety of projects, from simple scripts to more complex applications.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="fun">
          <AccordionTrigger>
            I heard you have a dog? Can we see a picture?
          </AccordionTrigger>
          <AccordionContent>
            <p>This is Lexi. She is 8 years old. She was found in a dumpster in Mexico before I adopted her. She is the best girl and I love her very much.</p>
            <Image src="/images/lexi_pic.jpg" alt="Lexi" width={250} height={450} className="rounded-md object-cover" />
          </AccordionContent>
        </AccordionItem>
      </Accordion> */}
      <Accordion
      type="single"
      collapsible
      defaultValue="shipping"
      className="max-w-2xl"
    >
      <AccordionItem value="shipping">
        <AccordionTrigger>Lorem ipsum dolor sit amet?</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="returns">
        <AccordionTrigger>Consectetur adipiscing elit?</AccordionTrigger>
        <AccordionContent>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="support">
        <AccordionTrigger>Sed do eiusmod tempor incididunt?</AccordionTrigger>
        <AccordionContent>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
  );    
}
