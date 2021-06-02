import { useContext } from "react";
import Context from "../../../GlobalState/Context";
import { Carousel } from "react-bootstrap";

import { CarouselImage, CarouselContainer, TextSlide,CarrosselItem } from "./CarrosselQuemSomos_styled";

const CarrosselQuemSomos = () => {
  const { states, setters, requests } = useContext(Context);

  return (
    <CarouselContainer>
      <Carousel>
        <CarrosselItem interval={5000}>
          <CarouselImage
            src="https://images.unsplash.com/photo-1622109908450-f9b87f8e2da9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            
            
          </Carousel.Caption>
        </CarrosselItem>
        <CarrosselItem interval={5000}>
          <CarouselImage
            src="https://images.unsplash.com/photo-1615712395516-881a81b0cb6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80"
            alt="Second slide"
          />
          <Carousel.Caption>
            
            
          </Carousel.Caption>
        </CarrosselItem>
        <CarrosselItem>
          <CarouselImage
            src="https://images.unsplash.com/photo-1622036408933-fa56a4ae3d9e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
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
