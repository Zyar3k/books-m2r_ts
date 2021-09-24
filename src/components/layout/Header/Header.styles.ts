import styled from "styled-components";

export const StyleHeader = styled.header`
  padding: 10px;
  background: #290001;
  height: 80px;
  color: #dbcbbd;
`;

export const HeaderWrapper = styled.nav`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  height: 100%;

  ul {
    display: flex;
    margin-left: 10px;
    padding: 0 10px;
    flex: 1;
    justify-content: space-between;
    list-style: none;
    letter-spacing: 1px;
    color: #eabf9f;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      width: 100%;
      height: 100%;
      text-transform: uppercase;
      font-weight: 700;

      &:hover {
        color: #fff;
        text-shadow: 0 0 15px #fff;
      }
    }
  }
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
