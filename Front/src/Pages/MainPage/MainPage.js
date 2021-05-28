import { useContext } from "react";
import Context from "../../GlobalState/Context";
import Header from "../../Components/Header/Header";
import BodyMain from "../../Components/BodyMain/BodyMain";
import BodyQuemSomos from "../../Components/BodyQuemSomos/BodyQuemSomos.js";

import { Screen } from "./Screen/screen_styled";

const MainPage = () => {
  const { states, setters, requests } = useContext(Context);

  return (
    <>
      <Screen style={{ backgroundColor: "orange" }}>
        <Header />
        <BodyMain />
      </Screen>

      <Screen style={{ backgroundColor: "#4444" }}>
        
            <BodyQuemSomos/>
        
      </Screen>
    </>
  );
};

export default MainPage;
