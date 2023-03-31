import React, { useState } from "react";
import openHand from "./img/open-hand.svg";
import scissorsHand from "./img/hand-scissors.svg";
import grabbingHand from "./img/hand-grabbing.svg";

const values = {
  paper: {
    paper: 0,
    scissors: -1,
    grab: 1,
  },
  scissors: {
    paper: 1,
    scissor: 0,
    grab: -1,
  },
  grab: {
    paper: -1,
    scissors: 1,
    grab: 0,
  },
};

const options = ["paper", "scissors", "grab"];
let isShowingResult;

export default function App() {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState(false);
  const [userChoise, setUserchoise] = useState(null);
  const [compChoise, setCompChoise] = useState(null);

  const play = (event) => {
    if (isShowingResult) {
      console.log("too fast");
      return;
    }

    const index = Math.floor(Math.random() * options.length);
    const computer = options[index];
    const compImg = document.getElementById(computer);
    const user = event.target.id;

    setUserchoise(event.target.src);
    setCompChoise(compImg.src);

    setResult(true);
    isShowingResult = true;
    setTimeout(() => {
      isShowingResult = false;
      setResult(false);
    }, 1500);

    if (values[user][computer] === 1) {
      setCount(count + 1);
    }
  };

  return (
    <div className="container">
      <p className="count">Your score: {count}</p>
      <div className="img_container">
        <div className="img_block">
          <img
            id="paper"
            className="big_icon"
            onClick={play}
            src={openHand}
            alt="hand"
          />
        </div>
        <div className="img_block">
          <img
            id="scissors"
            className="big_icon"
            onClick={play}
            src={scissorsHand}
            alt="hand"
          />
        </div>
        <div className="img_block">
          <img
            id="grab"
            className="big_icon"
            onClick={play}
            src={grabbingHand}
            alt="hand"
          />
        </div>
        {result && (
          <div className="result_container">
            <div>
              <p>Computer:</p>
              <img className="small_icon" src={compChoise} alt="hand" />
            </div>
            <div>
              <p>User:</p>
              <img className="small_icon" src={userChoise} alt="hand" />
            </div>
          </div>
        )}
      </div>
      <Rules />
    </div>
  );
}

function Rules() {
  return (
    <div>
      <div className="rules_container">
        <p className="rules">Rules of the game</p>
        <ul className="rules_list">
          <li className="rules_block">
            <img className="small_icon" src={openHand} alt="hand" />
            <span>{"<"}</span>
            <img className="small_icon" src={scissorsHand} alt="hand" />
          </li>
          <li className="rules_block">
            <img className="small_icon" src={grabbingHand} alt="hand" />
            <span>{">"}</span>
            <img className="small_icon" src={scissorsHand} alt="hand" />
          </li>
          <li className="rules_block">
            <img className="small_icon" src={grabbingHand} alt="hand" />
            <span>{"<"}</span>
            <img className="small_icon" src={openHand} alt="hand" />
          </li>
        </ul>
      </div>
    </div>
  );
}
