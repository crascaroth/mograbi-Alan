import styled from "styled-components";
import { Button } from "react-bootstrap";
import BannerPromocao from "../../Images/BannerPromocao.svg";

export const TarjaPromocao = styled.div`
  background-image: url("${BannerPromocao}");
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`;

export const BoxTextoButton = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 5vw;
`;

export const BoxPromocao = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin: 0 5vw;
`;

export const TextoOff = styled.div`
  font-size: 86px;
  font-weight: bold;
`;
export const SubTexto = styled.div`
  font-size: 47px;
`;

export const ButtonComprar = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 28px;
  height: 7vh;
  font-size: 26px;
  font-weight: bold;
`;

export const CarrosselContainer = styled.div`
  align-items: center;
  display: flex;
  margin: 2rem auto;
  overflow: hidden;
  position: relative;
  width: 300px;
`;

export const CarrosselBox = styled.div``;
export const CarrosselItem = styled.div`
  display: flex;
  transform: translateX(0);
  transition: transform 0.25s;
`;

const BaseButton = styled(Button)`
  background: teal;
  border: 0;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  height: 3rem;
  opacity: 0.25;
  position: absolute;
  transition: opacity 0.25s;
  width: 3rem;
  z-index: 1;
`;

export const PreviousButton = styled(BaseButton)``;
export const NextButton = styled(BaseButton)``;

export const ContainerLead = styled.div`
  display: flex;

  align-items: center;

  background-color: black;
  width: 100%;
  height: 30vh;
  margin: 10vh 0;
`;

export const BoxLead = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 25vh;

  border-top: 1px dashed white;
  border-bottom: 1px dashed white;
`;

export const ImgLead = styled.img``;

export const TextoLead = styled.div`
  color: white;
  font-size: 46px;
  width: 30vw;
`;

export const InputNome = styled.input`
  font-size: 30px;
  border-radius: 0;
  
`;
export const InputEmail = styled.input`
  font-size: 30px;
  border-radius: 0;
`;
export const ButtonAssinar = styled(Button)`
background-color:white;
color:black;
font-size: 26px;
border-radius: 0;
`;
