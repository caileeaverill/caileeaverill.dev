export type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  label: string;
  coverImage: string;
  summary: string;
  projectBody: string[];
  role?: string;
  year?: string;
  stack?: string[];
  goals?: string[];
  tools?: string[];
  architecture?: string;
  links?: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "hpe",
    title: "Hewlett Packard Enterprise",
    label: "Production",
    coverImage: "/project-screenshots/hpe.png",
    summary:
      "Built the front-end for HPE’s Juniper Elevate community platform, translating the new brand system into scalable production UI.",
    projectBody: [
      "Partnered with design and product to ship a community experience aligned with HPE’s refreshed visual language, with reusable layout and component patterns for ongoing releases.",
      "Focused on performance, accessibility, and maintainability so marketing and community teams could iterate without rework.",
    ],
    role: "Front-end development",
    year: "2026",
    stack: ["React", "TypeScript", "Design systems"],
  },
  {
    slug: "school-project",
    title: "School Project",
    label: "Academic",
    coverImage:
      "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    summary:
      "Coursework exploring full-stack patterns, data modeling, and clear UX for a scoped academic brief.",
    projectBody: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
    role: "Student / lead developer",
    year: "2023",
    stack: ["Next.js", "PostgreSQL"],
  },
  {
    slug: "self-hosting-with-nextjs-with-raspberry-pi",
    title: "Self-hosting a Next.js portfolio on a Raspberry Pi",
    label: "Personal",
    coverImage:
      "/project-screenshots/self-hosting.png",
    summary:
      "I used a spare Raspberry Pi to self-host my Next.js portfolio, learning more about NGINX, hosting, SSH, Linux and more.",
    projectBody: [
      "This project was focused on understanding how modern web applications operate in a real production environment without relying on managed cloud platforms. I set out to move beyond local development by deploying my personal Next.js portfolio on a Raspberry Pi, with the goal of gaining hands-on experience in server configuration, networking, and infrastructure.",

      "I began by setting up the application on the Raspberry Pi, installing dependencies and creating a production build. Once the app was running locally on port 3000, I configured NGINX as a reverse proxy to handle incoming traffic on port 80 and route requests to the Node.js server. This helped me understand how web servers manage request flow and how different layers of an application communicate in a production setup.",

      "To ensure reliability, I implemented PM2 as a process manager so the application could run continuously, restart automatically if it failed, and persist across system reboots. This introduced me to process management and maintaining uptime in a server environment.",

      "I then configured my home network to expose the application to the public internet. This involved setting up port forwarding on my router and working with both local and public IP addresses, giving me practical experience with networking concepts such as routing, ports, and how external requests reach a locally hosted server.",

      "Throughout the deployment, I encountered and resolved issues such as 502 Bad Gateway errors caused by inactive services, differences between development and production environments, and challenges with process management. Debugging these problems reinforced how each layer of the stack depends on the others.",

      "By the end of the project, I had implemented a complete request flow from client to server — from the internet, through the router and NGINX, to the application running on the Raspberry Pi. This project gave me a much deeper understanding of full-stack deployment, infrastructure, and networking in a real-world context."
    ],
    role: "Full-Stack Developer & System Administrator",
    year: "2026",
    stack: [
      "Next.js (React)",
      "Node.js",
      "Linux (Raspberry Pi OS / Debian-based)",
      "NGINX",
      "TCP/IP Networking",
      "HTTP/HTTPS"
    ],
    tools: [
      "PM2",
      "Terminus (SSH client)",
      "Git + GitHub",
      "Ubuntu Server",
      "Certbot (Let's Encrypt)",
      "UFW (Firewall)"
    ],
    architecture: "Client → Internet → Router (Port Forwarding) → NGINX (Reverse Proxy :80) → Next.js App (Node.js :3000) → Raspberry Pi"
  },
];

const bySlug = new Map(projects.map((p) => [p.slug, p]));

export function getProjectBySlug(slug: string): Project | undefined {
  return bySlug.get(slug);
}

