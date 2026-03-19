"use client";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import { ScrollRevealSection } from "@/components/globals/ScrollReveal";

const page = () => {
  return (
    <div className="flex flex-col gap-16">
      <ScrollRevealSection>
        <Hero />
      </ScrollRevealSection>
      <ScrollRevealSection>
        <About />
      </ScrollRevealSection>
      <ScrollRevealSection>
        <FeaturedProjects />
      </ScrollRevealSection>
    </div>
  );
};

export default page;
