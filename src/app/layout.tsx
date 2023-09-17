import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Layout from "@/components/Layout.tsx/Layout";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className + " relative"}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
