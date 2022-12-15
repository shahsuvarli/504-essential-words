import React, { createContext, useState } from "react";
import source from "./words.json";

export const WordsContext = createContext();

function ContextProvider({ children }) {
  const [words, setWords] = useState(source);

  return (
    <WordsContext.Provider value={{ words, setWords }}>
      {children}
    </WordsContext.Provider>
  );
}

export default ContextProvider;
