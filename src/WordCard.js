import PropTypes from "prop-types";
import { Button, Card, Collapse, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import CancelIcon from "@mui/icons-material/Cancel";
import PlayButton from "./PlayButton";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { WordsContext } from "./ContextProvider";

function WordCard({ word }) {
  const { words, setWords, page } = useContext(WordsContext);
  const [expand, setExpand] = useState(false);

  const handleDone = () => {
    let newWord = words[page - 1].words.find((item) => item.word === word.word);
    newWord.status = "done";
    localStorage.setItem("words", JSON.stringify(words));
    setWords([...words]);
  };

  const handleNotYet = () => {
    let newWord = words[page - 1].words.find((item) => item.word === word.word);
    newWord.status = "repeat";
    setWords([...words]);
    localStorage.setItem("words", JSON.stringify(words));
  };

  const handleExpand = () => {
    setExpand(!expand);
  };

  return (
    <Card
      key={word.word}
      className={`word-card ${word.show}`}
      variant="outlined"
    >
      <div className="card-header">
        <p className="word">{word.word}</p>
        {expand ? (
          <AiOutlineUp className="see-more-button" onClick={handleExpand} />
        ) : (
          <AiOutlineDown className="see-more-button" onClick={handleExpand} />
        )}
        <PlayButton word={word.word} className="play-button" expand={expand} />
      </div>
      <Collapse in={expand}>
        <Typography sx={{ marginBottom: 2 }}>{word.meaning}</Typography>
      </Collapse>
      <div className="buttons">
        <Button
          color="error"
          variant="outlined"
          endIcon={<CancelIcon />}
          onClick={handleNotYet}
        >
          NOT YET
        </Button>
        <Button
          size="medium"
          color="primary"
          variant="contained"
          endIcon={<SendIcon />}
          onClick={handleDone}
        >
          DONE
        </Button>
      </div>
    </Card>
  );
}

export default WordCard;

WordCard.propTypes = {
  word: PropTypes.object,
};
