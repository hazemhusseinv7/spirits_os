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
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
            <ScrollParallax strength={0.05}>
              <Link href="#">
                <Image
                  className="w-72 h-auto md:h-20 md:w-auto"
                  src="/play-store-badge.svg"
                  width={200}
                  height={100}
                  alt="Play store badge"
                />
              </Link>
            </ScrollParallax>
            <ScrollParallax strength={0.1}>
              <Link href="#">
                <Image
                  className="w-72 h-auto md:h-20 md:w-auto"
                  src="/app-store-badge.svg"
                  width={200}
                  height={100}
                  alt="App store badge"
                />
              </Link>
            </ScrollParallax>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <ScrollParallax strength={0.1}>
            <Image
              className="lg:order-1"
              src="/chatbot-mobile.png"
              width={500}
              height={100}
              alt="Chatbot"
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
