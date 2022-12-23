import { Button, Collapse } from "@mui/material";
import React, { useContext, useState } from "react";
import { WordsContext } from "./ContextProvider";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Pagination({ top }) {
  const { words, page, setPage } = useContext(WordsContext);
  const [expand, setExpand] = useState(false);

  const handlePage = (e) => {
    setPage(Number(e.target.innerText));
    setExpand(!expand);
  };

  const handleExpand = () => {
    setExpand(!expand);
  };

  return (
    <div className="pagination-container">
      <Button
        onClick={handleExpand}
        endIcon={<ExpandMoreIcon />}
        variant="contained"
        fullWidth
        sx={{ margin: 1, height: 40, fontSize: 17 }}
      >
        Lesson {page}
      </Button>
      <Collapse
        in={expand}
        timeout="auto"
        unmountOnExit
        className="pagination-collapse"
      >
        {words.map((lesson) => (
          <Button
            className="page-number"
            key={lesson.lesson}
            onClick={(e) => handlePage(e)}
            variant={lesson.lesson === page ? "contained" : "outlined"}
          >
            {lesson.lesson}
          </Button>
        ))}
      </Collapse>
    </div>
  );
}

export default Pagination;
