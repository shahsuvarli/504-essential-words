import React, { useContext, useState } from "react";
import { WordsContext } from "./ContextProvider";
import WordCard from "./WordCard";
import CardModal from "./CardModal";
import Pagination from "./Pagination";
import Arrows from "./Arrows";

function Main() {
  const { words, page } = useContext(WordsContext);

  return (
    <div className="container">
      <CardModal />
      <h1 style={{ textAlign: "center" }}>504 Essential Words</h1>
      <Pagination />
      <div className="cards-container">
        {words.slice(page * 12, page * 12 + 12).map((word) => (
          <WordCard word={word} key={word.word} />
        ))}
      </div>
      <Arrows />
      {page}
    </div>
  );
}

export default Main;
