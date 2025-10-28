import React from "react";

const LoadingScreen = () => {
  return (
    <section className=" z-20 fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-white">
      <aside className="animate-bounce relative w-40 aspect-square flex justify-center items-center overflow-hidden rounded-full text-white">
        <div className=" aspect-square bg-primary absolute left-0 top-0 w-full h-full animate-pulse"></div>
        <p className=" z-10  text-[5rem]">J</p>
      </aside>
    </section>
  );
};

export default LoadingScreen;
