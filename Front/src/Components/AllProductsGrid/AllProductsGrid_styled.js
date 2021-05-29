import styled from "styled-components";
import { Col } from "react-bootstrap";

import tricoline_liso from "../../Images/tricoline_liso.svg";
import tricoline_rotativo from "../../Images/tricoline_rotativo.svg";
import tricoline_digital from "../../Images/tricoline_digital.svg";
import viscose_digital from "../../Images/viscose_digital.svg";
import viscolise_lisa from "../../Images/viscolise_lisa.svg";
import promocoes from "../../Images/promocoes.svg";

import Faixaimg from "../../Images/faixa.svg";

export const BoxItem = styled(Col)`
  background-color: pink;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 0.25fr 1fr 1fr 0.25fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 5% 5%;
`;

export const Col11 = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  height: 30vh;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 40vh;
  margin: 0;
  padding: 0;

  background-image: url(${tricoline_liso});
  background-repeat: no-repeat;
  background-position: 25% 25%;
`;
export const Col12 = styled.div`
  grid-area: 1 / 3 / 2 / 4;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${tricoline_rotativo});
  background-repeat: no-repeat;
  background-position: 25% 25%;
`;

export const Col21 = styled.div`
  grid-area: 2 / 2 / 3 / 3;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${tricoline_digital});
  background-repeat: no-repeat;
  background-position: 25% 25%;
`;

export const Col22 = styled.div`
  grid-area: 2 / 3 / 3 / 4;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${viscose_digital});
  background-repeat: no-repeat;
  background-position: 25% 25%;
`;

export const Col31 = styled.div`
  grid-area: 3 / 2 / 4 / 3;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${viscolise_lisa});
  background-repeat: no-repeat;
  background-position: 25% 25%;
`;
export const Col32 = styled.div`
  grid-area: 3 / 3 / 4 / 4;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${promocoes});
  background-repeat: no-repeat;
  background-position: 25% 25%;
`;

export const Faixa = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 25vw;
  height: 17vh;

  font-size: 3.25em;
  color: white;
  opacity: 0.75;

  background-image: url(${Faixaimg});
  background-repeat: no-repeat;
  background-position: center;
`;

export const BoxText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  text-justify: center;
  flex-wrap: wrap;

  width: 20vw;
  height: 15vh;
`;
