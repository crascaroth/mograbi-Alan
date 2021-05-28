import { useContext } from "react";
import Context from "../../../GlobalState/Context";
import { TextQuemSomos, ContainerDivQuemSomos } from "./DivQuemSomos_styled";

const DivQuemSomos = () => {
  const { states, setters, requests } = useContext(Context);

  return (
    <>
      <ContainerDivQuemSomos>
        <TextQuemSomos>Quem Somos</TextQuemSomos>
      </ContainerDivQuemSomos>
    </>
  );
};

export default DivQuemSomos;
