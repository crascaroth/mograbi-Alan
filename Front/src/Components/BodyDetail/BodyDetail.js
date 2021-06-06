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
  ImgPedidoMinimo,
  ImgProductDetail,
  ContainerLargura,
  ContainerPrecoMetro,
  ContainerPedidoMinimo,
  TextoLargura,
  TextoPrecoMetro,
  TextoPedidoMinimo,
  BoxComprimentoComprar,
  ColunaComprimentoPreco,
  ColunaBoxComprar,
  BoxComprar,
  MenosButton,
  MaisButton,
  InputComprimento,
  DivTextoSuperior,
  DivTextoInferior,
  BoxPreço,
  DivPor,
  Preco,
  SubPreco,
  ContainerLerMais,
  SideBySide,
  ContainerBoxCinza,
  BoxCinza,
  TextoBoxCinza,
  CliqueAquiWpp,
  ContainerButtonCompra,
  ButtonComprar,
} from "./BodyDetail_styled.js";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";

import FreteEPrazo from "./FreteEPrazo/FreteEPrazo.js";

import NotFilledHeart from "../../Images/NotFilledHeart.svg";
import LogoImgLargura from "../../Images/LogoImgLargura.svg";
import LogoPrecoMetro from "../../Images/LogoPrecoMetro.svg";
import LogoPedidoMinimo from "../../Images/LogoPedidoMinimo.svg";
import { useEffect } from "react";
import Context from "../../GlobalState/Context";
import axios from "axios";

const BodyDetail = () => {
  const { states, setters, requests } = useContext(Context);

  const [comprimento, setComprimento] = useState(1);

  const Params = useParams();
  let product = { productPicture: ["zero"] };

  // requests.getProductDetails(Params.id)
  if (states.productDetail) {
    product = states.productDetail;
  }

  useEffect(() => {
    (async () => requests.getProductDetails(Params.id))();
  }, []);

  const onChangeComprimento = (event) => {
    console.log(event.target.value);
    setComprimento(Number(event.target.value));
  };

  const onClickMais = () => {
    console.log(comprimento + 0.5);
    setComprimento(comprimento + 0.5);
  };

  const onClickMenos = () => {
    console.log(comprimento - 0.5);
    setComprimento(comprimento - 0.5);
  };

  console.log("product Details", states.productDetail);

  return (
    <>
      <ContainerImageInfo>
        <BoxProductImage>
          <ImgProductDetail src={product.productPicture[0]} />
        </BoxProductImage>
        <BoxInfo>
          {/* LINHA 1 */}
          <NomeCompWish>
            <NomeComp>
              <NomeDoProduto>Nome do Produto</NomeDoProduto>
              <Composition>50% Algodão</Composition>
            </NomeComp>

            <ButtonWish>
              <ImgButtonWish src={NotFilledHeart} />
            </ButtonWish>
          </NomeCompWish>

          {/* LINHA 2 */}
          <AboutProduct>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          </AboutProduct>
          <ContainerLerMais>
            <LerMais>Ler Mais</LerMais>
          </ContainerLerMais>

          {/* LINHA 3 */}
          <BoxLarguraPrecometroPedidominimo>
            <ContainerLargura>
              <ImgLargura src={LogoImgLargura}></ImgLargura>
              <TextoLargura>Largura do Tecido</TextoLargura>
              <TextoLargura style={{ fontWeight: "bold" }}> 1,50</TextoLargura>
            </ContainerLargura>
            <ContainerPrecoMetro>
              <ImgPrecoMetro src={LogoPrecoMetro}></ImgPrecoMetro>
              <TextoPrecoMetro>Preço do Metro</TextoPrecoMetro>
              <TextoPrecoMetro style={{ fontWeight: "bold" }}>
                R$23,40
              </TextoPrecoMetro>
            </ContainerPrecoMetro>
            <ContainerPedidoMinimo>
              <ImgPedidoMinimo src={LogoPedidoMinimo}></ImgPedidoMinimo>
              <TextoPedidoMinimo>Pedido Minimo</TextoPedidoMinimo>
              <TextoPedidoMinimo style={{ fontWeight: "bold" }}>
                100 cm
              </TextoPedidoMinimo>
            </ContainerPedidoMinimo>
          </BoxLarguraPrecometroPedidominimo>

          {/* LINHA 4 */}
          <BoxComprimentoComprar>
            <ColunaComprimentoPreco>
              <BoxComprar>
                <DivTextoSuperior>Comprimento:</DivTextoSuperior>
                <MenosButton onClick={onClickMenos}>-</MenosButton>
                <InputComprimento
                  type="number"
                  value={comprimento}
                  onChange={onChangeComprimento}
                ></InputComprimento>
                <MaisButton onClick={onClickMais}>+</MaisButton>
                <DivTextoInferior>UNIDADE: METROS</DivTextoInferior>
              </BoxComprar>
              <BoxPreço>
                <SideBySide>
                  <DivPor>Por</DivPor>
                  <Preco>R$23,40</Preco>
                </SideBySide>
                <SubPreco>
                  Parcele em até 6x de R$5,48 s/juros Parcela mínima R$30
                </SubPreco>
              </BoxPreço>
            </ColunaComprimentoPreco>
            <ColunaBoxComprar>
              <ContainerBoxCinza>
                <BoxCinza>
                  <TextoBoxCinza>
                    Precisa de um pedido acima de 29m ou a quantidade é
                    insuficiente para você?
                  </TextoBoxCinza>
                  <CliqueAquiWpp>
                    Clique aqui para comprar pelo WhatsApp
                  </CliqueAquiWpp>
                </BoxCinza>
              </ContainerBoxCinza>
              <ContainerButtonCompra>
                <ButtonComprar>Comprar</ButtonComprar>
              </ContainerButtonCompra>
            </ColunaBoxComprar>
          </BoxComprimentoComprar>
          {/* Linha 5 */}
          <FreteEPrazo></FreteEPrazo>
        </BoxInfo>
      </ContainerImageInfo>

      <InformacoesProduct>
        <BoxInformacoesProduct>
          <TitleInformacoesProduct>
            Informações do Produto
          </TitleInformacoesProduct>
          <TextInformacoesProduct>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
            justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
            sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
            duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
            ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
            eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
            gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam
          </TextInformacoesProduct>
        </BoxInformacoesProduct>
      </InformacoesProduct>
    </>
  );
};

export default BodyDetail;
