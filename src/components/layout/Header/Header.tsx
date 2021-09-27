import ListSelection from "../../features/ListSelection/ListSelection";
import { StyleHeader, HeaderWrapper, LogoWrapper } from "./Header.styles";

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
        <ListSelection />
      </HeaderWrapper>
    </StyleHeader>
  );
};

export default Header;
