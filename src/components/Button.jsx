import { styled } from "styled-components";
import { handImg } from "config";
import purple from "assets/purple.svg";
import yellow from "assets/yellow.svg";

const Button = ({ game }) => {
  return (
    <div>
      <Wrapper onClick={() => game("rock")}>
        <HandImg src={handImg["rock"]} />
      </Wrapper>
      <Wrapper onClick={() => game("scissor")}>
        <HandImg src={handImg["scissor"]} />
      </Wrapper>
      <Wrapper onClick={() => game("paper")}>
        <HandImg src={handImg["paper"]} />
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.button`
  width: 166px;
  height: 166px;
  border: none;
  outline: none;
  text-align: center;
  cursor: pointer;
  background-color: transparent;
  background-image: url(${purple});
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;

  &:hover {
    background-image: url(${yellow});
    opacity: 0.87;
  }
`;

const HandImg = styled.img`
  opacity: 0.45;
  width: 55px;
  height: 55px;
`;

export default Button;
