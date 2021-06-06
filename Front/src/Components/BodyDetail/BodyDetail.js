import {
  InformacoesProduct,
  BoxInformacoesProduct,
  TitleInformacoesProduct,
  TextInformacoesProduct,
  ContainerImageInfo,
  BoxProductImage,
  BoxInfo,
  NomeCompWish,
  NomeComp,
  NomeDoProduto,
  Composition,
  ButtonWish,
  ImgButtonWish,
  AboutProduct,
  LerMais,
  BoxLarguraPrecometroPedidominimo,
  ImgLargura,
  ImgPrecoMetro,
  ImgPedidoMinimo
} from "./BodyDetail_styled.js";

import FreteEPrazo from "./FreteEPrazo/FreteEPrazo.js"

import NotFilledHeart from "../../Images/NotFilledHeart.svg";
import LogoImgLargura from "../../Images/LogoImgLargura.svg"
import LogoPrecoMetro from "../../Images/LogoPrecoMetro.svg"
import LogoPedidoMinimo from "../../Images/LogoPedidoMinimo.svg"

const BodyDetail = () => {
  return (
    <>
      <ContainerImageInfo>
        <BoxProductImage>IMAGEM</BoxProductImage>
        <BoxInfo>
          <NomeCompWish>
            <NomeComp>
              <NomeDoProduto>Nome do Produto</NomeDoProduto>
              <Composition>50% Algodão</Composition>
            </NomeComp>

            <ButtonWish>
              <ImgButtonWish src={NotFilledHeart} />
            </ButtonWish>
          </NomeCompWish>
          <AboutProduct>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          </AboutProduct>
          <LerMais>Ler Mais</LerMais>
          <BoxLarguraPrecometroPedidominimo>
            <ImgLargura src={LogoImgLargura}></ImgLargura>
            <ImgPrecoMetro src={LogoPrecoMetro}></ImgPrecoMetro>
            <ImgPedidoMinimo src={LogoPedidoMinimo}></ImgPedidoMinimo>
          </BoxLarguraPrecometroPedidominimo>
        
            <FreteEPrazo></FreteEPrazo>
        
        </BoxInfo>
      </ContainerImageInfo>

      <InformacoesProduct>
        <BoxInformacoesProduct>
          <TitleInformacoesProduct>
            Informações do Produto
          </TitleInformacoesProduct>
          <TextInformacoesProduct>
            Lorem ipsum dolor sit amet, consectetur
          </TextInformacoesProduct>
        </BoxInformacoesProduct>
      </InformacoesProduct>
    </>
  );
};

export default BodyDetail;
