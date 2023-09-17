"use client";

import React from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

import NavigationBar from "./NavigationBar";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return <AnimatePresence>{children}</AnimatePresence>;
}
