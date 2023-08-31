import { styled } from "styled-components";

const History = ({ history }) => {
  return (
    <Container>
      <H2>승부 기록</H2>
      <p>{history}</p>
    </Container>
  );
};

const Container = styled.div`
  margin: 20px 40px 36px;
  padding: 30px 47px;
  max-width: 80%;
  border-radius: 19px;
  color: #625f63;
  background-color: #fff;
  box-shadow: 0 3px 8px 0 rgba(89, 72, 112, 0.44),
    0 5px 3px rgba(215, 189, 248, 0.65);
  text-align: center;
  word-break: break-all;
`;

const H2 = styled.h2`
  margin: 0;
  color: #6000db;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: -0.24px;
`;

export default History;
