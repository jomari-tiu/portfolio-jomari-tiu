/* eslint-disable @next/next/no-img-element */
import React from "react";
import PageWrapper from "@/components/PageWrapper";
import EducationList from "./_components/EducationList";
import { education } from "./_data/educations";
import { companies } from "./_data/companies";
import Accordion from "@/components/Accordion";

function page() {
  return (
    <PageWrapper position={"center"} width="narrow">
      <div className=" flex gap-10 mt-10 flex-wrap justify-center">
        <article className="w-full md:w-3/12 flex flex-col items-center">
          <p className=" text-center mb-5 text-2xl w-full p-2 bg-accent">
            <span className=" text-white">ABOUT&nbsp;ME</span>
          </p>
          <img src="/images/me.jpg" alt={"me"} />
        </article>
        <article className=" space-y-5 flex-1">
          <p>
            {"I'm"} a Full Stack Developer with experience in building
            responsive, high-performance web and mobile applications. I
            specialize in developing modern front-end interfaces using React,
            Next.js, TypeScript, and Tailwind CSS, and implementing efficient
            back-end systems with Node.js and API integrations. I focus on
            writing clean, maintainable code and delivering seamless,
            user-centered experiences across platforms. I also build
            cross-platform mobile applications, ensuring consistency and
            performance on both web and mobile.
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
          <div>
            <p className=" mb-5 text-2xl">Work.</p>
            <ul>
              <Accordion accordions={companies} />
            </ul>
          </div>
          <div></div>
        </article>
      </div>
    </PageWrapper>
  );
}

export default page;
