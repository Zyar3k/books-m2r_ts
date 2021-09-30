import { useContext } from "react";
import { StoreContext } from "../../../store/StoreProvider";

import { BiSort } from "react-icons/bi";

import { BsBookmarkDash, BsBookmarkCheck } from "react-icons/bs";
import { CgUnavailable } from "react-icons/cg";
import {
  FaSortAlphaUp,
  FaSortAlphaDownAlt,
  FaSortNumericDownAlt,
  FaSortNumericUp,
  FaUserSecret
} from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { ImStatsBars } from "react-icons/im";

import {
  SidebarStyled,
  SidebarTitleStyled,
  SidebarItemStyled
} from "./Sidebar.styles";

const Sidebar = () => {
  let { toggleLog, isLogged } = useContext(StoreContext) as ContextType;

  return (
    <SidebarStyled>
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
          <span>
            {isLogged ? <FaSortNumericUp /> : <FaSortNumericDownAlt />}
          </span>
        </SidebarItemStyled>
      </ul>
      {isLogged ? (
        <>
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
        </>
      ) : null}
    </SidebarStyled>
  );
};

export default Sidebar;
