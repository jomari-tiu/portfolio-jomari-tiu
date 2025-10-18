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
            {"I'm"} a Front-End Developer with experience building responsive,
            user-friendly websites and web applications using technologies like
            HTML, CSS, Tailwind, JavaScript, TypeScript, React Vite, and
            Next.js. I specialize in translating design wireframes into
            functional, high-performance front-end interfaces, integrating APIs,
            and optimizing for both speed and usability. I enjoy creating clean,
            reusable code and collaborating with teams to deliver seamless user
            experiences.
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
