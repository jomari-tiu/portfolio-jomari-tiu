import { CardType } from "@/data/ProjectList";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  data: CardType;
  priority?: boolean;
};

const MiniCard = ({ data, priority = false }: Props) => {
  return (
    <Link href={`/projects/${encodeURIComponent(data.title)}`}>
      <div className="w-80 border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-primary">
        <figure className="relative w-full aspect-[2/1]">
          <Image
            src={data.thumbnail}
            fill
            alt={data.title}
            sizes="(max-width: 768px) 50vw, 25vw"
            priority={priority}
          />
        </figure>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-accent">
            {data.title}
          </h5>
          {data.organization && (
            <div className="mb-3 font-normal text-gray-400">
              {data.organization}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default MiniCard;
