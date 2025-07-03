"use client";
import { saveAs } from "file-saver";
import { motion } from "framer-motion";
import Link from "next/link";

import { BsArrowRight } from "react-icons/bs";

import { fadeRight, heroStaggerContainer } from "@/animation/general";
import Button from "@/components/Button";
import Card from "@/components/Card";
import PageWrapper from "@/components/PageWrapper";
import { ProjectList_LWS } from "@/data/ProjectList";
import Photogroup from "@/components/Photogroup";

export default function Home() {
  return (
    <PageWrapper width="narrow" position="left">
      <motion.div
        variants={heroStaggerContainer}
        initial="from"
        animate="to"
        className="py-[5rem] space-y-5 "
      >
        <motion.h3
          variants={fadeRight}
          drag
          dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }}
          className=" lg:text-[5rem] md:text-[3rem] text-[2.5rem] leading-[95%] text-secondary"
        >
          Hi, I&apos;m Jomari
        </motion.h3>
        <motion.h1
          variants={fadeRight}
          drag
          dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }}
          className=" lg:text-[5rem] md:text-[3rem] text-[2.5rem] leading-[95%]"
        >
          Welcome to my Website
        </motion.h1>
        <motion.h1
          variants={fadeRight}
          drag
          dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }}
          className=" lg:text-[7rem] md:text-[5rem] text-[4rem] leading-[95%]"
        >
          {"<Front-Engineer/>"}
        </motion.h1>
        <div className=" mt-8">
          <Button
            onClick={() => {
              saveAs(
                "/images/Jomari-Tiu-Front-End-Developer-Resume-2025",
                "Jomari-Tiu-Front-End-Developer-Resume-2025.pdf"
              );
            }}
          >
            Download CV
          </Button>
        </div>
      </motion.div>

      <section className=" mt-10 ">
        <p className=" text-customRed tracking-wider font-bold">RECENT</p>
        <aside className=" flex justify-between items-center relative z-10">
          <p className=" inline-block mb-5 font-thin text-[5vw] tracking-widest text-secondary">
            Projects
          </p>
          <Link
            href="/projects"
            className=" flex items-center gap-3 text-xl text-secondary hover:text-customRed duration-150 font-bold"
          >
            More <BsArrowRight className="text-2xl " />
          </Link>
        </aside>

        <Photogroup />
      </section>
    </PageWrapper>
  );
}
