import type { NextPage } from "next";
import { useCallback } from "react";

export type NotificationLooserType = {
  className?: string;
};

const NotificationLooser: NextPage<NotificationLooserType> = ({
  className = "",
}) => {
  const onSorry = useCallback(() => {
    // Please sync the "Notification" 
  }, []);

  return (
     <div className="h-screen bg-black flex flex-col items-start justify-start pt-16 px-6 pb-0 gap-4 leading-normal text-center text-white font-inter">
      <div className="w-full flex flex-row items-start justify-start py-2 px-1.5 border-b border-gray-700">
        <div 
        className="flex-1 relative leading-6 cursor-pointer"
        onClick={onSorry}
          >
          Next time will be better!
          </div>
      </div>

      <div className="flex flex-col items-start justify-start pt-4 gap-4 text-center">
        <div className="flex flex-row items-start justify-start py-2 px-4 border-b border-gray-700">
          <div className="relative leading-6 ">
            Thank you for joining Game 43700
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationLooser;
