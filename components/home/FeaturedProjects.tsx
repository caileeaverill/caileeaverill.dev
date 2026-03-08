import { FocusCards } from "@/components/ui/focus-cards";

const FeaturedProjects = () => {
  const cards = [
    {
      title: "Hewlett Packard Enterprise",
      src: "/project-screenshots/hpe.png",
      label: "Production",
      link: "https://www.hpe.com/",
      description: "Built the front-end for HPE’s Juniper Elevate community platform, translating the new brand system into scalable production UI.",
    },
    {
      title: "School Project Goes Here",
      src: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      label: "Academic",
      link: "#",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Personal Project Goes Here",
      src: "https://images.unsplash.com/photo-1608306448197-e83633f1261c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      label: "Personal",
      link: "#",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <section>
      <h1 className="text-3xl font-bold mb-1.5">Featured Projects</h1>
      <p className="mb-6 text-neutral-600 dark:text-neutral-100">Not just “Hello World.” A curated selection of recent builds spanning production work, academic projects, and personal experiments.</p>
      <FocusCards cards={cards} />
    </section>
  );
};

export default FeaturedProjects;
