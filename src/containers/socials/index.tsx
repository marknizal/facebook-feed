import type { FC } from "react";
import { SOCIAL_ITEMS } from "../data";

import List from "../../components/common/list";

const Socials: FC = () => {
  return <List items={SOCIAL_ITEMS} length={8} border />;
};

export default Socials;
