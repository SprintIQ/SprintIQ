import DashboardContainer from "@src/components/atoms/DashboardContainer";
import DashboardLayout from "@src/components/atoms/DashboardLayout";
import { type Routes } from "@src/utils/constants/constants";
import { type NextPage } from "next";

interface DashboardProps {
  section: Routes;
}
const Dashboard: NextPage<DashboardProps> = props => {
  return (
    <DashboardLayout>
      <DashboardContainer currentSection={props.section} />
    </DashboardLayout>
  );
};

Dashboard.getInitialProps = async ctx => {
  const { section } = ctx.query as { section: Routes };
  return { section };
};

export default Dashboard;
