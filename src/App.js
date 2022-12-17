import { useContext, useState } from "react";
import { WordsContext } from "./ContextProvider";

function App() {
  const { words } = useContext(WordsContext);
  const [end, setEnd] = useState(12);

  const seeMore = () => {
    setEnd(end + 12);
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>504 Essential Words</h1>
      <div className="buttons">
        <button>easy</button>
        <button>hard</button>
      </div>
      <div className="cards-container">
        {words.slice(0, end).map((word) => (
          <div key={word.word} className="word-card">
            <h5>{word.word}</h5>
            <p>{word.meaning}</p>
            <div className="buttons">
              <button>DONE</button>
              <button>NOT YET</button>
            </div>
          </div>
        ))}
      </div>
      <button id="see-more" onClick={seeMore}>
        see more
      </button>
    </div>
  );
}

export default App;
