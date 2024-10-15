import { ReactNode } from "react";
import { BiLogoPhp, BiLogoTailwindCss } from "react-icons/bi";
import { BsFiletypeScss } from "react-icons/bs";
import { ImHtmlFive } from "react-icons/im";
import { LiaReact } from "react-icons/lia";
import { TbBrandMysql, TbBrandNextjs } from "react-icons/tb";
import { TfiWordpress } from "react-icons/tfi";


export type CardType = {
  id: number;
  title: string;
  Description: string;
  DemoLink?: string;
  DemoLink2?: string;
  CodeLink: string;
  ImageName: string;
  imageList?: string[];
  organization: string;
  projectType: "website" | "web-app";
  technologies: ReactNode[];
  otherImagesFolderName?: string;
};

export const ProjectList_LWS: CardType[] = [
  {
    id: 0,
    title: "Boroucrest",
    Description:
      "Customized System,\nReal State Management with Accounting system\n\n-Manage Customer and corporate\n-Finance\n-Reports\n\nusername: jomtiu16.com\npassword: password321",
    DemoLink: "https://staging-boroughtcrest-cms.vercel.app/login",
    CodeLink: "",
    ImageName: "borouLogin.png",
    organization: "Lightweight Solutions",
    projectType: "web-app",
    technologies: [
      <TbBrandNextjs className=" text-[3rem]" key={1} />,
      <BiLogoTailwindCss className=" text-[3rem]" key={2} />,
      <LiaReact className=" text-[3rem]" key={3} />,
    ],
    otherImagesFolderName: "borou",
    imageList: [
      "/images/projects/borou/borou0.png",
      "/images/projects/borou/borou1.png",
      "/images/projects/borou/borou2.png",
      "/images/projects/borou/borou3.png",
      "/images/projects/borou/borou4.png",
    ],
  },
  {
    id: 1,
    title: "Index Dental",
    Description:
      "Customized System,\nDental Healthcare Management System\n\n-Manage Schedule\n-Manage Branch\n-Manage Doctors\n-Manage Patient's Treament Record and Treament Pland and other records\n\nusername: jomtiu16@gmail.com\npassword: Password123",
    DemoLink: "https://tiu-dental.dev.indxhealth.com/admin",
    DemoLink2: "https://dev.indxhealth.com",
    CodeLink: "",
    projectType: "web-app",
    ImageName: "indxLogin.png",
    organization: "Lightweight Solutions",
    technologies: [
      <TbBrandNextjs className=" text-[3rem]" key={1} />,
      <BiLogoTailwindCss className=" text-[3rem]" key={2} />,
      <LiaReact className=" text-[3rem]" key={3} />,
    ],
    imageList: [
      "/images/projects/indx/dashboard.png",
      "/images/projects/indx/tooth_chart.png",
      "/images/projects/indx/analytics.png",
      "/images/projects/indx/profile.png",
      "/images/projects/indx/financials.png",
    ],
  },
  {
    id: 2,
    title: "Yamaha Website",
    Description:
      "Customized Website,\nYamaha's revamp website for Yamaha website PH",
    DemoLink2: "https://yamaha-website-revamp-git-dev-lws.vercel.app/home",
    CodeLink: "",
    projectType: "website",
    ImageName: "yamahaHomepage.png",
    organization: "Lightweight Solutions",
    technologies: [
      <TbBrandNextjs className=" text-[3rem] text-red-500" key={1} />,
      <BiLogoTailwindCss className=" text-[3rem]" key={2} />,
      <LiaReact className=" text-[3rem]" key={3} />,
    ],
    imageList: [
      "/images/projects/yamaha/gallery.png",
      "/images/projects/yamaha/personal_commuter.png",
      "/images/projects/yamaha/news.png",
      "/images/projects/yamaha/history.png",
      "/images/projects/yamaha/dealer.png",
    ],
  },
];

