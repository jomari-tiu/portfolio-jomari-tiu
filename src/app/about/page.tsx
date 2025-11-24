"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import PageWrapper from "@/components/PageWrapper";
import EducationList from "./_components/EducationList";
import { education } from "./_data/educations";
import { companies } from "./_data/companies";
import Accordion from "@/components/Accordion";
import Image from "next/image";
import { fadeDown, fadeRight, heroStaggerContainer } from "@/animation/general";
import { motion } from "framer-motion";
import { about } from "./_data/about";

function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <PageWrapper position={"center"} width="narrow">
      <motion.div
        variants={heroStaggerContainer}
        initial="from"
        animate="to"
        className=" flex mt-10 flex-wrap justify-center"
      >
        <article className="w-6/12 sm:w-5/12 md:w-4/12 lg:w-3/12 flex flex-col items-center mb-5">
          <motion.div variants={fadeDown}>
            <Image
              src="/images/black-cat-lying.jpg"
              alt={"me"}
              width={100}
              height={100}
            />
          </motion.div>
          <motion.p
            variants={fadeRight}
            className=" text-center mb-2 text-2xl "
          >
            ABOUT&nbsp;ME
          </motion.p>
          <img src="/images/me.jpg" alt={"me"} />
        </article>

        <motion.div
          ref={containerRef}
          variants={fadeRight}
          className=" gap-5 flex-1 flex flex-col items-center pr-10 pl-10"
        >
          {about.map((item, index) => (
            <p key={index}>{item}</p>
          ))}

          <div>
            <p className=" mb-5">Educational Background.</p>
            {education.map((item, index) => (
              <EducationList
                data={item}
                key={index}
                last={index === education.length - 1}
              />
            ))}
          </div>
          <div className="w-full">
            <p className=" mb-5 text-2xl">Work.</p>
            <ul>
              <Accordion accordions={companies} />
            </ul>
          </div>
          <div></div>
        </motion.div>
      </motion.div>
    </PageWrapper>
  );
}

export default AboutPage;
