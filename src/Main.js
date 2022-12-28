import React, { useContext } from "react";
import { WordsContext } from "./ContextProvider";
import WordCard from "./WordCard";
import Pagination from "./Pagination";
import Arrows from "./Arrows";
import { Button, Typography } from "@mui/material";
import Repeat from "./Repeat";
import Reset from "./Reset";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

function Main() {
  const { words, page } = useContext(WordsContext);

  return (
    <div className="container">
      <Typography className="app-name" variant="h4">
        504 Essential Words
        <span>
          <AutoStoriesIcon />
        </span>
      </Typography>
      <Pagination />
      <Repeat />
      <Reset />
      <div className="cards-container">
        {words[page - 1].words
          .filter((word) => word.status === "")
          .map((word) => (
            <WordCard word={word} key={word.word} />
          ))}
      </div>
      <Arrows />
      <Button
        className="copyright"
        target="_blank"
        href="https://shahsuvarli.com"
      >
        shahsuvarli.com
      </Button>
    </div>
  );
}

export default Main;
