"use client";
import React, { useCallback, useState } from "react";
import Image from "next/image";

import Link from "next/link";

import { useParams, useSearchParams } from "next/navigation";

import { IoIosExpand } from "react-icons/io";

import ImageViewer from "react-simple-image-viewer";

import { CardType, allProjects } from "@/data/ProjectList";

const ProjectDetail = () => {
  const searchParams = useSearchParams();
  const projectName = searchParams.get("name");
  const project: CardType = allProjects.filter(
    (itemFilter) => itemFilter.title === projectName
  )[0];

  const [currentImage, setCurrentImage] = useState<number>(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <>
      <div className=" space-y-5">
        <p>{project?.organization}</p>
        <h1 className=" text-customRed">{project?.title}</h1>
        <ul className="flex flex-wrap lg:flex-nowrap gap-10">
          <li className=" space-y-10 w-full lg:w-[25%] order-2 lg:order-1 ">
            <p className=" whitespace-pre-wrap">{project?.Description}</p>
            <div>
              <h3 className=" mb-2">Technologies I use</h3>
              <ul className=" flex gap-3  mb-20">
                {project?.technologies.map((item, indx) => (
                  <li key={indx} className=" text-[3rem]">
                    {item}
                  </li>
                ))}
              </ul>
              <div>
                <Link
                  href={project?.DemoLink ? project?.DemoLink : "#"}
                  target="_blank"
                  className="demo-button"
                >
                  Demo
                </Link>
              </div>
            </div>
          </li>
          {project?.imageList ? (
            <li
              onClick={() => openImageViewer(0)}
              className=" cursor-pointer w-full lg:w-[75%] flex-1 aspect-[1.5/1] order-1 lg:order-2 relative group"
            >
              <Image
                src={`${project?.imageList[0]}`}
                alt={""}
                fill
                className=" object-cover"
              />
              <aside className=" scale-0 group-hover:scale-100 duration-150 absolute left-0 top-0 w-full h-full  bg-[#0000002a] flex justify-center items-center z-10">
                <IoIosExpand className=" text-[3rem] text-primary" />
              </aside>
            </li>
          ) : (
            <li className=" w-full lg:w-[75%] flex-1 aspect-[1.5/1] relative order-1 lg:order-2">
              <Image
                src={`/images/projects/${project?.ImageName}`}
                alt={""}
                fill
                className=" object-cover"
              />
            </li>
          )}
        </ul>
      </div>
      {isViewerOpen && project.imageList && (
        <ImageViewer
          src={project.imageList?.map((item) => item)}
          currentIndex={currentImage}
          disableScroll={true}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </>
  );
};

export default ProjectDetail;
