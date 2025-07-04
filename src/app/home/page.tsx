"use client";
import { saveAs } from "file-saver";
import { motion } from "framer-motion";
import Link from "next/link";

import { BsArrowRight } from "react-icons/bs";

import { fadeRight, fadeUp, heroStaggerContainer } from "@/animation/general";
import Button from "@/components/Button";
import PageWrapper from "@/components/PageWrapper";
import Photogroup from "@/components/Photogroup";

export default function Home() {
  const downloadHandler = async () => {
    const response = await fetch(
      "/images/Jomari-Tiu-Front-End-Developer-Resume-2025.pdf"
    );
    const blob = await response.blob();
    saveAs(blob, "Jomari-Tiu-Front-End-Developer-Resume-2025.pdf");
  };

  return (
    <PageWrapper width="narrow" position={"left"}>
      <motion.article
        variants={heroStaggerContainer}
        initial="from"
        animate="to"
        className="py-[5rem] space-y-5 "
      >
        <motion.h3
          variants={fadeRight}
          className=" lg:text-[5rem] md:text-[3rem] text-[2.5rem] leading-[95%] text-secondary"
        >
          Hi, I&apos;m Jomari
        </motion.h3>
        <motion.h1
          variants={fadeRight}
          className=" lg:text-[5rem] md:text-[3rem] text-[2.5rem] leading-[95%]"
        >
          Welcome to my Website
        </motion.h1>
        <motion.h1
          variants={fadeRight}
          drag
          dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }}
          className=" cursor-pointer lg:text-[7rem] md:text-[5rem] text-[4rem] leading-[95%]"
        >
          {"<Front-Engineer/>"}
        </motion.h1>
        <div className=" mt-8">
          <Button onClick={downloadHandler}>Download CV</Button>
        </div>
      </motion.article>

      <article className=" mt-10 ">
        <p className=" text-customRed tracking-wider font-bold">RECENT</p>
        <motion.aside
          variants={fadeRight}
          className=" flex justify-between items-center relative z-10"
        >
          <p className=" inline-block mb-5 font-thin text-[5vw] tracking-widest text-secondary">
            Projects
          </p>
          <Link
            href="/projects"
            className=" flex items-center gap-3 text-xl text-secondary hover:text-customRed duration-150 font-bold"
          >
            More <BsArrowRight className="text-2xl " />
          </Link>
        </motion.aside>

        <motion.div
          variants={fadeUp}
          drag
          dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }}
        >
          <Photogroup />
        </motion.div>
      </article>
    </PageWrapper>
  );
}
