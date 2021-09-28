import { useContext } from "react";

import { StoreContext } from "../../../store/StoreProvider";
import BookList from "../../features/BookList/BookList";

import { MainViewStyled } from "./MainView.styles";

const MainView: React.FC = () => {
  const { books } = useContext(StoreContext) as ContextType;

  console.log("MainView: ", books);
  console.log(books?.length);

  return (
    <MainViewStyled>
      <BookList books={books} />
    </MainViewStyled>
  );
};

export default MainView;
