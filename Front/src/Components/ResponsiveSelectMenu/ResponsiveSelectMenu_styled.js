import { Nav, NavDropdown } from "react-bootstrap";
import styled from "styled-components";

export const MenuInterativo = styled(Nav)`
  display: flex;
  background-color: black;
  width: 60vw;
  color: white;

  font-size: 1.5em;
  height: 10vh;

  justify-content: space-between;
  align-items: center;
`;

export const ItemSingular = styled(Nav.Link)`
  color: white;
  
`;

export const ItemDropdown = styled(NavDropdown)`
  a {
    color: white;
  }
`;

export const ItemDropdownModal = styled(ItemDropdown.Item)`
background-color: black;
`

export const MenuSemImages = styled.div`
  color: white !important;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
`;
