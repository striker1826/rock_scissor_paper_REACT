import { styled } from "styled-components";
import Hands from "components/Hands";
import Bet from "components/Bet";
import History from "components/History";

const Main = ({ hand, otherHand, changeBet, bet, history }) => {
  return (
    <Container>
      <ContainerInner>
        <Hands hand={hand} otherHand={otherHand} />
        <Bet bet={bet} changeBet={changeBet} />
        <History history={history.join(", ")} />
      </ContainerInner>
    </Container>
  );
};

const Container = styled.div`
  padding: 5px;
  box-shadow: 0 3px 8px 0 rgba(56, 15, 110, 0.44);
`;

const ContainerInner = styled.div`
  width: 100%;
  max-width: 520px;
  border: 6px solid #6e08fc;
  box-shadow: inset 0 3px 8px 0 rgba(56, 15, 110, 0.44);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Main;
