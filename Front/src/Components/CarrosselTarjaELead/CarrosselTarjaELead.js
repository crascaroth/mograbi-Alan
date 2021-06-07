import {
  CarrosselContainer,
  PreviousButton,
  CarrosselBox,
  CarrosselItem,
  NextButton,
} from "./CarrosselTarjaELead_styled";



const CarrosselTarjaELead = () => {


  return (
    <CarrosselContainer>
      <PreviousButton></PreviousButton>
      <CarrosselBox>
        <CarrosselItem></CarrosselItem>
        <CarrosselItem></CarrosselItem>
        <CarrosselItem></CarrosselItem>
        <CarrosselItem></CarrosselItem>
      </CarrosselBox>
      <NextButton></NextButton>
    </CarrosselContainer>
  );
};

export default CarrosselTarjaELead;
