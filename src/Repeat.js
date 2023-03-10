import { Button, Collapse } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { WordsContext } from "./ContextProvider";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import empty from "../src/assets/images/empty.jpg";

function Repeat() {
  const { repeat, setRepeat, words, setWords } = useContext(WordsContext);
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    let newArr = [];
    words.map((lesson) =>
      lesson.words
        .filter((word) => word.status === "repeat")
        .map((word) => newArr.push(word.word))
    );
    setRepeat([...newArr]);
  }, [words, setRepeat]);

  const handleCollapse = () => {
    setExpand(!expand);
  };

  const handleRepeat = (e, wordIndex) => {
    let result = window.confirm(
      `Do you know the meaning of ${e.target.innerText}?`
    );
    if (result) {
      let word = words.map((lesson, index) =>
        lesson.words.find(
          (word) => word.word === e.target.innerText.toLowerCase()
        )
      )[wordIndex];
      word.status = "";
      setWords([...words]);
      localStorage.setItem("words", JSON.stringify(words));
    }
  };

  return (
    <div className="repeat-container">
      <Button
        variant="contained"
        className="repeat-button"
        onClick={handleCollapse}
        endIcon={<ExpandMoreIcon />}
        sx={{ height: 40, fontSize: 17 }}
      >
        Repeat ({repeat.length})
      </Button>
      <Collapse in={expand} className="repeat-collapse-container">
        {repeat.length ? (
          words.map((word, wordIndex) =>
            word.words
              .filter((word) => word.status === "repeat")
              .map((item, itemIndex) => (
                <Button
                  key={itemIndex}
                  className="repeat-text"
                  variant="outlined"
                  onClick={(e) => handleRepeat(e, wordIndex)}
                >
                  {item.word}
                </Button>
              ))
          )
        ) : (
          <img width="100%" src={empty} alt="empty" />
        )}
      </Collapse>
    </div>
  );
}

export default Repeat;
