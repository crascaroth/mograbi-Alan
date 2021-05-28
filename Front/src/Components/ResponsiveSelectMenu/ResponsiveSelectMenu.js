import { Nav, NavDropdown } from "react-bootstrap";
import React, { useState } from "react";
import {
  MenuInterativo,
  ItemSingular,
  ItemDropdown,
} from "./ResponsiveSelectMenu_styled.js";

import { useContext } from "react";
import Context from "../../GlobalState/Context";
import Header from "../../Components/Header/Header";

const ResponsiveSelectMenu = () => {
  const { states, setters, requests } = useContext(Context);

  const [selections, setSelections] = useState([]);

  return (
    <MenuInterativo>
      <ItemSingular.Link >Tricoline Lisa</ItemSingular.Link>
      <ItemDropdown title="Tricoline Rotativa" id="basic-nav-dropdown">
        <ItemDropdown.Item href="#action/3.1">Animais</ItemDropdown.Item>
        <ItemDropdown.Item href="#action/3.2">Bolinhas/Poá</ItemDropdown.Item>
        <ItemDropdown.Item href="#action/3.3">Coração</ItemDropdown.Item>
        <ItemDropdown.Item href="#action/3.3">Caveira</ItemDropdown.Item>
        <ItemDropdown.Item href="#action/3.3">Cozinha</ItemDropdown.Item>
        <ItemDropdown.Item href="#action/3.3">Doces</ItemDropdown.Item>
        <ItemDropdown.Item href="#action/3.3">Frutas</ItemDropdown.Item>
      </ItemDropdown>
      <ItemDropdown title="Tricoline Digital" id="basic-nav-dropdown">
        <ItemDropdown.Item href="#action/3.1">Floral</ItemDropdown.Item>
        <ItemDropdown.Item href="#action/3.2">Geométrico</ItemDropdown.Item>
        <ItemDropdown.Item href="#action/3.3">Infantil</ItemDropdown.Item>
        <ItemDropdown.Item href="#action/3.3">Listrado</ItemDropdown.Item>
        <ItemDropdown.Item href="#action/3.3">Musical</ItemDropdown.Item>
      </ItemDropdown>
      <ItemSingular.Link href="#home">Viscose Digital</ItemSingular.Link>
      <ItemSingular.Link href="#home">Viscose Lisa</ItemSingular.Link>
    </MenuInterativo>
  );
};

export default ResponsiveSelectMenu;
