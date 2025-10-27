"use client";

import PageWrapper from "@/components/PageWrapper";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import React from "react";
import ProjectDetail from "../_components/ProjectDetail";

export default function ProjectDetailClient() {
  return (
    <PageWrapper width="full" position={"center"}>
      <ul className=" grid grid-cols-12 gap-10 sm:gap-0 mt-10">
        <li className=" col-span-4 sm:col-span-1">
          <Link href={"/projects"}>
            <aside className=" flex items-center gap-3 text-xl text-accent font-bold">
              <BsArrowLeft className="text-2xl group-hover:text-accent" />
              Back
            </aside>
          </Link>
        </li>
        <li className="col-span-8 sm:col-span-11">
          <ProjectDetail />
        </li>
      </ul>
    </PageWrapper>
  );
}
