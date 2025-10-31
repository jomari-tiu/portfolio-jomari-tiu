"use client";

import classNames from "classnames";
import React from "react";

type props = {
  children: React.ReactNode;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, leadingIcon, trailingIcon, ...rest }: props) {
  return (
    <>
      <button
        {...rest}
        className={classNames(
          "text-center py-2 px-2 bg-accent text-white w-auto tracking-widest button-shadow z-10 flex items-center",
          rest.className
        )}
      >
        {leadingIcon && <span className="mr-2">{leadingIcon}</span>}
        <div className="flex-1 text-center">{children}</div>
        {trailingIcon && <span className="ml-2">{trailingIcon}</span>}
      </button>
    </>
  );
}

export default Button;
