import React from "react";

// Component for an individual option
const OptionInput: React.FC<{
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ value, onChange }) => (
  <div className="mb-2 flex w-[204px] flex-col items-start justify-start px-0 pb-0 pt-0.5">
    <div className="flex flex-col items-start justify-start gap-[26px] self-stretch">
      <div className="flex flex-row items-center justify-start self-stretch">
        <div className="relative z-[1] h-[33px] w-[33px] rounded-[50%] bg-[#28FF15]" />
        <div className="ml-[1.25rem] flex w-[9.375rem] flex-1 flex-col items-start justify-end px-0 pb-1 pt-0">
          <input
            type="text"
            placeholder="Option"
            value={value}
            onChange={onChange}
            className="relative self-stretch bg-transparent text-[1.25rem] leading-[22.53px] placeholder-opacity-25 outline-none"
          />
        </div>
      </div>
    </div>
  </div>
  // <input type="text" placeholder="Option" value={value} onChange={onChange} />
);

export default OptionInput;
