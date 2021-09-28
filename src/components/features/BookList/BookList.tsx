import BookTile from "../BookTile/BookTile";
import { BookListStyled } from "./BookList.styles";

type BookListProps = {
  books?: IBook[] | null;
};

const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <BookListStyled>
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
