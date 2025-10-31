"use client";

import React, { useState, useMemo } from "react";

import { motion } from "framer-motion";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { fadeUpTitle, titleStagger } from "@/animation/projectAnimation";
import Card from "@/components/Card";
import PageWrapper from "@/components/PageWrapper";
import { websitesList, ProjectList_MSYS } from "@/data/ProjectList";

import MiniCard from "@/components/MiniCard";
import Button from "@/components/Button";

const ITEMS_PER_PAGE = 4;

const ProjectPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showAllWebApps, setShowAllWebApps] = useState(false);
  const title = "Projects";
  const titleArray = title.split("");

  const filteredWebsites = useMemo(() => {
    const list = ["website", "web-app"];
    setCurrentPage(1);
    return websitesList.filter((filter) =>
      list.includes(`${filter?.projectType}`)
    );
  }, []);

  const totalPages = Math.ceil(filteredWebsites.length / ITEMS_PER_PAGE);
  const paginatedWebsites = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredWebsites.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredWebsites, currentPage]);
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

      <section className=" mb-20 flex flex-col items-center gap-10">
        <h1 className="text-center text-accent">WEB-APPLICATION</h1>
        <div className=" flex flex-wrap gap-5 w-full justify-center">
          {(showAllWebApps
            ? ProjectList_MSYS
            : ProjectList_MSYS.slice(0, 4)
          ).map((item, indx) => (
            <MiniCard data={item} key={item.id} priority={indx < 2} />
          ))}
        </div>
        {ProjectList_MSYS.length > 4 && (
          <Button onClick={() => setShowAllWebApps(!showAllWebApps)}>
            {showAllWebApps
              ? "Show Less"
              : `(${ProjectList_MSYS.length - 4} more)`}
          </Button>
        )}
      </section>
      <ul className=" grid grid-cols-4 gap-10 sm:gap-0">
        <li className="col-span-4">
          <h1 className="mb-10 text-center text-accent">WEBSITES</h1>
        </li>

        <li className="col-span-4">
          <ul className=" grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {paginatedWebsites.map((item, indx) => (
              <li key={item.id}>
                <Card item={item} priority={indx < 4} />
              </li>
            ))}
          </ul>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-10">
              <Button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                leadingIcon={<BsChevronLeft />}
              >
                Previous
              </Button>

              <span className="text-sm">
                Page {currentPage} of {totalPages}
              </span>

              <Button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                trailingIcon={<BsChevronRight />}
              >
                Next
              </Button>
            </div>
          )}
        </li>
      </ul>
    </PageWrapper>
  );
};

export default ProjectPage;
