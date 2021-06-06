import { useContext } from "react";
import Context from "../../../GlobalState/Context";
import { Carousel } from "react-bootstrap";

import { CarouselImage, CarouselContainer, TextSlide,CarrosselItem } from "./CarrosselQuemSomos_styled";

import MograbiQuemSomos from "../../../Images/MograbiQuemSomos.svg"

const CarrosselQuemSomos = () => {
  const { states, setters, requests } = useContext(Context);

  return (
    <CarouselContainer>
      <Carousel>
        <CarrosselItem interval={5000}>
          <CarouselImage
            src={MograbiQuemSomos}
            alt="First slide"
          />
          <Carousel.Caption>
            
            
          </Carousel.Caption>
        </CarrosselItem>
        <CarrosselItem interval={5000}>
          <CarouselImage
            src={MograbiQuemSomos}
            alt="Second slide"
          />
          <Carousel.Caption>
            
            
          </Carousel.Caption>
        </CarrosselItem>
        <CarrosselItem>
          <CarouselImage
            src={MograbiQuemSomos}
            alt="Third slide"
          />
          <Carousel.Caption>
            
            
          </Carousel.Caption>
        </CarrosselItem>
      </Carousel>
    </CarouselContainer>
  );
};

export default CarrosselQuemSomos;
