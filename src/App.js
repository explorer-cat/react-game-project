import React, { useState } from 'react';
import logo from './logo.svg';
import HandIcon from './HandIcon'
import HandButton from './HandButton'
import Button from './Button'
import utils from './utils'
import { compareHand, generateRandomHand } from './utils';


function getResult(me, other) {
  
  const comparison = compareHand(me, other);

  if (comparison > 0) {
    return '승리';
  } 
  if (comparison < 0){
    return '패배';
  } 
  return '무승부';
}

function App() {
  let [hand,setHand] = React.useState("rock");
  let [otherHand,setOtherHand] = React.useState("rock");
  let [history, setHistory] = React.useState([]);
  let [bet, setBet] = React.useState();
  let [score , setScore] = React.useState(0);
  let [otherScore , setOtherScore] = React.useState(0);

  /* 가위바위보 배점*/
  const handleScore = (e) => {
   setBet(Number(e.target.value));
  }

  const handleButtonClick = (nextHand) => {
    const nextOtherHand = generateRandomHand();
    const nextHistory = getResult(nextHand, nextOtherHand)

    if(nextHistory === "승리") {
      setScore(score+bet)
    } else if (nextHistory === "패배") {
      setOtherScore(otherScore+bet)
    }
    setHand(nextHand);
    setOtherHand(nextOtherHand);
    setHistory([...history, nextHistory])
  }

  const handleClearClick = () => {
    setHand("rock")
    setOtherHand("rock")
    setHistory([])
    setBet(1)
    setScore(0)
    setOtherScore(0)
  }



  return (
    <div className="App">
      <p>{getResult(hand,otherHand)}</p>
      <div>
        <Button name ="초기화" onClick = {handleClearClick} />
      </div>
      <div>
        <HandIcon value = {hand}></HandIcon>
        VS
        <HandIcon value = {otherHand}></HandIcon>
      </div>
      <div>
        현재 스코어:{score} : {otherScore}
      </div>
      <p>
        내기 점수 :<input onChange={handleScore}  value={bet}  type="number" min={1} max={9}></input>
      </p>
      <p>게임 기록 : {history.join(",")}</p> 
      <div>
        <HandButton value="rock" onClick={handleButtonClick} />
        <HandButton value="scissor" onClick={handleButtonClick} />
        <HandButton value="paper" onClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;
