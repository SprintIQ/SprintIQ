import { ProfileContext } from "@src/provider/ProfileProvider";
import { Routes } from "@src/utils/constants/constants";
import * as React from "react";

import Game from "./Game";
import Home from "./Home";
import JoinGame from "./JoinGame";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IDashboardContainerProps {
  currentSection: Routes;
  gameId: string;
  page: string;
}

const DashboardContainer: React.FC<IDashboardContainerProps> = ({
  currentSection,
  gameId,
  page
}) => {
  const { currentProfile } = React.useContext(ProfileContext);

  const renderSelected = () => {
    switch (currentSection) {
      case Routes.HOME:
        return <Home />;
      case Routes.JOIN:
        return <JoinGame />;
      case Routes.GAME:
        return <Game gameId={gameId} page={page} />;
    }
  };
  return <section className="h-fulll w-full">{renderSelected()}</section>;
};
export default DashboardContainer;
