import * as React from "react";
import { twMerge } from "tailwind-merge";

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
      className={twMerge("flex items-center space-x-4", className)}
    >
      <div className="flex items-center justify-center rounded-2xl bg-gradient-radial px-3.5 py-2">
        <Icon className="h-8 w-8" />
      </div>
      <span>{text}</span>
    </button>
  );
};
export default ActionButton;
