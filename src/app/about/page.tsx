"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import PageWrapper from "@/components/PageWrapper";
import EducationList from "./_components/EducationList";
import { education } from "./_data/educations";
import { companies } from "./_data/companies";
import Accordion from "@/components/Accordion";
import Image from "next/image";
import { fadeDown, fadeRight, heroStaggerContainer } from "@/animation/general";
import { motion } from "framer-motion";

function page() {
  return (
    <PageWrapper position={"center"} width="narrow">
      <motion.div
        variants={heroStaggerContainer}
        initial="from"
        animate="to"
        className=" flex gap-10 mt-10 flex-wrap justify-center"
      >
        <article className="w-full md:w-3/12 flex flex-col items-center">
          <motion.div variants={fadeDown}>
            <Image
              src="/images/black-cat-lying.jpg"
              alt={"me"}
              width={200}
              height={200}
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
        <motion.article
          variants={fadeRight}
          className=" gap-5 flex-1 flex flex-col items-center"
        >
          <p>
            I&apos;m Jomari Tiu, a passionate Frontend Developer with over four
            years of experience in the software development industry. My
            expertise lies in building high-quality, scalable, and user-friendly
            web and mobile applications using technologies like Next.js,
            React.js, TypeScript, JavaScript, Tailwind CSS, and Expo React
            Native.
          </p>
          <p>
            While my primary focus is frontend development, I also have hands-on
            experience as a Junior Backend Developer, working with Express.js,
            NestJS, PostgreSQL, Drizzle, and Prisma to design and maintain
            efficient server-side systems. I enjoy bridging the gap between
            design and functionality to create seamless user experiences.
          </p>
          <p>
            In addition to web and app development, I&apos;ve also built
            automation systems, such as Telegram bots, that improve workflows
            and save time for both users and businesses.
          </p>
          <p>
            Outside of work, I&apos;m someone who believes in continuous growth
            — whether it&apos;s improving my programming skills, working out,
            playing games, riding motorcycles, or building model kits. These
            hobbies help me stay creative, disciplined, and motivated in
            everything I do.
          </p>
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
        </motion.article>
      </motion.div>
    </PageWrapper>
  );
}

export default page;
