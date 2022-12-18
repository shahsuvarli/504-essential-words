import { Button, Collapse } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { WordsContext } from "./ContextProvider";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Pagination() {
  const { pages, page, setPage } = useContext(WordsContext);
  const [expand, setExpand] = useState(false);

  const handlePage = (e) => {
    setPage(Number(e.target.innerText) - 1);
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
        sx={{ margin: 1 }}
      >
        Lesson {page + 1}
      </Button>
      <Collapse
        in={expand}
        timeout="auto"
        unmountOnExit
        className="pagination-collapse"
      >
        {pages.map((page, index) => (
          <Button
            className="page-number"
            key={index}
            onClick={(e) => handlePage(e)}
            variant="contained"
          >
            {page + 1}
          </Button>
        ))}
      </Collapse>
    </div>
  );
}

export default Pagination;
