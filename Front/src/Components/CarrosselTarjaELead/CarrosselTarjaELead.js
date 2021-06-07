import {
  CarrosselContainer,
  PreviousButton,
  CarrosselBox,
  CarrosselItem,
  NextButton,
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
import Item1 from "../../Images/Item1.svg";
import Item2 from "../../Images/Item2.svg";
import Item3 from "../../Images/Item3.svg";
import Item4 from "../../Images/Item4.svg";
import Item5 from "../../Images/Item5.svg";
import iconLead from "../../Images/iconLead.svg";

const CarrosselTarjaELead = () => {
  return (
    <>
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
      <CarrosselContainer>
        <PreviousButton id="previous">A</PreviousButton>
        <CarrosselBox>
          <CarrosselItem>
            <img src={Item1} />
          </CarrosselItem>
          <CarrosselItem>
            <img src={Item2} />
          </CarrosselItem>
          <CarrosselItem>
            <img src={Item3} />
          </CarrosselItem>
          <CarrosselItem>
            <img src={Item4} />
          </CarrosselItem>
          <CarrosselItem>
            <img src={Item5} />
          </CarrosselItem>
        </CarrosselBox>
        <NextButton id="next">B</NextButton>
      </CarrosselContainer>

      {/* Lead */}
      <ContainerLead>
        <BoxLead>
          <ImgLead src={iconLead}></ImgLead>
          <TextoLead>Receba nossas ofertas, cupons e novidades!</TextoLead>
          <InputNome placeholder="Digite seu nome"/>
          <InputEmail placeholder="Digite seu e-mail"/>
          <ButtonAssinar>Assinar</ButtonAssinar>
        </BoxLead>
      </ContainerLead>
    </>
  );
};

export default CarrosselTarjaELead;
