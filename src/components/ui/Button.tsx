import * as React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button: React.FC<IButtonProps> = ({ text, ...props }) => {
  return (
    <button {...props} className="rounded-full bg-secondary-700 px-8 py-4">
      {text}
    </button>
  );
};
export default Button;
