import type { FC } from "react";

import Layout from "../components/common/layout";
import Socials from "../containers/socials";

const Homepage: FC = () => {
  return (
    <Layout leftSide={<Socials />}>
      <h1>CONTENT</h1>
    </Layout>
  );
};

export default Homepage;
