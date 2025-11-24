"use client";

import React, { useEffect, useState } from "react";
import FirstLoading from "../FirstLoading";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <FirstLoading /> : children}</>;
}
