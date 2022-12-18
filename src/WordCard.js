import { Button, Card, Collapse, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import CancelIcon from "@mui/icons-material/Cancel";
import PlayButton from "./PlayButton";
import { WordsContext } from "./ContextProvider";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function WordCard({ word }) {
  const { modal, setModal, data, setData, page } = useContext(WordsContext);
  const [expand, setExpand] = useState(false);

  const handleModal = (word) => {
    setData(word);
    setModal(!modal);
  };

  const handleExpand = () => {
    setExpand(!expand);
  };
  return (
    <Card
      key={word.word}
      className="word-card"
      variant="outlined"
      // onClick={() => handleModal(word)}
    >
      <div className="card-header">
        <p className="word">{word.word}</p>
        <Button onClick={handleExpand} endIcon={<ExpandMoreIcon />} />
        <PlayButton word={word.word} className="play-button" />
      </div>
      <Collapse in={expand}>
        <Typography sx={{marginBottom:2}}>{word.meaning}</Typography>
      </Collapse>
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
