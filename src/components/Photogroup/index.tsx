import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";

const Photos: {
  url: string;
  pos: keyof typeof POSITIONS;
  name: string;
}[] = [
  {
    url: "/images/projects/cognizant/page-1.png",
    pos: "pos1",
    name: "Cognizant",
  },
  {
    url: "/images/projects/GirlScout/page-1.png",
    pos: "pos2",
    name: "Girl Scout of the Philippines",
  },
  {
    url: "/images/projects/hk-looking-ahead/hk.png",
    pos: "pos1",
    name: "Hong-Kong Looking Ahead",
  },
  {
    url: "/images/projects/kyndryl/page-1.png",
    pos: "pos3",
    name: "Kyndryl Project",
  },
  {
    url: "/images/projects/templates/temp5.png",
    pos: "pos2",
    name: "5 Templates",
  },
  {
    url: "/images/projects/forge-fitness/full-page.png",
    pos: "pos3",
    name: "Forge Fitness",
  },
];

const Photogroup = () => {
  return (
    <ul className=" relative justify-center flex flex-wrap overflow-hidden pt-[2%] -mt-20 md:-mt-48 ">
      {Photos.map((item) => (
        <PhotoCard
          key={item.url}
          pos={item.pos}
          src={item.url}
          name={item.name}
        />
      ))}
    </ul>
  );
};

const POSITIONS = {
  pos1: " translate-y-[50%] hover:translate-y-[20%] rotate-4 hover:-rotate-2",
  pos2: " translate-y-[60%] hover:-translate-y-[5%] -rotate-6 hover:-rotate-4 -ml-10",
  pos3: " translate-y-[30%] hover:translate-y-[0%] -rotate-4 hover:rotate-1 -ml-6",
} as const;

const PhotoCard = ({
  pos,
  src,
  name,
}: {
  pos: keyof typeof POSITIONS;
  src: string;
  name: string;
}) => {
  const router = useRouter();
  return (
    <li
      className={twMerge(
        "group cursor-pointer duration-150 ease-linear w-4/12 md:w-2/12 aspect-[1/2] shadow-2xl bg-white p-2 z-10 hover:z-20",
        POSITIONS[pos]
      )}
      onClick={() => router.push(`/projects?name=${name}`)}
    >
      <Image
        className=" duration-150 object-cover w-full h-full object-top grayscale group-hover:grayscale-0"
        src={src}
        fill
        alt=""
      />
    </li>
  );
};

export default Photogroup;
