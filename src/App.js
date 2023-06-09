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
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [totalGames, setTotalGames] = useState(0);
  const [result, setResult] = useState(false);
  const [userChoise, setUserchoise] = useState(null);
  const [compChoise, setCompChoise] = useState(null);

  const reset = () => {
    setCompScore(0);
    setUserScore(0);
    setTotalGames(0);
  };

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
    setTotalGames(totalGames + 1);

    if (values[user][computer] === 1) {
      setUserScore(userScore + 1);
    } else if (values[user][computer] === -1) {
      setCompScore(compScore + 1);
    }

    setResult(true);
    isShowingResult = true;
    setTimeout(() => {
      isShowingResult = false;
      setResult(false);
    }, 1500);
  };

  return (
    <div className="container">
      <div className="score_comtaner">
        <p className="count">
          You {userScore} : {compScore} Computer
        </p>
        <p>Total games: {totalGames}</p>
      </div>
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
              <p>You:</p>
              <img className="small_icon" src={userChoise} alt="hand" />
            </div>
            <div>
              <p>Computer:</p>
              <img className="small_icon" src={compChoise} alt="hand" />
            </div>
          </div>
        )}
      </div>
      <BottomBlock reset={reset} />
    </div>
  );
}

function BottomBlock(props) {
  return (
    <div className="bottom_container">
      <Rules />
      <button onClick={props.reset} className="reset_btn">
        Reset score
      </button>
    </div>
  );
}

function Rules() {
  return (
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
  );
}
