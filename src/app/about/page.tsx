import React from "react";

import Image from "next/image";
import { GiLaptop } from "react-icons/gi";

import PageWrapper from "@/components/PageWrapper";
import SectionLayer from "@/components/SectionLayer";
import { about_education, about_expirience, about_me } from "@/data/About";

function page() {
  return (
    <PageWrapper position={"center"} width="narrow">
      <div className=" w-full py-10">
        <div className=" space-y-10 md:space-y-0">
          <SectionLayer
            label={"About me"}
            title={about_me.title}
            content={about_me.content}
            image_url={about_me.image_url}
            image_position={"right"}
            image_bigger={false}
            image_bottom={true}
          />

          <SectionLayer
            label={"School"}
            title={about_education.title}
            content={about_education.content}
            image_url={about_education.image_url}
            image_position={"right"}
            image_bigger={true}
            image_bottom={false}
          />
        </div>
        <hr className=" my-10" />
        <h3 className=" text-customRed">Expirience</h3>
        <section className=" space-y-20">
          <SectionLayer
            label={"Magis Solution"}
            title={about_expirience.magis_solution.title}
            content={about_expirience.magis_solution.content}
            image_url={about_expirience.magis_solution.image_url}
            image_position={"right"}
            image_bigger={false}
            image_bottom={false}
          />
          <SectionLayer
            label={"Optimind Technology Solution"}
            title={about_expirience.optimind.title}
            content={about_expirience.optimind.content}
            image_url={about_expirience.optimind.image_url}
            image_position={"left"}
            image_bigger={false}
            image_bottom={false}
          />
          <SectionLayer
            label={"Lightweight Solution"}
            title={about_expirience.lws.title}
            content={about_expirience.lws.content}
            image_url={about_expirience.lws.image_url}
            image_position={"right"}
            image_bigger={false}
            image_bottom={false}
          />
        </section>
      </div>
    </PageWrapper>
  );
}

export default page;
