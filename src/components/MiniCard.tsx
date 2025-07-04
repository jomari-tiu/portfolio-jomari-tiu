import React from "react";

type Props = {
  title: string;
  description?: React.ReactNode;
};

const MiniCard = ({ title, description }: Props) => {
  return (
    <div className="max-w-sm border border-gray-200 rounded-lg shadow-sm bg-primary">
      <img
        className="rounded-t-lg"
        src="/images/projects/yamaha/gallery.png"
        alt=""
      />
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            {title}
          </h5>
        </a>
        {description && (
          <div className="mb-3 font-normal text-gray-400">{description}</div>
        )}
        <div className=" font-normal flex flex-wrap gap-2 ">
          <span className=" py-1 px-4 rounded-2xl bg-gray-500 text-sm">
            #ReactJS
          </span>
          <span className=" py-1 px-4 rounded-2xl bg-gray-500  text-sm">
            #TailwindCSS
          </span>
        </div>
      </div>
    </div>
  );
};

export default MiniCard;
