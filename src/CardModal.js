import { Card } from "@mui/material";
import React, { useContext } from "react";
import { WordsContext } from "./ContextProvider";
import WordCard from "./WordCard";

function CardModal() {
  const { modal, setModal, data, setData } = useContext(WordsContext);
  const handleModal = () => {
    setModal(!modal);
  };
  return (
    <div
      className="modal-container"
      style={{ display: modal ? "flex" : "none" }}
      onClick={handleModal}
    >
      <Card sx={{ height: 100, width: 100 }} />
    </div>
  );
}

export default CardModal;
