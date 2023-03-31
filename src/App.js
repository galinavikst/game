import React from "react";
import openHand from "./img/open-hand.svg";
import scissorsHand from "./img/hand-scissors.svg";
import grabbingHand from "./img/hand-grabbing.svg";
import Score from "./Score";

function App() {
  return (
    <div className="container">
      <Score />
      <div className="img_container">
        <div className="img_block">
          <img src={openHand} alt="hand" />
        </div>
        <div className="img_block">
          <img src={scissorsHand} alt="hand" />
        </div>
        <div className="img_block">
          <img src={grabbingHand} alt="hand" />
        </div>
      </div>
    </div>
  );
}

export default App;
