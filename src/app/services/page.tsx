"use client";

import React from "react";
import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import ServiceCard, { ServiceCardProps } from "@/components/ServiceCard";
import Button from "@/components/Button";

const servicesData: Omit<ServiceCardProps, "index">[] = [
  {
    title: "Web Application Development",
    description:
      "Build robust, scalable, and user-friendly web applications tailored to your business needs. I develop full-stack solutions using Next.js, React.js, TypeScript, and Tailwind CSS, ensuring every project is optimized for performance, security, and maintainability.",
    capabilities: [
      "End-to-end web app development",
      "Admin dashboards and internal tools",
      "Landing pages and company websites",
      "RESTful and GraphQL API integration",
      "Performance optimization and deployment",
    ],
  },
  {
    title: "Mobile Application Development",
    description:
      "Extend your reach to mobile users through reliable cross-platform solutions. I develop mobile applications that deliver a native-like experience on both iOS and Android, ensuring smooth performance, consistent UI, and seamless connectivity with your backend systems.",
    capabilities: [
      "Cross-platform app development",
      "Integration with existing APIs and services",
      "Secure authentication and data management",
      "App store deployment and maintenance",
    ],
  },
  {
    title: "Backend Development & System Integration",
    description:
      "Power your digital solutions with secure, efficient, and scalable backend systems. I design and implement APIs and backend infrastructures that handle complex business logic and ensure smooth data flow across your platforms.",
    capabilities: [
      "Node.js / Express / NestJS development",
      "Database design and optimization (PostgreSQL, MongoDB, MySQL)",
      "Authentication, authorization, and data security",
      "Third-party API and service integration",
    ],
  },
  {
    title: "UI/UX Implementation",
    description:
      "Deliver exceptional digital experiences with clean, responsive, and accessible interfaces. I turn design concepts or wireframes into high-quality, production-ready interfaces that maintain brand consistency and usability across all devices.",
    capabilities: [
      "Responsive and accessible design implementation",
      "Frontend architecture and component design",
      "Conversion from Figma or design files to code",
      "UI performance and user experience optimization",
    ],
  },
  {
    title: "Ongoing Maintenance & Technical Support",
    description:
      "Ensure long-term reliability and stability of your web or mobile applications. I provide continuous maintenance, performance monitoring, and feature updates to help your business adapt and grow.",
    capabilities: [
      "Regular updates and feature enhancements",
      "Bug fixing and performance audits",
      "Server and API monitoring",
      "Technical consultation and optimization",
    ],
  },
];

function ServicesPage() {
  return (
    <PageWrapper position="center" width="full">
      <div className="min-h-screen py-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Services
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            As a Full Stack and Mobile Developer, I help businesses design,
            build, and maintain modern digital solutions that deliver results. I
            focus on creating high-performance, scalable, and maintainable
            applications that align with business goals and provide exceptional
            user experiences.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-gray-50 rounded-lg p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Let&apos;s Build Your Next Digital Solution
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you need a modern web platform, a mobile app, or a complete
            full-stack solution — I can help your company design, develop, and
            deploy with confidence.
          </p>
          <Button>
            📩 Let&apos;s discuss how I can support your next project
          </Button>
        </motion.div>
      </div>
    </PageWrapper>
  );
}

export default ServicesPage;
