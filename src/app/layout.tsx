import type { Metadata } from "next";
import { Raleway } from "next/font/google";

import Layout from "@/components/Layout.tsx/Layout";

import "./globals.css";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jomari Tiu",
  description: "Jomari Tiu Portfolio Website",
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
