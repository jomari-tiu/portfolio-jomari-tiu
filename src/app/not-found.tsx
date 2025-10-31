"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { BsArrowLeft } from "react-icons/bs";

import { fadeRight, fadeUp, heroStaggerContainer } from "@/animation/general";
import Button from "@/components/Button";
import PageWrapper from "@/components/PageWrapper";

export default function NotFound() {
  return (
    <PageWrapper width="narrow" position="center">
      <motion.div
        variants={heroStaggerContainer}
        initial="from"
        animate="to"
        className="text-center"
      >
        <motion.div
          variants={fadeUp}
          className="flex justify-center items-center gap-5 mt-10"
        >
          <Image
            src="/images/black-cat.png"
            alt="Lost black cat"
            width={150}
            height={150}
            className="hover:scale-110 transition-transform duration-300 py-10"
          />
          <motion.h1
            variants={fadeRight}
            className="lg:text-[8rem] md:text-[6rem] text-[4rem] leading-[95%] font-bold text-secondary opacity-20"
          >
            404
          </motion.h1>
        </motion.div>

        <motion.div variants={fadeRight} className="space-y-4">
          <h2 className="lg:text-[3rem] md:text-[2.5rem] text-[2rem] leading-[95%]">
            Oops! Page Not Found
          </h2>
          <p className="text-secondary text-lg max-w-md mx-auto leading-relaxed">
            The page you&apos;re looking for seems to have wandered off like a
            curious cat. Let&apos;s get you back on track.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
        >
          <Link href="/">
            <Button>Go Home</Button>
          </Link>

          <Link
            href="/projects"
            className="flex items-center gap-2 text-secondary hover:text-primary duration-150 font-medium px-4 py-2 border border-secondary hover:border-primary rounded transition-colors"
          >
            <BsArrowLeft />
            View Projects
          </Link>
        </motion.div>
      </motion.div>
    </PageWrapper>
  );
}
