import { Button, Card } from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
import CancelIcon from '@mui/icons-material/Cancel';

function WordCard({ word }) {
  return (
    <Card key={word.word} className="word-card" variant="outlined">
      <p className="word">{word.word}</p>
      <p className="meaning">{word.meaning}</p>
      <div className="buttons">
        <Button color="error" variant="outlined" endIcon={<CancelIcon/>}>
          NOT YET
        </Button>
        <Button size="medium" color="primary" variant="contained" endIcon={<SendIcon />}>
          DONE
        </Button>
      </div>
    </Card>
  );
}

export default WordCard;
