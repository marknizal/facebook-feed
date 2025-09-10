import type { FC } from "react";
import { CONTACTS } from "../data";

import List from "../../components/common/list";

const Contacts: FC = () => {
  return (
    <List
      title="Contacts"
      avatar="circle"
      items={CONTACTS}
      border
      length={15}
    />
  );
};

export default Contacts;
