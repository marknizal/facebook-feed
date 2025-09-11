import { lazy, Suspense, type FC } from "react";

import Layout from "../components/common/layout";
import { Loader } from "../components/shared";

const Socials = lazy(() => import("../containers/socials"));
const UserShortcuts = lazy(() => import("../containers/user-shortcuts"));
const Footer = lazy(() => import("../components/common/footer"));
const Contacts = lazy(() => import("../containers/contacts"));
const Birthdays = lazy(() => import("../containers/birthdays"));
const Upload = lazy(() => import("../containers/news-feed/upload"));
const Stories = lazy(() => import("../containers/news-feed/stories"));
const Post = lazy(() => import("../containers/news-feed/post"));

const Home: FC = () => {
  return (
    <Layout
      leftSide={
        <Suspense fallback={<Loader />}>
          <Socials />
          <UserShortcuts />
          <Footer />
        </Suspense>
      }
      rightSide={
        <Suspense fallback={<Loader />}>
          <Birthdays />
          <Contacts />
        </Suspense>
      }
    >
      <Suspense fallback={<Loader />}>
        <Upload />
        <Stories />
        <Post />
      </Suspense>
    </Layout>
  );
};

export default Home;
