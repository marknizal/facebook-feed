import type { FC } from "react";

import Layout from "../components/common/layout";
import Socials from "../containers/socials";
import UserShortcuts from "../containers/user-shortcuts";
import Footer from "../components/common/footer";

const Homepage: FC = () => {
  return (
    <Layout
      leftSide={
        <>
          <Socials />
          <UserShortcuts />
          <Footer />
        </>
      }
    >
      <h1></h1>
    </Layout>
  );
};

export default Homepage;
