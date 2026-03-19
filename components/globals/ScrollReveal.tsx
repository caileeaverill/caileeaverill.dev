"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

/** Default scroll-into-view motion (fade + rise) */
export const scrollRevealMotion = {
  initial: { opacity: 0, y: 75 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 2.2, ease: [0.22, 1, 0.36, 1] as const },
} as const;

type ScrollRevealSectionProps = {
  children: React.ReactNode;
  className?: string;
} & Omit<HTMLMotionProps<"div">, "children" | "className">;

/** One block (e.g. a homepage section) — safe default classes, no flex-1 */
export function ScrollRevealSection({
  children,
  className,
  ...motionProps
}: ScrollRevealSectionProps) {
  return (
    <motion.div
      className={cn("w-full min-w-0", className)}
      {...scrollRevealMotion}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}

/**
 * Wraps all page content from the root layout.
 * Skips motion on `/` so homepage can use per-section `ScrollRevealSection` without double animation.
 * Uses `w-full min-w-0` only (no flex-1) so parent `justify-center` / natural height still work.
 */

export function MainContentReveal({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) {
    return (
      <div key={pathname} className="w-full min-w-0">
        {children}
      </div>
    );
  }

  return (
    <motion.div
      key={pathname}
      className="w-full min-w-0"
      {...scrollRevealMotion}
    >
      {children}
    </motion.div>
  );
}
