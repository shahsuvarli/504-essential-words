import React, { useContext } from "react";
import { WordsContext } from "./ContextProvider";
import WordCard from "./WordCard";
import Pagination from "./Pagination";
import Arrows from "./Arrows";
import { Button, Typography } from "@mui/material";
import Repeat from "./Repeat";

function Main() {
  const { words, page, setWords, setRepeat, data } = useContext(WordsContext);

  const resetStore = () => {
    // setWords(JSON.parse(localStorage.getItem("source")) || words);
    setWords(data);
    setRepeat([]);
    localStorage.setItem("source", JSON.stringify(data));
  };

  return (
    <div className="container">
      <Button variant="contained" onClick={resetStore}>
        reset
      </Button>
      <Typography variant="h4" style={{ textAlign: "center", marginTop: 20 }}>
        504 Essential Words
      </Typography>
      <Pagination />
      <Repeat />
      <div className="cards-container">
        {words[page - 1].words
          .filter((word) => word.done === false)
          .map((word) => {
            return <WordCard word={word} key={word.word} />;
          })}
      </div>
      <Arrows />
    </div>
  );
}

export default Main;
