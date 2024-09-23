"use client";

import Image from "next/image";

import { ScrollParallax } from "react-just-parallax";

const Features = () => {
  return (
    <section id="features" className="container m-auto mt-20 p-8 lg:px-20">
      <div className="flex items-center justify-center mb-12">
        <h2 className="font-bold text-7xl lg:text-9xl bg-gradient-to-r from-main-color-1 via-main-color-2 to-main-color-3 bg-clip-text text-transparent leading-[1.2] lg:leading-[1.4]">
          Features
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="flex flex-col gap-4 order-2 lg:order-1">
          <div className="group flex-1 border-[3px] border-slate-800 hover:border-slate-700 hover:text-slate-100 duration-400 rounded-xl p-5 overflow-hidden pb-72 relative bg-gray-900 hover:bg-slate-800">
            <div className="relative z-10">
              <h3 className="font-bold text-2xl lg:4xl text-slate-300 group-hover:text-slate-100 duration-400">
                Character Creator
              </h3>
              <span className="font-light lg:text-lg text-slate-400 group-hover:text-slate-100 duration-400">
                Create and control virtual characters \ spirits, the user can
                specify the personality, age, hobbies, and everything related to
                the virtual characters.
              </span>
            </div>
            <Image
              className="absolute -bottom-[50px] -right-[40px]"
              src="/features/card-1.svg"
              width={300}
              height={100}
              alt="Character Creator"
            />
          </div>
          <div className="group border-[3px] border-slate-800 hover:border-slate-700 hover:text-slate-100 duration-400 rounded-xl p-5 bg-gray-900 hover:bg-slate-800">
            <div>
              <h3 className="font-bold text-2xl lg:4xl text-slate-300 group-hover:text-slate-100 duration-400">
                Virtual Chat Experience
              </h3>
              <span className="font-light lg:text-lg text-slate-400 group-hover:text-slate-100 duration-400">
                The user can chat with virtual characters.
              </span>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <ScrollParallax strength={0.08}>
            <div className="flex justify-center items-center mt-10 lg:mt-0">
              <Image
                className="w-[400px] h-auto"
                src="/features/mobile.svg"
                width={400}
                height={100}
                alt="Chatbot Mobile"
              />
            </div>
          </ScrollParallax>
        </div>
        <div className="flex flex-col gap-4 order-2 lg:order-3">
          <div className="group border-[3px] border-slate-800 hover:border-slate-700 hover:text-slate-100 duration-400 rounded-xl p-5 bg-gray-900 hover:bg-slate-800">
            <div>
              <h3 className="font-bold text-2xl lg:4xl text-slate-300 group-hover:text-slate-100 duration-400">
                Real-Time Conversations
              </h3>
              <span className="font-light lg:text-lg text-slate-400 group-hover:text-slate-100 duration-400">
                When you share a photo in a post, story, or chat, virtual
                characters can understand it.
              </span>
            </div>
          </div>
          <div className="group flex-1 border-[3px] border-slate-800 hover:border-slate-700 hover:text-slate-100 duration-400 rounded-xl p-5 overflow-hidden pb-72 relative bg-gray-900 hover:bg-slate-800">
            <div className="relative z-10">
              <h3 className="font-bold text-2xl lg:4xl text-slate-300 group-hover:text-slate-100 duration-400">
                Interactive Posts & Stories
              </h3>
              <span className="font-light lg:text-lg text-slate-400 group-hover:text-slate-100 duration-400">
                The user can post posts and stories, as in traditional social
                networks, and the virtual characters interact with the posts and
                stories as if they were real users.
              </span>
            </div>
            <Image
              className="absolute -bottom-[15px] -left-[14px]"
              src="/features/card-2.svg"
              width={300}
              height={100}
              alt="Interactive Posts & Stories"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
