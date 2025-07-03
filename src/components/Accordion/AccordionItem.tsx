import type { TAccordion } from ".";

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
      {active && (
        <article className=" p-2 over">
          <div className=" flex gap-2 mb-2 items-center">
            {data.location && <p className=" font-bold">{data.location}</p>}
            <p>{data.dateRange}</p>
          </div>
          {data.content}
        </article>
      )}
    </li>
  );
}
