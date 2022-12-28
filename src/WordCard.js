import PropTypes from "prop-types";
import { Button, Card, Collapse, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import CancelIcon from "@mui/icons-material/Cancel";
import PlayButton from "./PlayButton";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { WordsContext } from "./ContextProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function WordCard({ word }) {
  const { words, setWords, page } = useContext(WordsContext);
  const [expand, setExpand] = useState(false);
  const [value, setValue] = useState(false);

  const handleToastify = (message, status) => {
    const config = {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000,
    };
    if (status === "not-yet") {
      toast.warn(`${word.word.toUpperCase()} ${message}`, config);
    } else if (status === "done") {
      toast.success(`${word.word.toUpperCase()} ${message}`, config);
    }
  };

  const handleNotYet = () => {
    setValue(true);
    setTimeout(() => {
      let newWord = words[page - 1].words.find(
        (item) => item.word === word.word
      );
      newWord.status = "repeat";
      setWords([...words]);
      localStorage.setItem("words", JSON.stringify(words));
    }, 2000);
    handleToastify("added to repeat list!", "not-yet");
  };

  const handleDone = () => {
    setValue(true);
    setTimeout(() => {
      let newWord = words[page - 1].words.find(
        (item) => item.word === word.word
      );
      newWord.status = "done";
      localStorage.setItem("words", JSON.stringify(words));
      setWords([...words]);
    }, 2000);
    handleToastify("completed!", "done");
  };

  const handleExpand = () => {
    setExpand(!expand);
  };

  return (
    <Card key={word.word} className={"word-card"} variant="outlined">
      <ToastContainer style={{ zIndex: 20 }} />
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
          disabled={value}
        >
          NOT YET
        </Button>
        <Button
          size="medium"
          color="primary"
          variant="contained"
          endIcon={<SendIcon />}
          onClick={handleDone}
          disabled={value}
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
