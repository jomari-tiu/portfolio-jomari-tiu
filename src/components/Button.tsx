"use client";

import React from "react";

type props = {
  children: React.ReactNode;
  onClick?: () => void;
};

function Button({ children, onClick }: props) {
  return (
    <>
      <button
        onClick={onClick}
        className="text-center py-2 bg-accent text-white tracking-widest button-shadow z-10"
      >
        {children}
      </button>
    </>
  );
}

export default Button;
