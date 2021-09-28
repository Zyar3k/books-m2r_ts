import { BookTileStyled } from "./BookTile.styles";

type BookTileProps = {
  book: IBook | null;
};

const BookTile: React.FC<BookTileProps> = ({ book }) => {
  const name = book?.author.name;
  const lastName = book?.author.lastName;

  return (
    <BookTileStyled>
      <h3>{book?.title}</h3>
      <em>
        {name} {lastName}
      </em>
    </BookTileStyled>
  );
};

export default BookTile;
