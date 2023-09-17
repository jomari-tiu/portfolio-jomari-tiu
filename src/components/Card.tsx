import React from "react";
import Image from "next/image";

import { ProjectList_LWS, ProjectList_LWS_type } from "@/data/ProjectList";

export default function Card() {
  return (
    <ul className=" grid grid-cols-3 gap-4">
      {ProjectList_LWS.map((item, index) => (
        <CardItem key={index} item={item} />
      ))}
    </ul>
  );
}

const CardItem = ({ item }: { item: ProjectList_LWS_type }) => {
  return (
    <li className=" relative w-full aspect-[1/1.5] shadow-md">
      <aside className=" h-full w-full absolute left-0 top-0">
        <Image alt="project" fill src={`/images/projects/${item.ImageName}`} />
        <div className=" bg-[#fdfdfdc2] absolute left-0 top-0 w-full h-full flex flex-col items-center justify-center text-center space-y-3 uppercase ">
          <h3 className=" font-extrabold tracking-tighter">{item.title}</h3>
          <h4 className=" tracking-widest font-bold">{item.Description}</h4>
          <div className=" w-[4rem] h-[5px] bg-customRed rounded-2xl"></div>
        </div>
      </aside>
    </li>
  );
};
