import React from "react";
import { BsPlay } from "react-icons/bs";

function PlayButton({ word }) {
  const getMp3Url = (word) => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => {
        return res.json();
      })
      .then((mp3) => {
        const audio = mp3[0].phonetics.reverse()[0].audio;
        playSound(audio);
      });
  };

  function playSound(audio) {
    var a = new Audio(audio);
    a.play();
  }

  return <BsPlay size={35} onClick={() => getMp3Url(word)} />;
}

export default PlayButton;
