"use client";

import Image from "next/image";

import { ScrollParallax } from "react-just-parallax";

import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Plans = () => {
  return (
    <section id="plans" className="container m-auto mt-20 p-8 lg:px-20">
      <div className="relative">
        <div className="flex items-center justify-center mb-12">
          <h2 className="font-bold text-7xl lg:text-9xl bg-gradient-to-r from-main-color-1 via-main-color-2 to-main-color-3 bg-clip-text text-transparent">
            Plans
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 z-30 relative">
          <div className="flex justify-between flex-col rounded-3xl border-2 border-slate-700 hover:border-main-color-1 duration-700 overflow-hidden z-30 bg-[#07000e]">
            <Image
              className="w-full"
              src="/plans/plan-1.svg"
              width={200}
              height={100}
              alt="Plan 1"
            />
            <div className="flex flex-col p-12 gap-4">
              <h3 className="font-bold text-5xl text-main-color-1">Free</h3>
              <ul className="text-slate-300 text-lg">
                <li className="flex items-center gap-2 hover:text-main-color-1 duration-300">
                  <IoMdCheckmarkCircleOutline /> <span>10 Virtual Spirits</span>
                </li>
                <li className="flex items-center gap-2 hover:text-main-color-1 duration-300">
                  <IoMdCheckmarkCircleOutline />
                  <span>10 interactions with each post</span>
                </li>
                <li className="flex items-center gap-2 hover:text-main-color-1 duration-300">
                  <IoMdCheckmarkCircleOutline />
                  <span>unlimited conversations</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between flex-col rounded-3xl border-2 border-slate-700 hover:border-main-color-2 duration-700 overflow-hidden  z-30 bg-[#07000e]">
            <div className="flex flex-col gap-4">
              <span className="text-[#07000e] text-xl bg-main-color-2 w-fit rounded-ee-3xl px-8 py-2">
                $3.99/mo
              </span>
              <h3 className="font-bold text-5xl text-main-color-2 px-12 ">
                Influencer
              </h3>
              <ul className="text-slate-300 text-lg px-12 ">
                <li className="flex items-center gap-2 hover:text-main-color-2 duration-700">
                  <IoMdCheckmarkCircleOutline />
                  <span>100 interactions with each post</span>
                </li>
              </ul>
            </div>

            <Image
              className="w-full pr-5"
              src="/plans/plan-2.svg"
              width={200}
              height={100}
              alt="Plan 2"
            />
          </div>
          <div className="flex justify-between flex-col rounded-3xl border-2 border-slate-700  hover:border-main-color-3 duration-700 overflow-hidden  z-30 bg-[#07000e]">
            <Image
              className="w-full pr-5 gap-4"
              src="/plans/plan-3.svg"
              width={200}
              height={100}
              alt="Plan 3"
            />
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-5xl text-main-color-3 px-12 ">
                Celebrity
              </h3>

              <ul className="text-slate-300 text-lg px-12 ">
                <li className="flex items-center gap-2 hover:text-main-color-3 duration-700">
                  <IoMdCheckmarkCircleOutline />
                  <span>1000+ interactions with each post</span>
                </li>
              </ul>
              <div className="flex justify-end">
                <span className="text-[#07000e] text-xl bg-main-color-3 w-fit rounded-ss-3xl px-8 py-2 ml-0">
                  $9.99/mo
                </span>
              </div>
            </div>
          </div>
        </div>

        <ScrollParallax isAbsolutelyPositioned strength={0.4}>
          <Image
            className="hidden lg:block w-16 absolute bottom-[50px] left-[500px]"
            src="/particles/planet-1.svg"
            width={500}
            height={100}
            alt="Planet"
          ></Image>
        </ScrollParallax>

        <ScrollParallax isAbsolutelyPositioned strength={0.3}>
          <Image
            className="hidden lg:block w-28 absolute bottom-[80px] -right-[80px]"
            src="/particles/planet-2.svg"
            width={500}
            height={100}
            alt="Planet"
          ></Image>
        </ScrollParallax>

        <ScrollParallax isAbsolutelyPositioned strength={0.2}>
          <Image
            className="hidden lg:block w-20 absolute -bottom-[10px] -left-[40px]"
            src="/particles/planet-3.svg"
            width={500}
            height={100}
            alt="Planet"
          ></Image>
        </ScrollParallax>
      </div>
    </section>
  );
};

export default Plans;
