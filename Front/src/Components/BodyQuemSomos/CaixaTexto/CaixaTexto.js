import React from "react";
import {
  CaixaTextoESetas,
  ColunasGrid,
  Container,
  SetaEsquerda,
  SetaDireita,
} from "./CaixaTexto_styled";
import { Row, Col } from "react-bootstrap";

import PolygonEsquerda from "../../../Images/PolygonEsquerda.svg";
import PolygonDireita from "../../../Images/PolygonDireita.svg";

const CaixaTexto = () => {
  return (
    <Container>
      <CaixaTextoESetas >
        <Row>
          <SetaEsquerda>
            <img src={PolygonEsquerda} />
          </SetaEsquerda>
          <ColunasGrid >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata
          </ColunasGrid>
          <ColunasGrid>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata
          </ColunasGrid>
          <SetaDireita >
            <img src={PolygonDireita} />
          </SetaDireita>
        </Row>
      </CaixaTextoESetas>
    </Container>
  );
};

export default CaixaTexto;
