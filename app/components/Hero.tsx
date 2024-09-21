"use client";

import Image from "next/image";
import Link from "next/link";

import { ScrollParallax } from "react-just-parallax";

const Hero = () => {
  return (
    <section className="container m-auto p-8 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-between gap-20 mb-20 lg:mb-32">
        <div className="flex flex-col justify-center items-center lg:order-2 gap-4">
          <div className="flex flex-col text-center items-center gap-2">
            <h1 className="font-bold text-5xl md:text-8xl">SpiritsOS</h1>
            <span className=" font-thin text-2xl">
              Your own private social network with AI virtual Spirits
            </span>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 relative">
            <Link href="#!" className="z-30" aria-label="Play store">
              <Image
                className="w-72 h-auto md:h-20 md:w-auto"
                src="/hero/play-store-badge.svg"
                width={200}
                height={100}
                alt="Play store badge"
              />
            </Link>

            <Link href="#!" className="z-30" aria-label="App store">
              <Image
                className="w-72 h-auto md:h-20 md:w-auto"
                src="/hero/app-store-badge.svg"
                width={200}
                height={100}
                alt="App store badge"
              />
            </Link>
            <ScrollParallax isAbsolutelyPositioned strength={0.3}>
              <Image
                className="w-24 absolute top-[170px] right-[20px] rotate-90"
                src="/particles/particle-1.svg"
                width={500}
                height={100}
                alt="Particles"
              ></Image>
            </ScrollParallax>
          </div>
        </div>
        <div className="lg:order-1 relative flex-1">
          <ScrollParallax strength={0.04}>
            <div className="flex justify-center lg:justify-start items-center">
              <Image
                src="/hero/chatbot-mobile.png"
                width={500}
                height={100}
                alt="Chatbot"
                priority
              ></Image>
            </div>
          </ScrollParallax>
          <ScrollParallax isAbsolutelyPositioned strength={0.4}>
            <Image
              className="w-20 absolute top-0 right-[20px] hidden lg:block"
              src="/particles/particle-1.svg"
              width={500}
              height={100}
              alt="Particles"
            ></Image>
          </ScrollParallax>
          <ScrollParallax isAbsolutelyPositioned strength={0.3}>
            <Image
              className="w-20 absolute top-[200px] left-[40px]"
              src="/particles/particle-2.svg"
              width={500}
              height={100}
              alt="Particles"
            ></Image>
          </ScrollParallax>
          <ScrollParallax isAbsolutelyPositioned>
            <Image
              className="w-10 lg:w-20 absolute bottom-[20px] right-[180px]"
              src="/particles/particle-3.svg"
              width={500}
              height={100}
              alt="Particles"
            ></Image>
          </ScrollParallax>

          <ScrollParallax isAbsolutelyPositioned strength={0.3}>
            <Image
              className="w-10 lg:w-20 absolute bottom-[180px] -right-[10px] rotate-90"
              src="/particles/particle-4.svg"
              width={500}
              height={100}
              alt="Particles"
            ></Image>
          </ScrollParallax>

          <ScrollParallax isAbsolutelyPositioned strength={0.5}>
            <Image
              className="w-40 absolute bottom-0 -left-[180px] rotate-45 hidden lg:block"
              src="/particles/particle-1.svg"
              width={500}
              height={100}
              alt="Particles"
            ></Image>
          </ScrollParallax>
        </div>
      </div>
      <div className="flex font-thin justify-center">
        <span className="max-w-4xl text-center text-slate-400">
          Create your own private social network, where you are the only real
          person, and everyone else is AI, you can create and manage spirits,
          describe them and decide their personalities, they will interact with
          your posts and stories just like in a traditional social network, you
          can also chat with them.
        </span>
      </div>
    </section>
  );
};

export default Hero;
