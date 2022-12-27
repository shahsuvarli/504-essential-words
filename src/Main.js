import React, { useContext } from "react";
import { WordsContext } from "./ContextProvider";
import WordCard from "./WordCard";
import Pagination from "./Pagination";
import Arrows from "./Arrows";
import { Typography } from "@mui/material";
import Repeat from "./Repeat";

function Main() {
  const { words, page } = useContext(WordsContext);

  return (
    <div className="container">
      <Typography variant="h4" style={{ textAlign: "center", marginTop: 20 }}>
        504 Essential Words
      </Typography>
      <Pagination />
      <Repeat />
      <div className="cards-container">
        {words[page - 1].words
          .filter((word) => word.status === "")
          .map((word) => {
            return <WordCard word={word} key={word.word} />;
          })}
      </div>
      <Arrows />
    </div>
  );
}

export default Main;
