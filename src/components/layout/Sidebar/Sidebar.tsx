import { useState, useContext } from "react";
import { SidebarStyled } from "./Sidebar.styles";
import { StoreContext } from "../../../store/StoreProvider";

import { BiSort } from "react-icons/bi";
import { GrUserExpert } from "react-icons/gr";
import { BsBookmarkDash, BsBookmarkCheck } from "react-icons/bs";
import { GiCheckMark } from "react-icons/gi";
import { CgUnavailable } from "react-icons/cg";
import {
  FaSortAlphaUp,
  FaSortAlphaDownAlt,
  FaSortNumericDownAlt,
  FaSortNumericUp,
  FaUserSecret
} from "react-icons/fa";

const Sidebar = () => {
  let { isLogged, setIsLogged } = useContext(StoreContext);

  return (
    <SidebarStyled>
      <ul>
        <li>
          <h3>Sortowanie</h3>
          <span>
            <BiSort />
          </span>
        </li>
        <li>
          <p>Po nazwisku autora</p>
          <span>{isLogged ? <FaSortAlphaUp /> : <FaSortAlphaDownAlt />}</span>
        </li>
        <li>
          <p>Po imieniu autora</p>
          <span>{isLogged ? <FaSortAlphaUp /> : <FaSortAlphaDownAlt />}</span>
        </li>
        <li>
          <p>Po ilości stron książki</p>
          <span>
            {isLogged ? <FaSortNumericUp /> : <FaSortNumericDownAlt />}
          </span>
        </li>
      </ul>
      {isLogged ? (
        <ul>
          <li>
            <h3>Twoje filtry</h3>
            <span>
              <FaUserSecret />
            </span>
          </li>

          <li>
            <p>Stan ukończenia</p>
            <span>{isLogged ? <BsBookmarkCheck /> : <BsBookmarkDash />}</span>
          </li>
          <li>
            <p>Dostępność</p>
            <span>{isLogged ? <GiCheckMark /> : <CgUnavailable />}</span>
          </li>
        </ul>
      ) : null}
    </SidebarStyled>
  );
};

export default Sidebar;
