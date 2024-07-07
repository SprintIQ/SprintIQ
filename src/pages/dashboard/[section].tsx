import DashboardContainer from "@src/components/atoms/DashboardContainer";
import DashboardLayout from "@src/components/atoms/DashboardLayout";
import { type Routes } from "@src/utils/constants/constants";
import { type NextPage } from "next";

interface DashboardProps {
  section: Routes;
  gameId: string;
  page: string;
  state: string;
}
const Dashboard: NextPage<DashboardProps> = props => {
  return (
    <DashboardLayout>
      <DashboardContainer
        currentSection={props.section}
        gameId={props.gameId}
        page={props.page}
        state={props.state}
      />
    </DashboardLayout>
  );
};

Dashboard.getInitialProps = async ctx => {
  const { section, gameId, page, state } = ctx.query as {
    section: Routes;
    gameId: string;
    page: string;
    state: string;
  };
  return { section, gameId, page, state };
};

export default Dashboard;
