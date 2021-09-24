import { ContentStyled } from "./Content.styles";

const Content: React.FC = ({ children }) => {
  return <ContentStyled>{children}</ContentStyled>;
};

export default Content;
