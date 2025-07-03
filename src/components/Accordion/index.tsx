"use client";

import { useState } from "react";

import AccordionItem from "./AccordionItem";

export type TAccordion = {
  title: string;
  icon?: React.ReactNode;
  location?: string;
  dateRange: string;
  content: React.ReactNode;
};

type Props = {
  accordions: TAccordion[];
};

export default function Accordion({ accordions }: Props) {
  const [selected, setSelected] = useState("");
  return (
    <ul className=" space-y-2">
      {accordions.map((item, index) => (
        <AccordionItem
          data={item}
          key={index}
          active={item.title === selected}
          onSelect={(title) => setSelected(title)}
        />
      ))}
    </ul>
  );
}
