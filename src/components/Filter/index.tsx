"use client";

import React, { useState } from "react";
import { BsBorderAll } from "react-icons/bs";

type Props = {
  list: string[];
  setSelected: Function;
  selected: string[];
};

const Filter = ({ list, setSelected, selected }: Props) => {
  const filterHandler = (item: string) => {
    if (item === "all") {
      setSelected(list);
      return;
    }

    if (selected.includes(item) && selected.length === list.length) {
      const clone = selected.filter((itemFilter) => itemFilter === item);
      if (clone.length <= 0) {
        setSelected(list);
      } else {
        setSelected(clone);
      }
      return;
    }

    if (selected.includes(item)) {
      const clone = selected.filter((itemFilter) => itemFilter !== item);
      if (clone.length <= 0) {
        setSelected(list);
      } else {
        setSelected(clone);
      }
      return;
    } else {
      setSelected([...selected, item]);
      return;
    }
  };
  return (
    <ul className=" space-y-5 text-secondary uppercase sticky top-[60px]">
      <li
        className={` cursor-pointer text-[1.2rem] hover:translate-x-5 duration-150 ${
          selected.length === list.length &&
          "font-bold text-primary translate-x-5"
        }`}
        onClick={() => filterHandler("all")}
      >
        All Projects
      </li>
      {list.map((item, indx) => (
        <li
          key={indx}
          className={` cursor-pointer lg:text-[1.2rem] hover:translate-x-5 duration-150 ${
            selected.includes(item) &&
            selected.length !== list.length &&
            "font-bold text-primary translate-x-5"
          }`}
          onClick={() => filterHandler(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Filter;
