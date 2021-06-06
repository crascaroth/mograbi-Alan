import styled from "styled-components";
import Button from "react-bootstrap/Button";

export const ContainerImageInfo = styled.div``;
export const BoxProductImage = styled.div``;
export const BoxInfo = styled.div``;
export const NomeCompWish = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NomeComp = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NomeDoProduto = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

export const Composition = styled.div`
  font-size: 20px;
  color: #888888;
`;

export const ButtonWish = styled(Button)`
  background-color: green;
`;

export const ImgButtonWish = styled.img``;

export const AboutProduct = styled.div``;

export const LerMais = styled.div`  
  border-bottom: 1px solid black;
  :hover{
      cursor:pointer;
  }

  font-size: 19px;
  font-weight: bold;

  text-align:start;

  background-color: white;
  color: black;
`;

export const InformacoesProduct = styled.div``;

export const BoxLarguraPrecometroPedidominimo = styled.div``;

const ImgBase = styled.img``;

export const ImgLargura = styled(ImgBase)``;

export const ImgPrecoMetro = styled(ImgBase)``;

export const ImgPedidoMinimo = styled(ImgBase)``;

export const BoxInformacoesProduct = styled.div`
  background-color: #f6f6f6;
`;

export const TitleInformacoesProduct = styled.div`
  font-size: 44px;
  font-weight: bold;
`;

export const TextInformacoesProduct = styled.div``;
