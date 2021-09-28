import { useContext } from "react";

import { StoreContext } from "../../../store/StoreProvider";
import BookList from "../../features/BookList/BookList";

import { MainViewStyled } from "./MainView.styles";

const MainView: React.FC = () => {
  const { books } = useContext(StoreContext) as ContextType;

  return (
    <MainViewStyled>
      <BookList books={books} />
    </MainViewStyled>
  );
};

export default MainView;
