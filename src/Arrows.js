import { Button } from "@mui/material";
import React, { useContext } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { WordsContext } from "./ContextProvider";

function Arrows() {
  const { page, setPage } = useContext(WordsContext);

  const prevPage = () => {
    setPage(page - 1);
  };

  const nextPage = () => {
    setPage(page+1);
  };
  return (
    <div className="middle-div">
      <Button
        onClick={prevPage}
        disabled={page===1 || false}
        startIcon={<ArrowBackIosNewIcon />}
      />
      <Button
        onClick={nextPage}
        disabled={page === 42 || false}
        endIcon={<ArrowForwardIosIcon />}
      />
    </div>
  );
}

export default Arrows;
