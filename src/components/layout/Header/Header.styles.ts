import styled from "styled-components";

export const StyleHeader = styled.header`
  padding: 10px;
  background: #290001;
  height: 80px;
  color: #dbcbbd;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`;

export const HeaderWrapper = styled.nav`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  height: 100%;
`;

export const LogoWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  width: 230px;

  h2 {
    font-size: 30px;
    font-weight: 900;

    span {
      color: #fff;
      text-shadow: 0 0 15px #fff;
    }
  }
`;
