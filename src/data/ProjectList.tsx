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
  description?: string;
  demoLink?: string;
  demoLink2?: string;
  CodeLink?: string;
  thumbnail: string;
  imageList?: string[];
  organization: string;
  projectType: "website" | "web-app";
  technologies?: ReactNode[];
  otherImagesFolderName?: string;
};
export const ProjectList_MSYS: CardType[] = [
  {
    id: 0,
    title: "BLGF RPIS Local",
    description:
      "A Local Revenue and Property Information System for managing various aspects of local government finance operations. The system includes modules for land and property records, tax schedules, machinery and building assessments, and tax exemptions. It also supports treasury functions such as billing, collection, delinquency tracking, auctions, and tax redemption. The platform provides a centralized dashboard for administrators to efficiently maintain records, monitor financial activities, and generate reports for local taxation and property management.",
    thumbnail: "/images/projects/blgf/page-1.jpg",
    organization: "Multisys Corporation",
    projectType: "web-app",
    otherImagesFolderName: "blgf",
    imageList: [
      "/images/projects/blgf/page-1.jpg",
      "/images/projects/blgf/page-2.jpg",
      "/images/projects/blgf/page-3.jpg",
      "/images/projects/blgf/page-4.jpg",
      "/images/projects/blgf/page-5.jpg",
      "/images/projects/blgf/page-6.jpg",
      "/images/projects/blgf/page-7.jpg",
      "/images/projects/blgf/page-8.jpg",
      "/images/projects/blgf/page-9.jpg",
      "/images/projects/blgf/page-10.jpg",
      "/images/projects/blgf/page-11.jpg",
      "/images/projects/blgf/page-12.jpg",
      "/images/projects/blgf/page-13.jpg",
      "/images/projects/blgf/page-14.jpg",
      "/images/projects/blgf/page-15.jpg",
      "/images/projects/blgf/page-16.jpg",
      "/images/projects/blgf/page-17.jpg",
      "/images/projects/blgf/page-18.jpg",
    ],
  },
  {
    id: 0,
    title: "Multistore",
    description:
      "The Multistore system is an admin platform for managing multiple online stores and their performance. It provides an overview of daily stats such as operating profit, merchant activity, order status, abandoned carts, and new signups. The dashboard includes quick links to live store monitoring, reports, and onboarding. It features sections for analytics, distributors, merchants, customers, discounts, accounting, audit logs, CRM, and partners—enabling admins to track transactions, sales, and revenue trends easily.\n\nPlatforms: \n-Core (Super Admin and Merchant CMS).\n-Marketplace (Merchant Store).\n-Portal (Where customer want to be a merchant to register)",
    thumbnail: "/images/projects/multistore/page-1.jpg",
    organization: "Multisys Corporation",
    projectType: "web-app",
    otherImagesFolderName: "multistore",
    imageList: [
      "/images/projects/multistore/page-1.jpg",
      "/images/projects/multistore/page-2.jpg",
      "/images/projects/multistore/page-3.jpg",
    ],
  },
  {
    id: 1,
    title: "Mr. Delivery",
    thumbnail: "/images/projects/mr-delivery/page-4.jpg",
    description:
      "The Mr. Delivery system is an admin dashboard designed for managing a delivery fleet. It provides features for monitoring rider activity on a map, viewing rider analytics, managing transactions, approvals, bookings, wallets, and services.",
    organization: "Multisys Corporation",
    projectType: "web-app",
    otherImagesFolderName: "mr-delivery",
    imageList: [
      "/images/projects/mr-delivery/page-1.jpg",
      "/images/projects/mr-delivery/page-2.jpg",
      "/images/projects/mr-delivery/page-3.jpg",
      "/images/projects/mr-delivery/page-4.jpg",
    ],
  },
  {
    id: 2,
    title: "DMS Smart Kapartner",
    thumbnail: "/images/projects/dms/page-1.jpg",
    description:
      "The KA-PARTNER Portal is a centralized web-based platform designed for managing electronic load dispensing and retail operations. It allows branch administrators to process mobile load sales for various telecom providers, track wallet balances, monitor transaction performance, and manage retailer accounts. Users can easily select promos, input subscriber numbers, and complete sales transactions. The dashboard provides real-time metrics such as sales amounts, retailer rankings, and load wallet status, while offering tools for profile management, reporting, and customer support. This system ensures efficient digital load distribution and operational visibility for load dealers and branch-level admins.\n\nPlatforms: \n-Core.\n-Portal.\n-Mobile App",
    organization: "Multisys Corporation",
    projectType: "web-app",
    otherImagesFolderName: "dms",
    imageList: [
      "/images/projects/dms/page-1.jpg",
      "/images/projects/dms/page-2.jpg",
      "/images/projects/dms/page-3.jpg",
      "/images/projects/dms/page-4.jpg",
    ],
  },
  {
    id: 3,
    title: "SEC ACES",
    description:
      "This system is a webinar management platform designed for administrators to schedule, manage, and monitor online events. From the central dashboard, admins can add webinar schedules, view upcoming events in a calendar view, and access detailed session information including type, registration period, price, participant quota, and meeting links. Additional modules support attendance tracking, exam setup, report generation, registrant management, and content control. The interface also features access control, logs, and versioning—enabling full oversight and streamlined operations for hosting structured online learning or certification programs.\n\nPlatforms: \n-Core.\n-Exam.\n-Portal",
    thumbnail: "/images/projects/sec/page-1.jpg",
    organization: "Multisys Corporation",
    projectType: "web-app",
    otherImagesFolderName: "sec",
    imageList: [
      "/images/projects/sec/page-1.jpg",
      "/images/projects/sec/page-2.jpg",
      "/images/projects/sec/page-3.jpg",
      "/images/projects/sec/page-4.jpg",
      "/images/projects/sec/page-5.jpg",
      "/images/projects/sec/page-6.jpg",
      "/images/projects/sec/page-7.jpg",
    ],
  },
  {
    id: 0,
    title: "Boroucrest",
    description:
      "Customized System,\nReal State Management with Accounting system\n\n-Manage Customer and corporate\n-Finance\n-Reports\n\nusername: jomtiu16.com\npassword: password321",
    demoLink: "https://staging-boroughtcrest-cms.vercel.app/login",
    CodeLink: "",
    thumbnail: "/images/projects/borou/borou0.png",
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
    description:
      "Customized System,\nDental Healthcare Management System\n\n-Manage Schedule\n-Manage Branch\n-Manage Doctors\n-Manage Patient's Treament Record and Treament Pland and other records\n\nusername: jomtiu16@gmail.com\npassword: Password123",
    demoLink: "https://tiu-dental.dev.indxhealth.com/admin",
    demoLink2: "https://dev.indxhealth.com",
    CodeLink: "",
    projectType: "web-app",
    thumbnail: "/images/projects/indx/dashboard.png",
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
];

export const websitesList: CardType[] = [
  {
    id: 2,
    title: "Forge Fitness",
    description: "A simple website for reservation booking",
    demoLink2: "https://forge-fitness-phi.vercel.app/",
    CodeLink: "",
    projectType: "website",
    thumbnail: "/images/projects/forge-fitness/page-1.png",
    organization: "Jomari Tiu",
    technologies: [
      <TbBrandNextjs className=" text-[3rem] text-red-500" key={1} />,
      <BiLogoTailwindCss className=" text-[3rem]" key={2} />,
      <LiaReact className=" text-[3rem]" key={3} />,
    ],
    imageList: [
      "/images/projects/forge-fitness/page-1.png",
      "/images/projects/forge-fitness/page-2.png",
      "/images/projects/forge-fitness/full-page.png",
    ],
  },
  {
    id: 2,
    title: "Yamaha Website",
    description:
      "Customized Website,\nYamaha's revamp website for Yamaha website PH",
    demoLink2: "https://yamaha-website-revamp-git-dev-lws.vercel.app/home",
    CodeLink: "",
    projectType: "website",
    thumbnail: "/images/projects/yamaha/gallery.png",
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
  {
    id: 3,
    title: "IPC",
    description: "Wordpress Website,\nProject from Optimind Solutions",
    demoLink: "https://jomari-tiu.github.io/IPC/",
    CodeLink: "https://github.com/Hohenheimn/IPC",
    thumbnail: "/images/projects/ipc/page-1.png",
    organization: "Optimind Solutions",
    projectType: "website",
    technologies: [
      <BsFiletypeScss className=" text-[3rem]" key={1} />,
      <TfiWordpress className=" text-[3rem]" key={2} />,
      <BiLogoPhp className=" text-[3rem]" key={3} />,
      <ImHtmlFive className=" text-[3rem]" key={4} />,
      <TbBrandMysql className=" text-[3rem]" key={5} />,
    ],
    imageList: [
      "/images/projects/ipc/page-1.png",
      "/images/projects/ipc/page-2.png",
      "/images/projects/ipc/page-3.png",
      "/images/projects/ipc/page-4.png",
      "/images/projects/ipc/page-5.png",
    ],
  },
  {
    id: 15,
    title: "Hong-Kong Looking Ahead",
    description: "Wordpress Website,\nProject from THE ECONOMIST",
    demoLink: "https://jomari-tiu.github.io/HKISD/",
    CodeLink: "https://github.com/Hohenheimn/HKISD",
    thumbnail: "/images/projects/hk-looking-ahead/hk.png",
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
    description: "Wordpress Website,\nProject from THE ECONOMIST",
    demoLink: "https://jomari-tiu.github.io/Bounce/",
    CodeLink: "https://github.com/Hohenheimn/Bounce",
    thumbnail: "/images/projects/hk-looking-ahead/bounce.png",
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
    description: "Wordpress Website,\nProject from THE ECONOMIST",
    demoLink: " https://jomari-tiu.github.io/Four-Templates/",
    CodeLink: "https://github.com/Hohenheimn/Four-Templates",
    thumbnail: "/images/projects/templates/temp5.png",
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
    description: "Wordpress Website,\nProject from Magis Solution",
    projectType: "website",
    demoLink:
      "https://jomari-tiu.github.io/Project-1-Initiative-Website/public/",
    CodeLink: "https://github.com/Hohenheimn/Project-1-Initiative-Website",
    thumbnail: "/images/projects/Project-innovation/Page-1.PNG",
    organization: "Magis",
    technologies: [
      <BiLogoTailwindCss className=" text-[3rem]" key={1} />,
      <ImHtmlFive className=" text-[3rem]" key={2} />,
    ],
  },
  {
    id: 5,
    title: "Kyndryl Project",
    description: "Wordpress Website,\nProject from The Economist",
    demoLink: "https://jomari-tiu.github.io/Kyndryl-Project/",
    CodeLink: "https://github.com/Hohenheimn/kyndryl",
    thumbnail: "/images/projects/kyndryl/page-2.png",
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
    description: "Wordpress Website,\nProject from Optimind Solutions",
    demoLink: "https://jomari-tiu.github.io/STRIDE/",
    CodeLink: "https://github.com/Hohenheimn/STRIDE",
    thumbnail: "/images/projects/stride/page-1.png",
    projectType: "website",
    organization: "Optimind Solutions",
    technologies: [
      <BsFiletypeScss className=" text-[3rem]" key={1} />,
      <TfiWordpress className=" text-[3rem]" key={2} />,
      <BiLogoPhp className=" text-[3rem]" key={3} />,
      <ImHtmlFive className=" text-[3rem]" key={4} />,
      <TbBrandMysql className=" text-[3rem]" key={5} />,
    ],
    imageList: [
      "/images/projects/stride/page-1.png",
      "/images/projects/stride/page-2.png",
      "/images/projects/stride/page-3.png",
      "/images/projects/stride/page-4.png",
      "/images/projects/stride/page-5.png",
    ],
  },
  {
    id: 7,
    title: "Girl Scout of the Philippines",
    description: "Wordpress Website,\nProject from Magis Solution",
    demoLink: "https://jomari-tiu.github.io/GirlScout/public/",
    CodeLink: "https://github.com/Hohenheimn/GirlScout",
    thumbnail: "/images/projects/GirlScout/page-1.png",
    projectType: "website",
    organization: "Magis",
    technologies: [
      <ImHtmlFive className=" text-[3rem]" key={1} />,
      <BiLogoTailwindCss className=" text-[3rem]" key={2} />,
    ],
  },
  {
    id: 8,
    title: "NolanCo",
    description: "Wordpress Website,\nProject from Magis Solution",
    demoLink: "https://jomari-tiu.github.io/SquareSpace/public/",
    CodeLink: "https://github.com/Hohenheimn/SquareSpace",
    thumbnail: "/images/projects/co-nolan/page-1.png",
    projectType: "website",
    organization: "Magis",
    technologies: [
      <ImHtmlFive className=" text-[3rem]" key={1} />,
      <BiLogoTailwindCss className=" text-[3rem]" key={2} />,
    ],
    imageList: [
      "/images/projects/co-nolan/page-1.png",
      "/images/projects/co-nolan/page-2.png",
      "/images/projects/co-nolan/page-3.png",
      "/images/projects/co-nolan/page-4.png",
      "/images/projects/co-nolan/page-5.png",
    ],
  },
  {
    id: 14,
    title: "Cognizant",
    description: "Wordpress Website,\nProject from Economist",
    demoLink: "https://jomari-tiu.github.io/cognizant/",
    CodeLink: "https://github.com/Hohenheimn/cognizant",
    thumbnail: "/images/projects/cognizant/page-1.png",
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
