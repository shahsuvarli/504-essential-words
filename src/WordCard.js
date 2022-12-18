import { Button, Card } from "@mui/material";
import React, { useContext } from "react";
import SendIcon from "@mui/icons-material/Send";
import CancelIcon from "@mui/icons-material/Cancel";
import PlayButton from "./PlayButton";
import { WordsContext } from "./ContextProvider";

function WordCard({ word }) {
  const { modal, setModal, data, setData, page } = useContext(WordsContext);

  const handleModal = (word) => {
    setData(word)
    setModal(!modal);
  };
  return (
    <Card
      key={word.word}
      className="word-card"
      variant="outlined"
      onClick={()=>handleModal(word)}
    >
      <div className="card-header">
        <p className="word">{word.word}</p>
        <PlayButton word={word.word} className="play-button" />
      </div>
      {/* <p className="meaning">{word.meaning}</p> */}
      <div className="buttons">
        <Button color="error" variant="outlined" endIcon={<CancelIcon />}>
          NOT YET
        </Button>
        <Button
          size="medium"
          color="primary"
          variant="contained"
          endIcon={<SendIcon />}
        >
          DONE
        </Button>
      </div>
    </Card>
  );
}

export default WordCard;
