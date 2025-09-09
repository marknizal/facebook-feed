import type { FC } from "react";
import { SHORTCUTS } from "../data";

import List from "../../components/common/list";

const UserShortcuts: FC = () => {
  return (
    <List
      title="Your shortcuts"
      items={SHORTCUTS}
      length={5}
      border
      avatar="square"
    />
  );
};

export default UserShortcuts;
