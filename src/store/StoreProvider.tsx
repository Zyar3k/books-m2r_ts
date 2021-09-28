import { createContext, useEffect, useState } from "react";

import request from "../helpers/request";

export const StoreContext = createContext<ContextType | null>(null);

const StoreProvider = ({ children }: any) => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [displayList, setDisplayList] = useState<IBook[]>(books);
  const [isLogged, setIsLogged] = useState(false);
  // const [isLogged, setIsLogged] = useState(true);

  const fetchData = async () => {
    const { data } = await request.get("/books");

    setBooks(data);
  };

  const toggleLog = () => {
    setIsLogged(!isLogged);
  };

  const listFilter = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.name;

    const testArray = [...books];
    console.log(testArray.length);
    // console.log(newValue);
    // console.log(e.target);
    // let array;
    // array = books?.filter((item) => item.ama === true);

    if (newValue === "ama") {
      console.log("books leng bef: ", books.length);
      setBooks(books);
      const array = testArray?.filter((item) => item.ama === true);
      console.log("books leng after: ", books.length);
      return setBooks(array);
    } else if (newValue === "bbc") {
      setBooks((prev) => prev);
      const array = testArray?.filter((item) => item.bbc === true);
      return setBooks(array);
    }

    // switch (newValue) {
    //   case "ama":
    //     return books?.filter((item) => item.ama === true);
    //   case "bbc":
    //     return console.log("bbc");
    //   case "emp":
    //     return console.log("emp");
    //   case "gan":
    //     return console.log("gan");
    //   case "pozy":
    //     return console.log("pozy");
    //   default:
    //     return console.log("all");
    // }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StoreContext.Provider value={{ books, listFilter, isLogged, toggleLog }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
