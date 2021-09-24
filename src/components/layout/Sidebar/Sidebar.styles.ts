import styled from "styled-components";

export const SidebarStyled = styled.aside`
  color: #eabf9f;
  background: #290001;
  width: 250px;

  padding: 10px 20px;

  ul {
    margin-bottom: 30px;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #c87941;

      :first-of-type {
        margin-bottom: 14px;
        border-bottom: 3px solid #c87941;
      }

      h3 {
        padding: 10px 0;
      }

      p {
        padding: 10px 0;
      }

      span {
        position: relative;
        background: teal;
        width: 50px;
        font-size: 20px;

        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          position: absolute;
        }
      }
    }
  }
`;
