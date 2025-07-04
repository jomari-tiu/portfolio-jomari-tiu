import { AnimatePresence, motion } from "framer-motion";
import type { TAccordion } from ".";
import AutoHeightWrapper from "@/animation/AutoHeightWrapper";
import { fadeDown, fadeRight, fadeUp } from "@/animation/general";

type Props = {
  data: TAccordion;
  active: boolean;
  onSelect: (title: string) => void;
};

export default function AccordionItem({ data, active, onSelect }: Props) {
  return (
    <li>
      <div
        onClick={() => (active ? onSelect("") : onSelect(data.title))}
        className=" p-2 flex gap-2 items-center bg-[#3f3f3f] text-white cursor-pointer "
      >
        {data.icon}
        {data.title}
      </div>
      <AutoHeightWrapper show={active}>
        <div className=" pt-5">
          <div className="flex gap-2 mb-2 items-center">
            {data.location && (
              <motion.p
                variants={fadeRight}
                initial="from"
                animate="to"
                className="font-bold"
              >
                {data.location}
              </motion.p>
            )}
            <motion.p variants={fadeRight} initial="from" animate="to">
              {data.dateRange}
            </motion.p>
          </div>
          <motion.div variants={fadeDown} initial="from" animate="to">
            {data.content}
          </motion.div>
        </div>
      </AutoHeightWrapper>
    </li>
  );
}
