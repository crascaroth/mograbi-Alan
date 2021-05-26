import {
  Nav,
  NavDropdown
  
} from "react-bootstrap";
import React, { useState } from "react";

import { useContext } from "react";
import Context from "../../GlobalState/Context";
import Header from "../../Components/Header/Header";

const ResponsiveSelectMenu = () => {
  const { states, setters, requests } = useContext(Context);

    const [selections, setSelections] = useState([]);
    

  return (
    <Nav className="mr-auto color-white" >
      <Nav.Link href="#home" class="text-white">
        Tricoline Lisa
      </Nav.Link>
      <NavDropdown title="Tricoline Rotativa" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Animais</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Bolinhas/Poá</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Coração</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Caveira</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Cozinha</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Doces</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Frutas</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Tricoline Digital"  id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Floral</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Geométrico</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Infantil</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Listrado</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Musical</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#home">Viscose Digital</Nav.Link>
      <Nav.Link href="#home">Viscose Lisa</Nav.Link>
    </Nav>
  );
};

export default ResponsiveSelectMenu;
