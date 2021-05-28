import { useContext } from "react";
import { Carousel } from "react-bootstrap";
import Context from "../../GlobalState/Context";

import { CarouselContainer, CarouselImage } from "./BodyMain_styled";

const BodyMain = () => {
  const { states, setters, requests } = useContext(Context);

  return (
    <CarouselContainer>
      <Carousel>
        <Carousel.Item>
          <CarouselImage
            className="d-block w-80"
            src="https://images.unsplash.com/photo-1621569976126-161164c49cef?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImage
            className="d-block w-80"
            src="https://images.unsplash.com/photo-1616710601932-5c0e1f2aea91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="Second slide"
          />

          
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImage
            className="d-block w-80"
            src="https://images.unsplash.com/photo-1621876623507-ea393f1e4fb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="Third slide"
          />

          
        </Carousel.Item>
      </Carousel>
    </CarouselContainer>
  );
};

export default BodyMain;
