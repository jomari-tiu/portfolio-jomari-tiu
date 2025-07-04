import { CardType } from "@/data/ProjectList";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  data: CardType;
};

const MiniCard = ({ data }: Props) => {
  return (
    <Link href={`/projects?name=${data.title}`}>
      <div className="w-80 border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-primary">
        <figure className="relative w-full aspect-[2/1]">
          <Image src={data.thumbnail} fill alt="" />
        </figure>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              {data.title}
            </h5>
          </a>
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
