import React from "react";
import Image from "next/image";

import { CardType } from "@/data/ProjectList";

import Button from "../Button";

const BigCard = ({ item }: { item: CardType }) => {
  return (
    <ul className=" grid grid-cols-5 ">
      <li className=" aspect-[2/1] col-span-2 relative">
        <Image
          alt="project"
          className=" object-cover"
          fill
          src={`/images/projects/${item.ImageName}`}
        />
      </li>
      <li className=" col-span-3 flex flex-col justify-between">
        <aside className=" p-5">
          <h3 className=" capitalize">{item.title}</h3>
          {/* <h4 className=" tracking-widest font-bold">{item.Description}</h4> */}
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            saepe quo dicta laboriosam sunt provident sequi illo deserunt iusto
            vel magnam optio natus velit repellendus ipsa, nobis exercitationem
            soluta cum.
          </p>
        </aside>
        <aside className=" flex w-full justify-end">
          <Button
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          >
            Demo
          </Button>
        </aside>
      </li>
    </ul>
  );
};

export default BigCard;
{
  /* <div className=" relative w-full aspect-[1/1.5] shadow-md">
<aside className=" h-full w-full absolute left-0 top-0">
  <Image alt="project" fill src={`/images/projects/${item.ImageName}`} />
  <div className=" bg-[#fdfdfdc2] absolute left-0 top-0 w-full h-full flex flex-col items-center justify-center text-center space-y-3 uppercase ">
    <h3 className=" font-extrabold tracking-tighter">{item.title}</h3>
    <h4 className=" tracking-widest font-bold">{item.Description}</h4>
    <div className=" w-[4rem] h-[5px] bg-customRed rounded-2xl"></div>
  </div>
</aside>
</div> */
}
