import PropTypes from "prop-types";
import { Button, Card, Collapse, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import CancelIcon from "@mui/icons-material/Cancel";
import PlayButton from "./PlayButton";
import { WordsContext } from "./ContextProvider";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

function WordCard({ word }) {
  const { repeat, setRepeat, words, page } = useContext(WordsContext);
  const [expand, setExpand] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    localStorage.setItem("repeat", JSON.stringify(repeat));
  }, [repeat]);

  const handleDone = () => {
    let ind = words[page - 1].words.findIndex(
      (item) => item.word === word.word
    );
    console.log("ind", ind);
    words[page - 1].words[ind].done = true;
    console.log(words[page - 1].words[ind].word);
    // word.done = true;
    // setDone(true)
    localStorage.setItem("source", JSON.stringify(words));
    console.log(words);
  };

  const handleExpand = () => {
    setExpand(!expand);
  };

  const handleNotYet = () => {
    if (!repeat.includes(word.word)) {
      setRepeat([...repeat, word.word]);
      handleDone();
    }
  };

  return (
    <Card
      key={word.word}
      className="word-card"
      variant="outlined"
      // style={{ display: word.done ? "none" : "block" }}
      // onClick={() => handleModal(word)}
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
