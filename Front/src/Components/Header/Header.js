import { useContext } from 'react';
import Context from '../../GlobalState/Context';
import Button from 'react-bootstrap/Button';
import { Nav, NavDropdown, Navbar, Form, FormControl, Container, Col, Row } from 'react-bootstrap';

import personIcon from "../../Images/person.svg";
import heartIcon from "../../Images/heart.svg";
import searchIcon from "../../Images/search.svg";
import cartIcon from "../../Images/cart.svg";
import telephone from "../../Images/telephone.svg";
import facebook from "../../Images/facebook.svg";
import envelope from "../../Images/envelope.svg";
import instagram from "../../Images/instagram.svg";
import Mograbi_logo_nao_oficial from "../../Images/Mograbi_logo_nao_oficial.png"

const Header = () => {

    const { states, setters, requests } = useContext(Context)

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <img src={telephone} alt="telephone"></img>
                <Navbar.Brand href="#home">+55 (21) 3269-2869</Navbar.Brand>


                <Nav className="mr-auto">

                </Nav>
                <Nav>
                    <Nav.Link>
                        <img src={facebook} alt="facebook"></img>
                    </Nav.Link>

                    <Nav.Link>
                        <img src={envelope} alt="envelope"></img>
                    </Nav.Link>

                    <Nav.Link>
                        <img src={instagram} alt="instagram"></img>
                    </Nav.Link>

                </Nav>

            </Navbar>

            <Row>

                <Col xs lg="2">
                    <img width="100%" src={Mograbi_logo_nao_oficial} alt="logo"></img>
                </Col>



                <Col >



                    <Container>
                        <Container>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-primary">
                                    <img src={searchIcon} alt="search"></img>
                                </Button>
                            </Form>
                        </Container>

                        <Button>
                            <img src={personIcon} alt="person"></img>

                    Minha Conta
                <personIcon />
                        </Button>

                        <Button>
                            <img src={heartIcon} alt="heart"></img>

                    Wishlist

                </Button>

                        <Button>
                            <img src={cartIcon} alt="cart"></img>
                        </Button>

                    </Container>

                    <Navbar bg="dark" expand="lg" >
                        <Container width="100%" >
                            <Nav className="mr-auto" text="white" >
                                <Nav.Link href="#home" >Tricoline Lisa</Nav.Link>
                                <NavDropdown title="Tricoline Rotativa" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Animais</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Bolinhas/Poá</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Coração</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Caveira</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Cozinha</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Doces</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Frutas</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Tricoline Digital" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Floral</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Geométrico</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Infantil</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Listrado</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Musical</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#home">Viscose Digital</Nav.Link>
                                <Nav.Link href="#home">Viscose Lisa</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar >
                </Col>
            </Row>
        </>

    )
}

export default Header