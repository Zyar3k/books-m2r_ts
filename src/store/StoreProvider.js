import { createContext, useEffect, useState } from "react";

import request from "../helpers/request";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [isLogged, setIsLogged] = useState(false);
  // const [isLogged, setIsLogged] = useState(true);

  const fetchData = async () => {
    const { data } = await request.get("/books");
    console.log(data);
    setBooks(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StoreContext.Provider value={{ books, setBooks, isLogged, setIsLogged }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
