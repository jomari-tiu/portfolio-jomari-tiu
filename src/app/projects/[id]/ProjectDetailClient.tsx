"use client";

import PageWrapper from "@/components/PageWrapper";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import React from "react";
import ProjectDetail from "../_components/ProjectDetail";

export default function ProjectDetailClient() {
  return (
    <PageWrapper width="full" position={"center"}>
      <ul className=" w-11/12 flex flex-col md:flex-row gap-5 my-10">
        <li className=" col-span-4 sm:col-span-1">
          <Link href={"/projects"}>
            <aside className=" flex items-center gap-3 text-xl text-accent font-bold">
              <BsArrowLeft className="text-2xl group-hover:text-accent" />
              Back
            </aside>
          </Link>
        </li>
        <li className="col-span-8 sm:col-span-11 flex-1">
          <ProjectDetail />
        </li>
      </ul>
    </PageWrapper>
  );
}
