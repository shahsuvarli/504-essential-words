import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { WordsContext } from "./ContextProvider";
import WordCard from "./WordCard";

function Main() {
  const { words } = useContext(WordsContext);
  const [end, setEnd] = useState(12);

  const seeMore = () => {
    setEnd(end + 12);
  };
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>504 Essential Words</h1>
      <div className="buttons">
        <button>DONE</button>
        <button>NOT YET</button>
      </div>
      <div className="cards-container">
        {words.slice(0, end).map((word) => (
          <WordCard word={word} key={word.word} />
        ))}
      </div>
      <Button id="see-more" onClick={seeMore} variant="contained">
        see more
      </Button>
    </div>
  );
}

export default Main;
