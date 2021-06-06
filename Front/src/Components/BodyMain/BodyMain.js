import { useContext } from "react";
import { Carousel } from "react-bootstrap";
import Context from "../../GlobalState/Context";

import ImagemInicialHome from "../../Images/ImagemInicialHome.svg"

import { CarouselContainer, CarouselImage } from "./BodyMain_styled";

const BodyMain = () => {
  const { states, setters, requests } = useContext(Context);

  return (
    <CarouselContainer>      
      <Carousel>
        <Carousel.Item>
          <CarouselImage
            className="d-block w-80"
            src={ImagemInicialHome}
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImage
            className="d-block w-80"
            src={ImagemInicialHome}
            alt="Second slide"
          />

          
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImage
            className="d-block w-80"
            src={ImagemInicialHome}
            alt="Third slide"
          />

          
        </Carousel.Item>
      </Carousel>
    </CarouselContainer>
  );
};

export default BodyMain;
