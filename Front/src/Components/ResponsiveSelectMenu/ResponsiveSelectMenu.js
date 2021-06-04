import { Nav, NavDropdown } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import {
  MenuInterativo,
  ItemSingular,
  ItemDropdown,
  MenuSemImages,
  ItemDropdownModal,
} from "./ResponsiveSelectMenu_styled.js";

import PolygonPequenoDireita from "../../Images/PolygonPequenoDireita.svg";
import PolygonPequenoEsquerda from "../../Images/PolygonPequenoEsquerda.svg";

import { useContext } from "react";
import Context from "../../GlobalState/Context";

import { goToPage } from "../../Router/Walker";
import { useHistory } from "react-router-dom";

const ResponsiveSelectMenu = () => {
  const history = useHistory();

  const { states, setters, requests } = useContext(Context);

  useEffect(() => {
    requests.getAllCategories();
  }, []);

  return (
    <MenuInterativo>
      <img src={PolygonPequenoEsquerda} />

      {states.categories.map((category) => {
        if (category.subcategories === []) {
          return <ItemSingular onClick={() => goToPage(history, `/${category.categoryName}`)}>{category.categoryName}</ItemSingular>;
        } else {
          return (
            <ItemDropdown title={category.categoryName}>
              {category.subcategories.map((sub) => {
                return (
                  <ItemDropdownModal onClick={() => goToPage(history, `/${category.categoryName}/${sub.categoryName}`)}>
                    {sub.categoryName}
                  </ItemDropdownModal>
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
