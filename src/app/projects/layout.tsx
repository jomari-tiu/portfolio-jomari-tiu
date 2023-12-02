"use client";

import React, { useState } from "react";

import Link from "next/link";

import { useParams } from "next/navigation";

import { BsArrowLeft } from "react-icons/bs";

import Card from "@/components/Card";
import Filter from "@/components/Filter";
import PageWrapper from "@/components/PageWrapper";
import { allProjects } from "@/data/ProjectList";

const ProjectLayout = ({ children }: { children: React.ReactNode }) => {
  const params = useParams();
  const list = ["Optimind Solutions", "Lightweight Solutions", "Magis"];
  const [selected, setSelected] = useState<string[]>(list);
  return (
    <PageWrapper className={""} width="full" position={"center"}>
      <section className="flex justify-center py-32">
        <h1 className=" text-[5rem] md:text-[10rem] font-thin underline">
          Project{params.project ? "" : "s"}
        </h1>
      </section>
      <ul className=" grid grid-cols-4 gap-10 sm:gap-0">
        <li className=" col-span-4 sm:col-span-1">
          {params.project ? (
            <Link href={"/projects"}>
              <aside className=" flex items-center gap-3 text-xl">
                <BsArrowLeft className="text-2xl group-hover:text-customRed" />
                Back
              </aside>
            </Link>
          ) : (
            <Filter list={list} setSelected={setSelected} selected={selected} />
          )}
        </li>
        <li className="col-span-4 sm:col-span-3">
          {params.project ? (
            children
          ) : (
            <ul className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
              {allProjects
                .filter((filter) =>
                  selected.includes(`${filter?.organization}`)
                )
                .map((item, indx) => (
                  <li key={indx}>
                    <Card item={item} />
                  </li>
                ))}
            </ul>
          )}
        </li>
      </ul>
    </PageWrapper>
  );
};

export default ProjectLayout;
