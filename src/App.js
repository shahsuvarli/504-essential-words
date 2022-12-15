import { useContext } from "react";
import { WordsContext } from "./ContextProvider";

function App() {
  const { words } = useContext(WordsContext);

  return (
    <div>
      <h1 style={{textAlign:'center'}}>504 Essential Words</h1>
      <div>
        {words.map((word) => (
          <div key={word.word} className="word-card">
            <h5>{word.word}</h5>
            <p>{word.meaning}</p>
            <button>+</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