export const allProjects: CardType[] = [
  ...ProjectList_LWS,
  {
    id: 15,
    title: "Hong-Kong Looking Ahead",
    Description: "Wordpress Website,\nProject from THE ECONOMIST",
    DemoLink: "https://jomari-tiu.github.io/HKISD/",
    CodeLink: "https://github.com/Hohenheimn/HKISD",
    ImageName: "hkisd.png",
    projectType: "website",
    organization: "Optimind Solutions",

    technologies: [
      <BsFiletypeScss className=" text-[3rem]" key={1} />,
      <TfiWordpress className=" text-[3rem]" key={2} />,
      <BiLogoPhp className=" text-[3rem]" key={3} />,
      <ImHtmlFive className=" text-[3rem]" key={4} />,
      <TbBrandMysql className=" text-[3rem]" key={5} />,
    ],
  },
  {
    id: 16,
    title: "Bounce",
    Description: "Wordpress Website,\nProject from THE ECONOMIST",
    DemoLink: "https://jomari-tiu.github.io/Bounce/",
    CodeLink: "https://github.com/Hohenheimn/Bounce",
    ImageName: "bounce.png",
    projectType: "website",
    organization: "Optimind Solutions",
    technologies: [
      <BsFiletypeScss className=" text-[3rem]" key={1} />,
      <TfiWordpress className=" text-[3rem]" key={2} />,
      <BiLogoPhp className=" text-[3rem]" key={3} />,
      <ImHtmlFive className=" text-[3rem]" key={4} />,
      <TbBrandMysql className=" text-[3rem]" key={5} />,
    ],
  },
  {
    id: 17,
    title: "5 Templates",
    Description: "Wordpress Website,\nProject from THE ECONOMIST",
    DemoLink: " https://jomari-tiu.github.io/Four-Templates/",
    CodeLink: "https://github.com/Hohenheimn/Four-Templates",
    ImageName: "google4.png",
    projectType: "website",
    organization: "Optimind Solutions",
    technologies: [
      <BsFiletypeScss className=" text-[3rem]" key={1} />,
      <TfiWordpress className=" text-[3rem]" key={2} />,
      <BiLogoPhp className=" text-[3rem]" key={3} />,
      <ImHtmlFive className=" text-[3rem]" key={4} />,
      <TbBrandMysql className=" text-[3rem]" key={5} />,
    ],
  },
  {
    id: 4,
    title: "Initiative Website",
    Description: "Wordpress Website,\nProject from Magis Solution",
    projectType: "website",
    DemoLink:
      "https://jomari-tiu.github.io/Project-1-Initiative-Website/public/",
    CodeLink: "https://github.com/Hohenheimn/Project-1-Initiative-Website",
    ImageName: "initiativeWebiste.png",
    organization: "Magis",
    technologies: [
      <BiLogoTailwindCss className=" text-[3rem]" key={1} />,
      <ImHtmlFive className=" text-[3rem]" key={2} />,
    ],
  },
  {
    id: 5,
    title: "Kyndryl Project",
    Description: "Wordpress Website,\nProject from The Economist",
    DemoLink: "https://jomari-tiu.github.io/Kyndryl-Project/",
    CodeLink: "https://github.com/Hohenheimn/kyndryl",
    ImageName: "kyndryl.png",
    projectType: "website",
    organization: "Optimind Solutions",
    technologies: [
      <BsFiletypeScss className=" text-[3rem]" key={1} />,
      <TfiWordpress className=" text-[3rem]" key={2} />,
      <BiLogoPhp className=" text-[3rem]" key={3} />,
      <ImHtmlFive className=" text-[3rem]" key={4} />,
      <TbBrandMysql className=" text-[3rem]" key={5} />,
    ],
  },
  {
    id: 6,
    title: "STRIDE",
    Description: "Wordpress Website,\nProject from Optimind Solutions",
    DemoLink: "https://jomari-tiu.github.io/STRIDE/",
    CodeLink: "https://github.com/Hohenheimn/STRIDE",
    ImageName: "stride.png",
    projectType: "website",
    organization: "Optimind Solutions",
    technologies: [
      <BsFiletypeScss className=" text-[3rem]" key={1} />,
      <TfiWordpress className=" text-[3rem]" key={2} />,
      <BiLogoPhp className=" text-[3rem]" key={3} />,
      <ImHtmlFive className=" text-[3rem]" key={4} />,
      <TbBrandMysql className=" text-[3rem]" key={5} />,
    ],
  },
  {
    id: 7,
    title: "Girl Scout of the Philippines",
    Description: "Wordpress Website,\nProject from Magis Solution",
    DemoLink: "https://jomari-tiu.github.io/GirlScout/public/",
    CodeLink: "https://github.com/Hohenheimn/GirlScout",
    ImageName: "girl-Scout.png",
    projectType: "website",
    organization: "Magis",
    technologies: [
      <ImHtmlFive className=" text-[3rem]" key={1} />,
      <BiLogoTailwindCss className=" text-[3rem]" key={2} />,
    ],
  },
  {
    id: 8,
    title: "Nolan & Co",
    Description: "Wordpress Website,\nProject from Magis Solution",
    DemoLink: "https://jomari-tiu.github.io/SquareSpace/public/",
    CodeLink: "https://github.com/Hohenheimn/SquareSpace",
    ImageName: "nolan-&-co.png",
    projectType: "website",
    organization: "Magis",
    technologies: [
      <ImHtmlFive className=" text-[3rem]" key={1} />,
      <BiLogoTailwindCss className=" text-[3rem]" key={2} />,
    ],
  },
  {
    id: 9,
    title: "Practice Blog Website",
    Description: "Wordpress Website,\nPractice Blog Website",
    DemoLink: "https://jomari-tiu.github.io/jomari-collection/",
    CodeLink: "https://github.com/Hohenheimn/jomari-collection",
    ImageName: "jomari'sCollection.png",
    organization: "Practice website",
    projectType: "website",
    technologies: [
      <BsFiletypeScss className=" text-[3rem]" key={1} />,
      <ImHtmlFive className=" text-[3rem]" key={2} />,
    ],
  },
  {
    id: 10,
    title: "Mars Wrigley",
    Description: "Wordpress Website,\nProject from The Economist",
    DemoLink: "https://jomari-tiu.github.io/mars-wrigley/",
    CodeLink: "https://github.com/Hohenheimn/mars-wrigley",
    ImageName: "Mars.png",
    organization: "Optimind Solutions",
    projectType: "website",
    technologies: [
      <BsFiletypeScss className=" text-[3rem]" key={1} />,
      <TfiWordpress className=" text-[3rem]" key={2} />,
      <BiLogoPhp className=" text-[3rem]" key={3} />,
      <ImHtmlFive className=" text-[3rem]" key={4} />,
      <TbBrandMysql className=" text-[3rem]" key={5} />,
    ],
  },
  {
    id: 11,
    title: "Crypto",
    Description: "Wordpress Website,\nProject from The Economist",
    DemoLink: "https://jomari-tiu.github.io/Crypto/",
    CodeLink: "https://github.com/Hohenheimn/Crypto",
    ImageName: "Crypto.png",
    organization: "Optimind Solutions",
    projectType: "website",
    technologies: [
      <BsFiletypeScss className=" text-[3rem]" key={1} />,
      <TfiWordpress className=" text-[3rem]" key={2} />,
      <BiLogoPhp className=" text-[3rem]" key={3} />,
      <ImHtmlFive className=" text-[3rem]" key={4} />,
      <TbBrandMysql className=" text-[3rem]" key={5} />,
    ],
  },
  {
    id: 12,
    title: "IPC",
    Description: "Wordpress Website,\nProject from Optimind Solutions",
    DemoLink: "https://jomari-tiu.github.io/IPC/",
    CodeLink: "https://github.com/Hohenheimn/IPC",
    ImageName: "ipc.png",
    organization: "Optimind Solutions",
    projectType: "website",
    technologies: [
      <BsFiletypeScss className=" text-[3rem]" key={1} />,
      <TfiWordpress className=" text-[3rem]" key={2} />,
      <BiLogoPhp className=" text-[3rem]" key={3} />,
      <ImHtmlFive className=" text-[3rem]" key={4} />,
      <TbBrandMysql className=" text-[3rem]" key={5} />,
    ],
  },
  {
    id: 13,
    title: "Empowering Future",
    Description: "Wordpress Website,\nProject from Economist",
    DemoLink: "https://jomari-tiu.github.io/empowering-future/",
    CodeLink: "https://github.com/Hohenheimn/empowering-future",
    ImageName: "empower.png",
    organization: "Optimind Solutions",
    projectType: "website",
    technologies: [
      <BsFiletypeScss className=" text-[3rem]" key={1} />,
      <TfiWordpress className=" text-[3rem]" key={2} />,
      <BiLogoPhp className=" text-[3rem]" key={3} />,
      <ImHtmlFive className=" text-[3rem]" key={4} />,
      <TbBrandMysql className=" text-[3rem]" key={5} />,
    ],
  },
  {
    id: 14,
    title: "Cognizant",
    Description: "Wordpress Website,\nProject from Economist",
    DemoLink: "https://jomari-tiu.github.io/cognizant/",
    CodeLink: "https://github.com/Hohenheimn/cognizant",
    ImageName: "cognizant.png",
    organization: "Optimind Solutions",
    projectType: "website",
    technologies: [
      <BsFiletypeScss className=" text-[3rem]" key={1} />,
      <TfiWordpress className=" text-[3rem]" key={2} />,
      <BiLogoPhp className=" text-[3rem]" key={3} />,
      <ImHtmlFive className=" text-[3rem]" key={4} />,
      <TbBrandMysql className=" text-[3rem]" key={5} />,
    ],
  },
];
