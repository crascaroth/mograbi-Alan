import { useContext } from "react";
import Context from "../../../GlobalState/Context";

import {
  BoxProduct,
  ImgProduct,
  TextBox,
  TitleProductCard,
  Preco,
  BoxButtons,
  AdicionarCarrinho,
  HeartButton,
  BoxImage,
  Products,
} from "./ProductsGrid_styled";

import whiteHeartIcon from "../../../Images/whiteHeartIcon.svg";

import { useHistory } from "react-router-dom";
import { goToPage } from "../../../Router/Walker";

const ProductsGrid = () => {
  const history = useHistory();

  const { states, setters, requests } = useContext(Context);

  return (
    <Products>
      {states.products.map((product) => {
        return (
          <BoxProduct>
            <BoxImage>
              <ImgProduct
                onClick={() => goToPage(history, `/product/${product.pk}`)}
                src={product.productPicture[0]}
              />
            </BoxImage>
            <TextBox
              onClick={() => goToPage(history, `/product/${product.pk}`)}
            >
              <TitleProductCard>{product.productName}</TitleProductCard>
              <Preco>R$ {product.productValue}</Preco>
            </TextBox>
            <BoxButtons>
              <AdicionarCarrinho>Adicionar ao carrinho</AdicionarCarrinho>
              <HeartButton>
                <img src={whiteHeartIcon} />
              </HeartButton>
            </BoxButtons>
          </BoxProduct>
        );
      })}
    </Products>
  );
};

export default ProductsGrid;
