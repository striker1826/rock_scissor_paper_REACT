import styled from "styled-components";

const ScoreBoards = ({ myPoint, otherPoint }) => {
  return (
    <Container>
      <Board>
        <Score>{myPoint}</Score>
        <Name>나</Name>
      </Board>
      <Versus>:</Versus>
      <Board>
        <Score>{otherPoint}</Score>
        <Name>상대</Name>
      </Board>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Board = styled.div`
  padding: 28px 35px;
  border-radius: 27px;
  background-color: #6000db;
  box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.07);
  min-width: 130px;
  height: 130px;
  text-align: center;
`;

const Score = styled.div`
  color: #fc0;
  font-weight: 700;
  font-size: 47px;
  line-height: 1;
  text-align: center;
  text-shadow: 0 3px 0 #af8d07;
`;

const Name = styled.div`
  margin-top: 14px;
  color: #9680ff;
  font-weight: 700;
  font-size: 15px;
  font-family: GmarketSans;
  letter-spacing: -0.3px;
`;

const Versus = styled.div`
  margin: 0 7px;
  color: #fff;
  font-size: 64px;
`;

export default ScoreBoards;
