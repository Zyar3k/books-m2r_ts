type BookListProps = {
  books?: IBook[] | null;
};

const BookList: React.FC<BookListProps> = ({ books }) => {
  // console.log("booklis: ", books);
  return (
    <div>
      {books?.map((book, index) => (
        <p key={index}>{book.title}</p>
      ))}
    </div>
  );
};

export default BookList;
