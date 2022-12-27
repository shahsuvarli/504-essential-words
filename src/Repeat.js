import { Button, Collapse } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { WordsContext } from "./ContextProvider";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

  const handleRepeat = (e) => {
    let result = window.confirm(
      `Do you know the meaning of ${e.target.innerText}`
    );
    if (result) {
      let newArr = [];
      let newWord = words.map((lesson) =>
        lesson.words.find(
          (word) => word.word === e.target.innerText.toLowerCase()
        )
      )[0];
      console.log(newWord);
      newWord.status = "";
      setWords([...words]);
      setRepeat([...words]);
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
        {words.map((word) =>
          word.words
            .filter((word) => word.status === "repeat")
            .map((item, index) => (
              <Button
                key={index}
                className="repeat-text"
                variant="outlined"
                onClick={handleRepeat}
              >
                {item.word}
              </Button>
            ))
        )}
      </Collapse>
    </div>
  );
}

export default Repeat;
