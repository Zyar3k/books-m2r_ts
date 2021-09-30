import { useContext } from "react";
import { StoreContext } from "../../../../store/StoreProvider";

import { BsBookmarkDash, BsBookmarkCheck } from "react-icons/bs";
import { CgUnavailable } from "react-icons/cg";
import { FaUserSecret } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";

import { SidebarTitleStyled, SidebarItemStyled } from "../Sidebar.styles";

const SidebarSortUser = () => {
  let { isLogged } = useContext(StoreContext) as ContextType;
  return (
    <ul>
      <SidebarTitleStyled>
        <h3>Twoje filtry</h3>
        <span>
          <FaUserSecret />
        </span>
      </SidebarTitleStyled>
      <SidebarItemStyled>
        <p>Stan ukończenia</p>
        <span>{isLogged ? <BsBookmarkCheck /> : <BsBookmarkDash />}</span>
      </SidebarItemStyled>
      <SidebarItemStyled>
        <p>Dostępność</p>
        <span>{isLogged ? <GiCheckMark /> : <CgUnavailable />}</span>
      </SidebarItemStyled>
    </ul>
  );
};

export default SidebarSortUser;
