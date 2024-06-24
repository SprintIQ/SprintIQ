import * as React from "react";
import { ImSpinner8 } from "react-icons/im";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ISpinnerProps {}

const Spinner: React.FC<ISpinnerProps> = (props) => {
  return <ImSpinner8 size={50} className="animate-spin duration-1000" />;
};

const CenteredSpinner: React.FC<ISpinnerProps> = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
      <Spinner />
    </div>
  );
};

export default CenteredSpinner;
