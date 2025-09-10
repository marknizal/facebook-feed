import type { FC } from "react";
import { BIRTHDAYS } from "../data";

import List from "../../components/common/list";

const Birthdays: FC = () => {
  return <List title="Birthdays" items={BIRTHDAYS} border avatar="square" />;
};

export default Birthdays;
