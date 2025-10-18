"use client";

import React, { useState } from "react";

import { motion } from "framer-motion";

import Link from "next/link";

import { useSearchParams } from "next/navigation";

import { BsArrowLeft } from "react-icons/bs";

import { fadeUpTitle, titleStagger } from "@/animation/projectAnimation";
import Card from "@/components/Card";
import Filter from "@/components/Filter";
import PageWrapper from "@/components/PageWrapper";
import { websitesList, ProjectList_MSYS } from "@/data/ProjectList";

import ProjectDetail from "./_components/ProjectDetail";
import MiniCard from "@/components/MiniCard";

const ProjectPage = () => {
  const searchParams = useSearchParams();
  const project = searchParams.get("name");
  const list = ["website", "web-app"];
  const [selected, setSelected] = useState<string[]>(list);
  const title = "Projects";
  const titleArray = title.split("");
  return (
    <PageWrapper width="full" position={"center"}>
      <section className="flex justify-center py-32">
        <motion.aside
          variants={titleStagger}
          initial="from"
          animate="to"
          className=" text-center text-[4rem] sm:text-[10rem] font-thin border-b-8 border-black flex gap-1 items-center justify-center"
        >
          {titleArray.map((item, indx) => (
            <motion.div variants={fadeUpTitle} key={indx}>
              {item}
            </motion.div>
          ))}
        </motion.aside>
      </section>
      {project ? (
        <ul className=" grid grid-cols-4 gap-10 sm:gap-0">
          <li className=" col-span-4 sm:col-span-1">
            {project && (
              <Link href={"/projects"}>
                <aside className=" flex items-center gap-3 text-xl">
                  <BsArrowLeft className="text-2xl group-hover:text-accent" />
                  Back
                </aside>
              </Link>
            )}
          </li>
          <li className="col-span-4 sm:col-span-3">
            <ProjectDetail />
          </li>
        </ul>
      ) : (
        <>
          <section className=" mb-20">
            <h1 className="mb-10 text-center text-accent">WEB-APPLICATION</h1>
            <div className=" flex flex-wrap gap-5 w-full justify-center">
              {ProjectList_MSYS.map((item) => (
                <MiniCard data={item} key={item.id} />
              ))}
            </div>
          </section>
          <ul className=" grid grid-cols-4 gap-10 sm:gap-0">
            <li className="col-span-4">
              <h1 className="mb-10 text-center text-accent">WEBSITES</h1>
            </li>

            <li className="col-span-4">
              <ul className=" grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {websitesList
                  .filter((filter) =>
                    selected.includes(`${filter?.projectType}`)
                  )
                  .map((item, indx) => (
                    <li key={indx}>
                      <Card item={item} />
                    </li>
                  ))}
              </ul>
            </li>
          </ul>
        </>
      )}
    </PageWrapper>
  );
};

export default ProjectPage;
