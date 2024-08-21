import SideBar from "@src/components/SideBar";
import { RiArrowLeftLine } from "@remixicon/react";
import Image from "next/image";
import { motion } from "framer-motion";

const UniqueName = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen overflow-y-auto sm:overflow-y-hidden">
      <div className="sm:hidden w-full p-4">
        <button className="text-primary-green">
          <RiArrowLeftLine size={24} />
        </button>
      </div>
      <div className="hidden sm:block">
        <SideBar />
      </div>
      <div className="w-full p-4 sm:p-10 pb-20">
        <div className="hidden sm:flex w-full justify-between">
          <button className="text-primary-green">
            <RiArrowLeftLine size={24} />
          </button>
        </div>

        <div className="w-full flex flex-col gap-8 justify-center items-center min-h-[calc(100vh-200px)]">
          <div className="w-full max-w-[500px] mx-auto flex flex-col justify-center items-center py-6 sm:py-10 px-4 sm:px-20 gap-5">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.2,
              }}
            >
              <Image
                src={"/Zuko.png"}
                alt="Game Identity"
                width={80}
                height={80}
                className="sm:w-[100px] sm:h-[100px]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-center"
            >
              <h3 className="text-base sm:text-lg font-bold">JayLove</h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-2">
                Unique gamer identity
              </p>
            </motion.div>
            <motion.button
              className="text-white bg-primary-green py-3 px-10 active:scale-95 duration-200 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Continue
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueName;