import React, { createContext, useState } from "react";
import data from "./assets/data/words.json";

export const WordsContext = createContext();

function ContextProvider({ children }) {
  const [words, setWords] = useState(
    JSON.parse(localStorage.getItem("words")) || data
  );
  const [page, setPage] = useState(1);
  const [repeat, setRepeat] = useState([]);

  return (
    <WordsContext.Provider
      value={{
        data,
        words,
        setWords,
        page,
        setPage,
        repeat,
        setRepeat,
      }}
    >
      {children}
    </WordsContext.Provider>
  );
}

export default ContextProvider;
