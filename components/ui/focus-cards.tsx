"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: FocusCard;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => {
    const overlay = (
      <div
        className={cn(
          "absolute inset-0 bg-black/75 flex flex-col justify-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-lg md:text-2xl font-bold text-neutral-100 dark:text-neutral-100">
          {card.title}
        </div>
        {card.description && (
          <p className="mt-1 text-md text-white">
            {card.description}
          </p>
        )}
        <p className="mt-4 text-md text-white flex items-center gap-1">Learn More<ArrowRightIcon className="w-4 h-4" /></p>
      </div>
    );

    const wrapperClassName = cn(
      "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
      hovered !== null && hovered !== index && "blur-sm scale-[0.90]"
    );

    return (
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={wrapperClassName}
      >
        <img
          src={card.src}
          alt={card.title}
          className="object-cover absolute inset-0"
        />
        {card.label && (
          <div className="absolute top-4 right-4 z-20 flex items-center justify-center bg-gray-700/70 dark:text-neutral-100 rounded-full px-4 py-2 text-sm font-md pointer-events-none">
            {card.label}
          </div>
        )}
        {card.link ? (
          <a
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10"
            aria-label={card.title}
          >
            {overlay}
          </a>
        ) : (
          overlay
        )}
      </div>
    );
  }
);

Card.displayName = "Card";

export type FocusCard = {
  title: string;
  src: string;
  label?: string;
  link?: string;
  description?: string;
};

export function FocusCards({ cards }: { cards: FocusCard[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
