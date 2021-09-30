import { useContext } from "react";
import { StoreContext } from "../../../../store/StoreProvider";

import { ImStatsBars } from "react-icons/im";

import { SidebarTitleStyled, SidebarItemStyled } from "../Sidebar.styles";

const SidebarUserStats = () => {
  let { books } = useContext(StoreContext) as ContextType;

  console.log(books?.length);

  return (
    <ul>
      <SidebarTitleStyled>
        <h3>Statystyki</h3>
        <span>
          <ImStatsBars />
        </span>
      </SidebarTitleStyled>
      <SidebarItemStyled>
        <h4>
          M2R
          <strong>346</strong>
        </h4>
      </SidebarItemStyled>
      <SidebarItemStyled>
        <h4>Amazon</h4>
        <p>Przeczytane</p>
        <span>11%</span>
      </SidebarItemStyled>
      <SidebarItemStyled>
        <h4>BBC</h4>
        <p>Przeczytane</p>
        <span>41%</span>
      </SidebarItemStyled>
      <SidebarItemStyled>
        <h4>Empik</h4>
        <p>Przeczytane</p>
        <span>19%</span>
      </SidebarItemStyled>
      <SidebarItemStyled>
        <h4>Gandalf</h4>
        <p>Przeczytane</p>
        <span>27%</span>
      </SidebarItemStyled>
      <SidebarItemStyled>
        <h4>Pozycje obowiązkowe</h4>
        <p>Przeczytane</p>
        <span>23%</span>
      </SidebarItemStyled>
    </ul>
  );
};

export default SidebarUserStats;
