import styled from 'styled-components';
import { Nav , Carousel} from "react-bootstrap";

export const CarouselImage = styled.img`
width: 90vw;
height: auto;


`
export const CarouselContainer = styled(Nav)`
margin-top:5vh;
display: flex;
justify-content:center;
align-items: center;
width: 100vw;
height: 50vh;
`

export const CarrosselItem = styled(Carousel.Item)`
width:90vw;

max-width: 90vw;
max-height: 50vh;

overflow: hidden;
`


