import styled from "styled-components";

export const SidebarStyled = styled.aside`
  color: #eabf9f;
  background: #290001;
  width: 250px;
  padding: 10px 20px;
  position: fixed;
  top: 80px;
  bottom: 0;

  ul {
    margin-bottom: 16px;
    list-style: none;

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #c87941;

      :first-of-type {
        border-bottom: 3px solid #c87941;
      }
    }
  }
`;

export const SidebarTitleStyled = styled.li`
  padding: 10px 0;
  text-transform: uppercase;

  span {
    width: 50px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const SidebarItemStyled = styled.li`
  flex-wrap: wrap;
  padding: 8px 0;

  h4 {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  p {
    padding: 4px 0;
  }
  span {
    width: 50px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
