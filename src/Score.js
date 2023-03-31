import React, { useState } from "react";

function Score(params) {
  const [count, setCount] = useState(0);
  return <p>Your score: {count}</p>;
}

export default Score;
