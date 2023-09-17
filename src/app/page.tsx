"use client";
import { motion } from "framer-motion";

import { FadeRight, StaggerContainer } from "@/components/Animation/Animation";
import LetterAnimation from "@/components/Animation/LetterAnimation";
import Button from "@/components/Button";
import Card from "@/components/Card";
import PageWrapper from "@/components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper className=" w-9/12" position="left">
      <motion.div
        variants={StaggerContainer}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className=" h-full flex flex-col justify-center border-2 border-primary p-24 pb-0 pr-0">
          <motion.h3
            variants={FadeRight}
            className=" text-[8vw] leading-[95%] text-secondary"
          >
            Hi,&nbsp;I'm&nbsp;Jomari
          </motion.h3>
          <motion.h1 variants={FadeRight} className=" text-[8vw] leading-[95%]">
            Welcom&nbsp;to&nbsp;my&nbsp;Website
          </motion.h1>
          <motion.h1 variants={FadeRight} className=" text-[8vw] leading-[95%]">
            {"<SoftwareEnginner/>"}
          </motion.h1>
        </div>
        <Button onClick={() => {}} inStagger={true}>
          Download CV
        </Button>
      </motion.div>
      <section className=" mt-10">
        <aside className=" items-end">
          <p className=" text-customRed tracking-wider font-bold">Featured</p>
          <LetterAnimation
            text="PROJECT"
            className=" font-bold border-b-2 border-customRed inline-block mb-5"
          />
        </aside>
        <Card />
      </section>
    </PageWrapper>
  );
}
