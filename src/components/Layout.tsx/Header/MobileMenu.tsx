import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaSlackHash } from "react-icons/fa";

type props = {
  setShowMenu: Function;
  menu: {
    title: string;
    url: string;
  }[];
};

const MobileMenu = ({ setShowMenu, menu }: props) => {
  const pathname = usePathname();
  return (
    <ul className="md:hidden flex flex-col justify-center fixed bottom-0 w-full h-screen bg-primary left-0 text-white">
      <li className=" absolute top-5 right-5">
        <AiOutlineCloseCircle
          className=" text-[2rem] text-white"
          onClick={() => setShowMenu(false)}
        />
      </li>
      {menu.map((item: any, index: number) => (
        <li key={index}>
          <Link
            href={item.url}
            className={` flex items-center  p-5  text-[2rem] ${
              pathname.includes(item.url) && " bg-white text-customRed"
            }`}
          >
            <FaSlackHash className="mr-1" />
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MobileMenu;
