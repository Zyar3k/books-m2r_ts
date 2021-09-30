import { useContext } from "react";
import SidebarSortList from "./components/SidebarSortList";
import SidebarSortUser from "./components/SidebarSortUser";
import SidebarUserStats from "./components/SidebarUserStats";

import { StoreContext } from "../../../store/StoreProvider";

import { SidebarStyled } from "./Sidebar.styles";

const Sidebar = () => {
  let { isLogged } = useContext(StoreContext) as ContextType;

  return (
    <SidebarStyled>
      <SidebarSortList />
      {isLogged ? (
        <>
          <SidebarSortUser />
          <SidebarUserStats />
        </>
      ) : null}
    </SidebarStyled>
  );
};

export default Sidebar;
