import { useContext } from "react";
import Context from "../../GlobalState/Context";
import Button from "react-bootstrap/Button";
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Col,
  Row,
  Image,
} from "react-bootstrap";
import ResponsiveSelectMenu from "../ResponsiveSelectMenu/ResponsiveSelectMenu";

import personIcon from "../../Images/person.svg";
import heartIcon from "../../Images/heart.svg";
import searchIcon from "../../Images/search.svg";
import cartIcon from "../../Images/cart.svg";
import telephone from "../../Images/telephone.svg";
import facebook from "../../Images/facebook.svg";
import envelope from "../../Images/envelope.svg";
import instagram from "../../Images/instagram.svg";
import Mograbi_logo_nao_oficial from "../../Images/Mograbi_logo_nao_oficial.png";

const Header = () => {
  const { states, setters, requests } = useContext(Context);

  return (
    <>
      {/* BARRA DE CIMA COM O TELEFONE E AS REDES SOCIAIS*/}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Image src={telephone} alt="telephone" />
        <Navbar.Brand href="#home">+55 (21) 3269-2869</Navbar.Brand>

        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link>
            <Image src={facebook} alt="facebook" />
          </Nav.Link>

          <Nav.Link>
            <Image src={envelope} alt="envelope" />
          </Nav.Link>

          <Nav.Link>
            <Image src={instagram} alt="instagram" />
          </Nav.Link>
        </Nav>
      </Navbar>

      {/* LOGO */}
      <Row>
        <Col xs lg="2">
          <Image height="100%" src={Mograbi_logo_nao_oficial} alt="logo" />
        </Col>
        {/* Coluna com navbar, botões e search */}
        <Col height="100%">
          {/* <div class="d-flex flex-row bd-highlight justify-content-around align-items-center mb-3"> */}
          <Row>
            <Col>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="primary">
                  <Image src={searchIcon} alt="search" />
                </Button>
              </Form>
            </Col>
            <Col>
              <Button>
                <Image src={personIcon} alt="person" />
                Minha Conta
                <personIcon />
              </Button>
            </Col>

            <Col >
              <Button>
                <Image src={heartIcon} alt="heart" />
                Wishlist
              </Button>
            </Col>

            <Col>
              <Button>
                <Image src={cartIcon} alt="cart" />
              </Button>
            </Col>
            
          </Row>
          <Navbar bg="secondary" expand="lg">
            <ResponsiveSelectMenu />
          </Navbar>
        </Col>
      </Row>
    </>
  );
};

export default Header;
