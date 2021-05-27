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
import TelefoneRedeSocial from "./TelefoneRedeSocial/TelefoneRedeSocial.js";

import personIcon from "../../Images/person.svg";
import heartIcon from "../../Images/heart.svg";
import searchIcon from "../../Images/search.svg";
import cartIcon from "../../Images/cart.svg";

import Mograbi_logo from "../../Images/Mograbi_logo.svg";

import {
  ColLogoMograbi,
  ColLadoLogo,
  RowSearchEBotoes,
  FormSearch,
  InputSearchBar,
  ButtonMinhaConta,
  ButtonWishList,
  ButtonCart,
  RowResponsiveMenu
} from "./Header_styled.js";

const Header = () => {
  const { states, setters, requests } = useContext(Context);

  return (
    <>
      <TelefoneRedeSocial />

      {/* LOGO */}
      <Row>
        <ColLogoMograbi xs lg="4">
          <Image src={Mograbi_logo} alt="logo" />
        </ColLogoMograbi>
        {/* Coluna com navbar, botões e search */}
        <ColLadoLogo>
          <RowSearchEBotoes>
            <Col>
              <FormSearch inline>
                <InputSearchBar
                  type="text"
                  placeholder="Digite aqui o que procura..."
                />
                <Button variant="primary">
                  <Image src={searchIcon} alt="search" />
                </Button>
              </FormSearch>
            </Col>
            <Col>
              <ButtonMinhaConta variant="outlined">
                <Image src={personIcon} alt="person" />
                Minha Conta
                <personIcon />
              </ButtonMinhaConta>
            </Col>

            <Col>
              <ButtonWishList variant="outlined">
                <Image src={heartIcon} alt="heart" />
                Wishlist
              </ButtonWishList>
            </Col>

            <Col>
              <ButtonCart>
                <Image src={cartIcon} alt="cart" />
              </ButtonCart>
            </Col>
          </RowSearchEBotoes>

          <RowResponsiveMenu>
            <ResponsiveSelectMenu />
          </RowResponsiveMenu>
        </ColLadoLogo>
      </Row>
    </>
  );
};

export default Header;
