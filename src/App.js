import { styled } from "styled-components";
import resetIcon from "assets/ic-reset.svg";
import ScoreBoards from "components/ScoreBoards";
import Main from "components/Main";
import Button from "components/Button";
import { useState } from "react";
import { handImg } from "config";
import { calculateHand, shuffle } from "utils";

function App() {
  const handOptions = ["rock", "scissor", "paper"];
  const [hand, setHand] = useState(handImg["rock"]);
  const [otherHand, setOtherHand] = useState(handImg["rock"]);
  const [myPoint, setMyPoint] = useState(0);
  const [otherPoint, setOtherPoint] = useState(0);
  const [bet, setBet] = useState(1);
  const [history, setHistory] = useState([]);

  const game = (myHand) => {
    const randomHand = shuffle(handOptions)[0];
    changeHand(myHand, randomHand);
    const result = isWins(myHand, randomHand);
    changeHistory(result);
  };

  const changeHand = (hand, otherHand) => {
    setHand(handImg[hand]);
    setOtherHand(handImg[otherHand]);
  };

  const isWins = (myHand, otherHand) => {
    const result = calculateHand(myHand, otherHand);
    if (result === 1) setMyPoint(myPoint + bet);
    if (result === -1) setOtherPoint(otherPoint + bet);
    return result;
  };

  const changeBet = (newBet) => {
    const essenceBet = Math.floor(newBet);
    if (essenceBet > 0 && essenceBet < 10) setBet(newBet);
  };

  const changeHistory = (result) => {
    if (result === 1) setHistory([...history, "나"]);
    if (result === -1) setHistory([...history, "상대"]);
    if (result === 0) setHistory([...history, "무승부"]);
  };

  const reset = () => {
    setHand(handImg["rock"]);
    setOtherHand(handImg["rock"]);
    setBet(1);
    setMyPoint(0);
    setOtherPoint(0);
    setHistory([]);
  };

  return (
    <Container>
      <Title>가위바위보</Title>
      <Reset src={resetIcon} onClick={reset} />
      <ScoreBoards myPoint={myPoint} otherPoint={otherPoint} />
      <Main
        hand={hand}
        otherHand={otherHand}
        bet={bet}
        changeBet={changeBet}
        history={history}
      />
      <Button game={game} />
    </Container>
  );
}

const Container = styled.div`
  background-color: #6f00ff;
  box-shadow: 0 4.2px 2px #5900cc, 0 -4.2px 2px #8500ff;
  border-radius: 44px;
  min-width: 575px;
  max-width: 620px;
  margin: 45px auto;
  padding: 50px;
  position: relative;
`;

const Title = styled.h1`
  color: #fff;
  margin: 0 0 34px;
  font-weight: 700;
  font-size: 30px;
  text-shadow: 0 3px 0 #a875e9;
  letter-spacing: 0.19px;
  -webkit-text-stroke: 1px #fff;
  text-align: center;
`;

const Reset = styled.img`
  position: absolute;
  top: 48px;
  right: 49px;
  cursor: pointer;
`;

export default App;
