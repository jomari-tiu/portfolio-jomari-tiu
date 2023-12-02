"use client";

import React from "react";
import { AnimatePresence } from "framer-motion";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return <AnimatePresence>{children}</AnimatePresence>;
}
