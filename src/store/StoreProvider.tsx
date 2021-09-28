import { createContext, useEffect, useState } from "react";

import request from "../helpers/request";

export const StoreContext = createContext<ContextType | null>(null);

const StoreProvider = ({ children }: any) => {
  const [books, setBooks] = useState<IBook[]>([]);

  const [data, setData] = useState<IBook[]>([]);
  const [isLogged, setIsLogged] = useState(false);
  // const [isLogged, setIsLogged] = useState(true);

  const fetchData = async () => {
    const { data } = await request.get("/books");

    setBooks(data);
    setData(data);
  };

  const toggleLog = () => {
    setIsLogged(!isLogged);
  };

  const listFilter = (e: React.FormEvent<HTMLInputElement>) => {
    // const listName = e.currentTarget.name;
    const listName = e.currentTarget.value;
    console.log(e.currentTarget.name);
    console.log(e.currentTarget.value);
    let array;

    switch (listName) {
      case "ama":
        array = data?.filter((item) => item.ama === true);
        return setBooks(array);
      case "bbc":
        array = data?.filter((item) => item.bbc === true);
        return setBooks(array);
      case "emp":
        array = data?.filter((item) => item.emp === true);
        return setBooks(array);
      case "gan":
        array = data?.filter((item) => item.gan === true);
        return setBooks(array);
      case "pozy":
        array = data?.filter((item) => item.pozy === true);
        return setBooks(array);

      default:
        return setBooks(data);
    }
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
