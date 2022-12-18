import React, { createContext, useEffect, useState } from "react";
import source from "./words.json";

export const WordsContext = createContext();

function ContextProvider({ children }) {
  const [words, setWords] = useState(source);
  const [modal, setModal] = useState(false);
  const [data, setData] = useState();
  const [page, setPage] = useState(0);
  const [pages, setPas] = useState([]);

  useEffect(() => {
    for (let page = 0; page < 504 / 12; page++) {
      pages.push(page);
    }
  }, []);

  return (
    <WordsContext.Provider
      value={{
        words,
        setWords,
        modal,
        setModal,
        data,
        setData,
        pages,
        page,
        setPage,
      }}
    >
      {children}
    </WordsContext.Provider>
  );
}

export default ContextProvider;
