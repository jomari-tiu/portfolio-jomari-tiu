import React from "react";
import Image from "next/image";

import Link from "next/link";

import { CardType } from "@/data/ProjectList";

const Card = ({ item }: { item: CardType }) => {
  return (
    <Link href={`/projects?name=${item.title}`} className="group">
      <div className=" relative w-full aspect-[1/1.5] ">
        <aside className=" h-full w-full absolute left-0 top-0">
          <Image
            alt="project"
            fill
            src={`${item.thumbnail}`}
            className=" object-cover object-top"
          />
          <div className=" bg-[#fdfdfdc2] group-hover:bg-[#6b6b6bc2] group-hover:text-white duration-150 absolute left-0 top-0 w-full h-full px-3 flex flex-col items-center justify-center text-center space-y-3 ">
            <h4 className=" font-bold tracking-wider">{item.organization}</h4>
            <h3 className="tracking-widest capitalize">{item.title}</h3>
            <h4 className=" tracking-widest font-medium line-clamp-2">
              {item.description}
            </h4>
            <div className=" w-[4rem] h-[5px] bg-customRed rounded-2xl"></div>
          </div>
        </aside>
      </div>
    </Link>
  );
};

export default Card;
