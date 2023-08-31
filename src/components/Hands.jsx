import { styled } from "styled-components";
import yellow from "assets/yellow.svg";

const Hands = ({ hand, otherHand }) => {
  return (
    <Container>
      <Hand>
        <HandIcon src={hand} />
      </Hand>
      <Versus>VS</Versus>
      <Hand>
        <HandIcon src={otherHand} />
      </Hand>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Hand = styled.div`
  width: 207px;
  height: 207px;
  text-align: center;
  background-image: url(${yellow});
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;
`;

const HandIcon = styled.img`
  opacity: 0.87;
  width: 70px;
  height: 70px;
  margin: 70px auto 0;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Versus = styled.div`
  color: #fff;
  font-weight: 700;
  font-size: 22px;
  text-shadow: 0 3px 0 hsla(0, 0%, 87.5%, 0.5);
  letter-spacing: -0.33px;
`;

export default Hands;
