import * as React from "react";
import {twMerge} from "tailwind-merge";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IActionButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    Icon: React.FC<React.SVGAttributes<SVGElement>>;
    text: string;
}

const ActionButton: React.FC<IActionButtonProps> = ({
                                                        className,
                                                        Icon,
                                                        text,
                                                        ...props
                                                    }) => {
    return (
        <button
            {...props}
            className={twMerge(
                "flex flex-col w-fit py-5 shadow-xl px-6 shrink-0 grow-0 items-center lg:space-x-3 bg-white text-white",
                className,
            )}
        >
            <div className="p-8 bg-grey-150">
                <div className="flex items-center justify-center rounded-2xl bg-gradient-radial p-4">
                    <Icon className="h-8 w-8"/>
                </div>
            </div>
            <div className="flex space-x-1 items-center mt-3 space-x-3">
                <span className="text-xs lg:text-sm font-medium text-black">{text}</span>
                <Image width={50} height={50} src={"/action-arrow.svg"} alt={"Arrow-indicator"} className="w-5 h-auto" />
            </div>
        </button>
    );
};
export default ActionButton;
