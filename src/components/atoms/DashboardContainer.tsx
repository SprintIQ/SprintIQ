import { ProfileContext } from "@src/provider/ProfileProvider";
import { Routes } from "@src/utils/constants/constants";
import * as React from "react";

import Home from "./Home";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IDashboardContainerProps {
  currentSection: Routes;
}

const DashboardContainer: React.FC<IDashboardContainerProps> = ({
  currentSection,
}) => {
  const { currentProfile } = React.useContext(ProfileContext);

  const renderSelected = () => {
    switch (currentSection) {
      case Routes.GAME:
        return <Home />;
    }
  };
  return <section>{renderSelected()}</section>;
};
export default DashboardContainer;
