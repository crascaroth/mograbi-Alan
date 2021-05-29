import { Col, Row } from "react-bootstrap";
import {
  GridContainer,
  Col11,
  Col12,
  Col21,
  Col22,
  Col31,
  Col32,
  Faixa,
  BoxText,
} from "./AllProductsGrid_styled";

const AllProductsGrid = () => {
  return (
    <>
      
      <GridContainer>
        <Col11>
          <Faixa>
            <BoxText>Tricoline Lisa</BoxText>
          </Faixa>
        </Col11>
        <Col12>
          <Faixa>
            <BoxText>Tricoline Rotativa</BoxText>
          </Faixa>
        </Col12>
        <Col21>
          <Faixa>
            <BoxText>Tricoline Digital</BoxText>
          </Faixa>
        </Col21>
        <Col22>
          <Faixa>
            <BoxText>Viscose Digital</BoxText>
          </Faixa>
        </Col22>
        <Col31>
          <Faixa>
            <BoxText>Viscose Lisa</BoxText>
          </Faixa>
        </Col31>
        <Col32>
          <Faixa>
            <BoxText>Promoções</BoxText>
          </Faixa>
        </Col32>
      </GridContainer>
    </>
  );
};

export default AllProductsGrid;
