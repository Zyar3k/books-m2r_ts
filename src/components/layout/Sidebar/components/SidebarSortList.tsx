import { useContext } from "react";
import { StoreContext } from "../../../../store/StoreProvider";

import { BiSort } from "react-icons/bi";
import {
  FaSortAlphaUp,
  FaSortAlphaDownAlt,
  FaSortNumericDownAlt,
  FaSortNumericUp
} from "react-icons/fa";

import { SidebarTitleStyled, SidebarItemStyled } from "../Sidebar.styles";

const SidebarSortList = () => {
  let { toggleLog, isLogged } = useContext(StoreContext) as ContextType;
  return (
    <ul>
      <SidebarTitleStyled>
        <h3>Sortowanie</h3>
        <span>
          <BiSort />
        </span>
        <button onClick={toggleLog}>Change</button>
      </SidebarTitleStyled>
      <SidebarItemStyled>
        <p>Po nazwisku autora</p>
        <span>{isLogged ? <FaSortAlphaUp /> : <FaSortAlphaDownAlt />}</span>
      </SidebarItemStyled>
      <SidebarItemStyled>
        <p>Po imieniu autora</p>
        <span>{isLogged ? <FaSortAlphaUp /> : <FaSortAlphaDownAlt />}</span>
      </SidebarItemStyled>
      <SidebarItemStyled>
        <p>Po ilości stron książki</p>
        <span>{isLogged ? <FaSortNumericUp /> : <FaSortNumericDownAlt />}</span>
      </SidebarItemStyled>
    </ul>
  );
};

export default SidebarSortList;
