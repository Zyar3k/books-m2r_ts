import { createContext, useEffect, useState } from "react";

import request from "../helpers/request";

export const StoreContext = createContext<ContextType | null>(null);

const StoreProvider = ({ children }: any) => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [isLogged, setIsLogged] = useState(false);
  // const [isLogged, setIsLogged] = useState(true);

  const fetchData = async () => {
    const { data } = await request.get("/books");

    setBooks(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StoreContext.Provider value={{ books, isLogged }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
