import {
  TarjaPromocao,
  BoxTextoButton,
  ButtonComprar,
  BoxPromocao,
  TextoOff,
  SubTexto,
  ContainerLead,
  BoxLead,
  ImgLead,
  TextoLead,
  InputNome,
  InputEmail,
  ButtonAssinar,
} from "./CarrosselTarjaELead_styled";

import {
  TextQuemSomos,
  ContainerDivQuemSomos,
  BoxWithPolygons,
} from "../BodyQuemSomos/DivQuemSomos/DivQuemSomos_styled";

import iconLead from "../../Images/iconLead.svg";
import Carrossel from "./Carrossel/Carrossel.js";
import PolygonPequenoDireita from "../../Images/PolygonPequenoDireita.svg";
import PolygonPequenoEsquerda from "../../Images/PolygonPequenoEsquerda.svg";

const CarrosselTarjaELead = () => {
  return (
    <>
      <ContainerDivQuemSomos>
        <BoxWithPolygons>
          <img src={PolygonPequenoEsquerda} />
          <TextQuemSomos>Mais Vendidos</TextQuemSomos>
          <img src={PolygonPequenoDireita} />
        </BoxWithPolygons>
      </ContainerDivQuemSomos>

      <Carrossel inicio={0} fim={4} />

      {/* Tarja */}
      <TarjaPromocao>
        <BoxTextoButton>
          <BoxPromocao>
            <TextoOff>50% OFF</TextoOff>
            <SubTexto>No site inteiro</SubTexto>
          </BoxPromocao>
          <ButtonComprar>Comprar Agora</ButtonComprar>
        </BoxTextoButton>
      </TarjaPromocao>

      {/* Carrossel */}

      <ContainerDivQuemSomos>
        <BoxWithPolygons>
          <img src={PolygonPequenoEsquerda} />
          <TextQuemSomos>Lançamentos</TextQuemSomos>
          <img src={PolygonPequenoDireita} />
        </BoxWithPolygons>
      </ContainerDivQuemSomos>

      <Carrossel inicio={5} fim={9} />

      <ContainerDivQuemSomos>
        <BoxWithPolygons>
          <img src={PolygonPequenoEsquerda} />
          <TextQuemSomos>Em Promoção</TextQuemSomos>
          <img src={PolygonPequenoDireita} />
        </BoxWithPolygons>
      </ContainerDivQuemSomos>

      

      <Carrossel inicio={9} fim={13} />

      {/* Lead */}
      <ContainerLead>
        <BoxLead>
          <ImgLead src={iconLead}></ImgLead>
          <TextoLead>Receba nossas ofertas, cupons e novidades!</TextoLead>
          <InputNome placeholder="Digite seu nome" />
          <InputEmail placeholder="Digite seu e-mail" />
          <ButtonAssinar>Assinar</ButtonAssinar>
        </BoxLead>
      </ContainerLead>
    </>
  );
};

export default CarrosselTarjaELead;
