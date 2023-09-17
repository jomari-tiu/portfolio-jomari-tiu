import React from "react";

type Props = {
  label: string;
  className: string;
};

export default function Label({ label, className }: Props) {
  return (
    <div
      className={` font-normal tracking-widest text-[.8rem] absolute ${className}`}
    >
      {label}
    </div>
  );
}
