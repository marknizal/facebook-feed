import type { FC } from "react";

import Layout from "../components/common/layout";
import Socials from "../containers/socials";
import UserShortcuts from "../containers/user-shortcuts";
import Footer from "../components/common/footer";
import Contacts from "../containers/contacts";
import Birthdays from "../containers/birthdays";
import Upload from "../containers/news-feed/upload";
import Stories from "../containers/news-feed/stories";

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
      rightSide={
        <>
          <Birthdays />
          <Contacts />
        </>
      }
    >
      <Upload />
      <Stories />
    </Layout>
  );
};

export default Homepage;
