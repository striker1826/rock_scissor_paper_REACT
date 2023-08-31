import { styled } from "styled-components";

const Bet = ({ changeBet, bet }) => {
  const onChangeBet = (e) => {
    changeBet(Number(e.target.value));
  };

  return (
    <Wrap>
      <span>배점</span>
      <Input
        type="number"
        min={1}
        max={9}
        step={1}
        value={bet}
        onChange={onChangeBet}
      />
      <span>배</span>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-top: -15px;
  color: #fff;
  font-size: 17px;
  margin-left: -10px;
`;

const Input = styled.input`
  width: 73px;
  margin: 0 9px;
  padding: 14px 10px;
  border: 2px solid #753cf7;
  border-radius: 10px;
  color: #fff;
  font-size: 17px;
  background-color: #6000db;
`;
export default Bet;
