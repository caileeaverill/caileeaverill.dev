import { FocusCards } from "@/components/ui/focus-cards";
import { projects } from "@/lib/projects";

const FeaturedProjects = () => {
  const cards = projects.map((p) => ({
    title: p.title,
    src: p.coverImage,
    label: p.label,
    href: `/projects/${p.slug}`,
    description: p.summary,
  }));
  return (
    <section>
      <h1 className="text-3xl font-bold mb-1.5">Featured Projects</h1>
      <p className="mb-6 text-neutral-600 dark:text-neutral-100">Not just “Hello World.” A curated selection of recent builds spanning production work, academic projects, and personal experiments.</p>
      <FocusCards cards={cards} />
    </section>
  );
};

export default FeaturedProjects;
