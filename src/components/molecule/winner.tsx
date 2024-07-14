'use client'

import Image from "next/image";
import {motion as m} from "framer-motion"

export default function Home() {
  return (
    <div className="w-full relative overflow-hidden flex flex-col justify-start pt-[190px] pb-[234px] pr-[77px] pl-[75px] gap-[58px] leading-[normal] tracking-[normal] text-center text-[48px] text-green-600 font-inter h-screen items-center">
      <div className="flex flex-row items-start justify-end pr-[78px] pl-20">
        <div className="flex-1 flex flex-col items-start justify-start gap-[13px]">
          <div className="self-stretch h-[82px] relative">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] box-border w-full h-full z-[3] border-[0px] border-solid border-green-600" />
            <m.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 5 }}
              className="absolute w-[calc(100%_-_5px)] top-[8px] left-[5px] leading-[22.53px] font-extrabold flex items-center justify-center h-[70px] z-[4]">
              <Image
                className="absolute w-100 h-100 transform rotate-2"
                src="/y.png" 
                alt=""
                width={'100'}
                height={"100"}
              />
              3
            </m.div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start px-3.5 text-[14px] text-white">
            <div className="flex-1 relative leading-[23px]">Jaylove</div>
          </div>
        </div>
      </div>
      <section className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <div className="absolute top-[-335px] left-[-176px] [filter:blur(70px)] rounded-[50%] [background:linear-gradient(180deg,_rgba(245,_161,_0,_0.24),_rgba(0,_0,_0,_0))] w-[745px] h-[1273px]" />
        <div className="absolute top-[142px] left-[77px] [filter:blur(70px)] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(245,_161,_0,_0.66),_rgba(0,_0,_0,_0))] w-[238px] h-[238px] z-[2]" />
      </section>
      <section className="flex flex-col items-start justify-start gap-[30px] text-center text-3xl text-green-600 font-inter">
        <div className="relative leading-[23px] mb-2 font-bold ">
          Congratulations
        </div>
        <div className="absolute left-[50%] translate-x-[-50%] text-center text-xl md:text-2xl leading-[36px] z-[1] text-white mt-8">
          You are one of the <br /> TOP 3 WINNERS
        </div>
      </section>
      <div className="flex flex-row justify-end py-8 pr-[65px] pl-[67px] mt-8 items-center">
        <button className="cursor-pointer [border:none] py-4 px-8 bg-green-500 rounded-[100px] flex flex-row justify-start z-[1] items-center">
          <div className="relative text-[16px] font-inter text-white text-center inline-block min-w-[45px] items-center">
            Finish
          </div>
        </button>
      </div>
    </div>
  );
}
