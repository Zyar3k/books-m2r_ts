import { StyleHeader, HeaderWrapper, LogoWrapper } from "./Header.styles";
import { GiBookshelf, GiBookmark } from "react-icons/gi";

const Header = () => {
  return (
    <StyleHeader>
      <HeaderWrapper>
        <LogoWrapper>
          <h2>
            MUST
            <span>2</span>
            READ
          </h2>
        </LogoWrapper>
        <ul>
          <li>Pełna lista</li>
          <li>Amazon</li>
          <li>BBC</li>
          <li>Empik</li>
          <li>Gandalf</li>
          <li>Pozycje</li>
        </ul>
      </HeaderWrapper>
    </StyleHeader>
  );
};

export default Header;
