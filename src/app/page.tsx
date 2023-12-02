"use client";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import Button from "@/components/Button";
import Card from "@/components/Card";
import PageWrapper from "@/components/PageWrapper";
import { ProjectList_LWS } from "@/data/ProjectList";

export default function Home() {
  return (
    <PageWrapper width="narrow" position="left">
      <div className="py-[5rem] space-y-5">
        <h3 className=" lg:text-[5rem] md:text-[3rem] text-[2.5rem] leading-[95%] text-secondary">
          Hi, I&apos;m Jomari
        </h3>
        <h1 className=" lg:text-[5rem] md:text-[3rem] text-[2.5rem] leading-[95%]">
          Welcome to my Website
        </h1>
        <h1 className=" lg:text-[7rem] md:text-[5rem] text-[rem] leading-[95%]">
          {"<Front-Engineer/>"}
        </h1>
        <div className=" mt-8">
          <Button>Download CV</Button>
        </div>
      </div>

      <section className=" mt-10">
        <aside>
          <p className=" text-customRed tracking-wider font-bold">RECENT</p>
          <aside className=" flex justify-between items-center">
            <p className=" inline-block mb-5 font-thin text-[5vw] tracking-widest text-secondary">
              Projects
            </p>
            <Link
              href="/projects"
              className=" flex items-center gap-3 text-xl text-secondary group "
            >
              More{" "}
              <BsArrowRight className="text-2xl group-hover:text-customRed" />
            </Link>
          </aside>
        </aside>
        <ul className=" grid grid-cols-1 md:grid-cols-3 gap-10">
          {ProjectList_LWS.map((item, indx) => (
            <li key={indx}>
              <Card item={item} />
            </li>
          ))}
        </ul>
      </section>
    </PageWrapper>
  );
}
