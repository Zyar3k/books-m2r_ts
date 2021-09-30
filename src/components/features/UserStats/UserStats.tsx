import React, { useState } from "react";

import { FaUserSecret } from "react-icons/fa";
import { BsBookmarkDash, BsBookmarkCheck } from "react-icons/bs";
import { GiCheckMark } from "react-icons/gi";
import { CgUnavailable } from "react-icons/cg";

const UserStats = () => {
  const [isLogged, setIsLogged] = useState(true);

  return (
    <ul>
      <li>
        <h2>Statystyki</h2>
        <span>
          <FaUserSecret />
        </span>
      </li>

      <li>
        <h3>
          M2R
          <strong>346</strong>
        </h3>
      </li>
      <li>
        <h3>Amazon</h3>
        <p>Przeczytane</p>
        <p>11</p>
        <p>11%</p>
      </li>
      <li>
        <h3>BBC</h3>
        <p>Przeczytane</p>
        <p>41</p>
        <p>41%</p>
      </li>
      <li>
        <h3>Empik</h3>
        <p>Przeczytane</p>
        <p>19</p>
        <p>19%</p>
      </li>
      <li>
        <h3>Gandalf</h3>
        <p>Przeczytane</p>
        <p>27</p>
        <p>27%</p>
      </li>
      <li>
        <h3>Pozycje obowiązkowe</h3>
        <p>Przeczytane</p>
        <p>58</p>
        <p>23%</p>
      </li>
    </ul>
  );
};

export default UserStats;
