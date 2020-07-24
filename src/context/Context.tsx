import React, { createContext, useState, useContext } from "react";
import { AppContext, Book } from "../types";

const Context = createContext<AppContext>({
  books: [],
  setBooks: () => {},
});

interface Props {
  children: React.ReactNode;
}

const Provider = ({ children }: Props) => {
  const [results, setResults] = useState<Book[] | []>([]);
  const setBooks = (value: Book[] | []) => {
    setResults(value);
  };

  const state = {
    books: results,
    setBooks,
  };
  return <Context.Provider value={state}>{children}</Context.Provider>;
};

const useAppContext = () => useContext(Context);
export { useAppContext, Provider };
