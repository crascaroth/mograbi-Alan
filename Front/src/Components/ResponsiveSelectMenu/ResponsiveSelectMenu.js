import { Nav, NavDropdown } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import {
  MenuInterativo,
  ItemSingular,
  ItemDropdown,
  MenuSemImages,
  ItemDropdownModal
} from "./ResponsiveSelectMenu_styled.js";

import PolygonPequenoDireita from "../../Images/PolygonPequenoDireita.svg";
import PolygonPequenoEsquerda from "../../Images/PolygonPequenoEsquerda.svg";

import { useContext } from "react";
import Context from "../../GlobalState/Context";
import Header from "../../Components/Header/Header";

const ResponsiveSelectMenu = () => {
  const { states, setters, requests } = useContext(Context);

  useEffect(() => {
    requests.getAllCategories();
  }, []);

  return (
    <MenuInterativo>
      <img src={PolygonPequenoEsquerda} />

      {states.categories.map((category) => {
        if (category.subcategories === []) {
          return <ItemSingular>{category.categoryName}</ItemSingular>;
        } else {
          return (
            <ItemDropdown title={category.categoryName}>
              {category.subcategories.map((sub) => {
                return (
                  <ItemDropdownModal>{sub.categoryName}</ItemDropdownModal>
                );
              })}
            </ItemDropdown>
          );
        }
      })}

      <img src={PolygonPequenoDireita} />
    </MenuInterativo>
  );
};

export default ResponsiveSelectMenu;
