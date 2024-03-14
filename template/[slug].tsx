import * as React from "react";
import type { NextPage, NextPageContext } from "next";
import { DashboardLayout } from "@src/components";

export interface Page {
  blockName: string;
}

const Page: NextPage<Page> = ({ blockName }) => {
  return <DashboardLayout>blockName</DashboardLayout>;
};
Page.getInitialProps = async ({ query }: NextPageContext): Promise<Page> => {
  const { blockName } = query as { blockName: string};
  return { blockName };
};
export default Page;
