import { Button } from "@mui/material";
import React, { useContext } from "react";
import { WordsContext } from "./ContextProvider";

function Reset() {
  const { words, setWords } = useContext(WordsContext);
  const handleReset = () => {
    let result = window.confirm("Do you want to reset?");
    if (result) {
      localStorage.setItem("words", JSON.stringify(""));
      words.map((lesson) => lesson.words.map((word) => (word.status = "")));
      setWords([...words]);
    }
  };
  return (
    <div className="reset-container">
      <Button fullWidth variant="outlined" onClick={handleReset}>
        reset
      </Button>
    </div>
  );
}

export default Reset;
