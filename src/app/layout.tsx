import type { Metadata } from "next";
import { Raleway } from "next/font/google";

import Layout from "@/components/Layout.tsx/Layout";

import "./globals.css";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Jomari Tiu's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className + " relative"}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
