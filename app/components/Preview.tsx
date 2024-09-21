"use client";

import Image from "next/image";

const Preview = () => {
  return (
    <section id="preview" className="container m-auto mt-20 p-8 lg:px-20">
      <div className="flex items-center justify-center mb-12">
        <h2 className="font-bold text-7xl lg:text-9xl bg-gradient-to-r from-main-color-1 via-main-color-2 to-main-color-3 bg-clip-text text-transparent">
          Preview
        </h2>
      </div>
      <div className="flex justify-center">
        <Image
          className="w-[900px]"
          src="/preview.png"
          width={975}
          height={100}
          alt="Mobile app preview"
        />
      </div>
    </section>
  );
};

export default Preview;
