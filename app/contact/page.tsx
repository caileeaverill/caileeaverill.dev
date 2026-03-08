import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import {
  IconMailFilled,
  IconBrandLinkedinFilled,
  IconBrandGithubFilled,
} from "@tabler/icons-react";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <LayoutTextFlip
        text="Open to"
        words={[
          "Full Stack Developer",
          "Backend Developer",
          "Application Developer",
          "Developer Tools Engineer",
          "DevOps Engineer",
        ]}
        suffix="roles."
        duration={1500}
      />
      <p className="mt-4 max-w-3xl mx-auto text-center text-base text-neutral-600 dark:text-neutral-100">
        Based in Ontario, Canada. Open to remote or hybrid opportunities. Driven
        by building impactful software and growing across the engineering stack.
      </p>
      <div className="flex items-center justify-center gap-4 mt-4">
        {contactMethods.map((method) => (
          <Link href={method.href} key={method.title} className="hover:opacity-80 transition-opacity duration-300">
            {method.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

const contactMethods = [
  {
    title: "Email",
    icon: <IconMailFilled />,
    href: "mailto:caileeaverill@gmail.com",
  },
  {
    title: "LinkedIn",
    icon: <IconBrandLinkedinFilled />,
    href: "https://www.linkedin.com/in/cailee-averill/",
  },
  {
    title: "GitHub",
    icon: <IconBrandGithubFilled />,
    href: "https://github.com/caileeaverill",
  },
];

export default Contact;
