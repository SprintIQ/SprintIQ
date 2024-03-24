import { type PrismaProfile } from "@src/server/api/routers/auth";
import * as React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IHomeProps {
  currentProfile: PrismaProfile;
}

const Home: React.FC<IHomeProps> = props => {
  return <section>Home</section>;
};
export default Home;
