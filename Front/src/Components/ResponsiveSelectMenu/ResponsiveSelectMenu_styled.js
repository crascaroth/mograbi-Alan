import { Nav, NavDropdown } from "react-bootstrap";
import styled from "styled-components";

export const MenuInterativo = styled(Nav)`
  display: flex;
  background-color: black;
  width: 60vw;
  color: white;

  height: 10vh;

  justify-content: space-evenly;
  align-items: center;

  font-size: 2em;
`;

export const ItemSingular = styled(Nav)`
 .nav.nav-link.a {
    color: white !important;
  }
`;

export const ItemDropdown = styled(NavDropdown)`
  
  a {
    color: white;
  }

`;
