"use client";

import Image from "next/image";

import { ScrollParallax } from "react-just-parallax";

const Preview = () => {
  return (
    <section id="preview" className="container m-auto mt-20 p-8 lg:px-20">
      <div className="flex items-center justify-center mb-12">
        <h2 className="font-bold text-7xl lg:text-9xl leading-[1.2] lg:leading-[1.4] bg-gradient-to-r from-main-color-1 via-main-color-2 to-main-color-3 bg-clip-text text-transparent">
          Preview
        </h2>
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-8">
        <div className="hidden lg:flex justify-center items-center">
          <ScrollParallax strength={0.04}>
            <Image
              className="w-full"
              src="/preview/mobile-1.png"
              width={150}
              height={300}
              alt="Mobile app preview"
              unoptimized
            />
          </ScrollParallax>
        </div>
        <div className="flex justify-center items-start">
          <ScrollParallax strength={0.02}>
            <Image
              className="w-[90%]"
              src="/preview/mobile-2.png"
              width={150}
              height={300}
              alt="Mobile app preview"
              unoptimized
            />
          </ScrollParallax>
        </div>

        <div className="flex justify-center items-center">
          <ScrollParallax strength={0.01}>
            <Image
              className="w-[95%]"
              src="/preview/mobile-3.png"
              width={150}
              height={300}
              alt="Mobile app preview"
              unoptimized
            />
          </ScrollParallax>
        </div>

        <div className="flex justify-center items-start">
          <ScrollParallax strength={0.02}>
            <Image
              className="w-[90%]"
              src="/preview/mobile-4.png"
              width={150}
              height={300}
              alt="Mobile app preview"
              unoptimized
            />
          </ScrollParallax>
        </div>
        <div className="hidden lg:flex justify-center items-center">
          <ScrollParallax strength={0.04}>
            <Image
              className="w-full"
              src="/preview/mobile-5.png"
              width={150}
              height={300}
              alt="Mobile app preview"
              unoptimized
            />
          </ScrollParallax>
        </div>
      </div>
    </section>
  );
};

export default Preview;
