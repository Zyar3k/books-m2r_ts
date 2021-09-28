import styled from "styled-components";

export const ListSelectionStyled = styled.div`
  display: flex;
  margin-left: 30px;
  padding: 0 10px;
  flex: 1;
  justify-content: space-between;
  list-style: none;
  letter-spacing: 1px;
  color: #eabf9f;

  div {
    width: 100%;
    text-transform: uppercase;
    font-weight: 700;

    label {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: 100%;
      height: 100%;

      input {
        margin-right: 10px;
      }
    }

    &:hover {
      color: #fff;
      text-shadow: 0 0 15px #fff;
    }
  }

  /* li {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    width: 100%;
    height: 100%;
    text-transform: uppercase;
    font-weight: 700;


  } */
`;
