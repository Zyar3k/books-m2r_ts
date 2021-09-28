import { useContext } from "react";
import BookTile from "../BookTile/BookTile";
import { BookListStyled } from "./BookList.styles";

import { StoreContext } from "../../../store/StoreProvider";

type BookListProps = {
  books?: IBook[] | null;
};

const BookList: React.FC<BookListProps> = ({ books }) => {
  const { listFilter } = useContext(StoreContext) as ContextType;

  return (
    <BookListStyled>
      <div style={{ width: "100%" }}>
        <button onClick={listFilter} name='all'>
          PEŁNA LISTA
        </button>
        <button onClick={listFilter} name='ama'>
          AMAZON
        </button>
        <button onClick={listFilter} name='bbc'>
          BBC
        </button>
        <button onClick={listFilter} name='emp'>
          EMPIK
        </button>
        <button onClick={listFilter} name='gan'>
          GANDALF
        </button>
        <button onClick={listFilter} name='pozy'>
          POZYCJE
        </button>
      </div>
      {books?.length === 0 ? (
        "Wczytuję"
      ) : (
        <>
          {books?.map((book, index) => (
            <BookTile key={index} book={book} />
          ))}
        </>
      )}
    </BookListStyled>
  );
};

export default BookList;
