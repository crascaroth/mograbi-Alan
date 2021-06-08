import { Nav } from "react-bootstrap";
import styled from "styled-components";
import Carousel from "react-multi-carousel";

export const CarouselImage = styled.img`
  display: block;
  width: auto;
  height: 50vh;
`;

export const CarouselContainer = styled(Nav)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 50vh;

`;


export const CarouselBox = styled(Carousel)`
width: 90vw;
`