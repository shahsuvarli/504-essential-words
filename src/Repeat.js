import { Button, Collapse } from "@mui/material";
import React, { useContext, useState } from "react";
import { WordsContext } from "./ContextProvider";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Repeat() {
  const { repeat, setRepeat } = useContext(WordsContext);
  const [expand, setExpand] = useState(false);

  const handleCollapse = () => {
    setExpand(!expand);
  };

  const handleRepeat = (e) => {
    let result = window.confirm(
      `Do you know the meaning of ${e.target.innerText}`
    );
    if (result) {
      let newRepeat = repeat.filter(
        (item) => item !== e.target.innerText.toLowerCase()
      );
      setRepeat(newRepeat);
    }
  };

  return (
    <div className="repeat-container">
      <Button
        variant="contained"
        className="repeat-button"
        onClick={handleCollapse}
        endIcon={<ExpandMoreIcon/>}
        sx={{ height: 40, fontSize: 17 }}
      >
        Repeat ({repeat.length})
      </Button>
      <Collapse in={expand} className="repeat-collapse-container">
        {repeat.map((item, index) => (
          <Button
            key={index}
            className="repeat-text"
            variant="outlined"
            onClick={(e) => handleRepeat(e)}
          >
            {item}
          </Button>
        ))}
      </Collapse>
    </div>
  );
}

export default Repeat;
