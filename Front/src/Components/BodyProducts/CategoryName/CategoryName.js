import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Line from "../../../Images/Line.svg";

import { ImgLine, TitleCategory, BoxCategoryName } from "./CategoryName_styled";

const CategoryName = () => {
    const category = useParams()
    console.log("category", category)

  if (category === {}) {
    return (
      <BoxCategoryName>
        <ImgLine src={Line} />
        <TitleCategory>Ver Todos</TitleCategory>
        <ImgLine src={Line} />
      </BoxCategoryName>
    );
  }
  else{
    return (
        <BoxCategoryName>
          <ImgLine src={Line}/>
          <TitleCategory>{category.categoryName}/{category.subCategoryName}</TitleCategory>
          <ImgLine src={Line}/>
        </BoxCategoryName>
      );
  }
};

export default CategoryName;
