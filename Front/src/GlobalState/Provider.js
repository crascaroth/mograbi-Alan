import React, { useState } from "react";
import Context from "../GlobalState/Context.js";
import axios from "axios";
import { BASE_URL } from "../Constants/url";

const Provider = (props) => {
  const [categories, setCategories] = useState([])

  const getAllCategories = async () => {
    console.log("BASE_URL", BASE_URL);
    await axios
      .get(BASE_URL + "/dev/categorys")
      .then((res) => {
        console.log(res);
        const allCategories = res.data;
        let primaryCat = [];
        let secondaryCat = [];

        for (let i = 0; i < allCategories.length; i++) {
          if (allCategories[i].categoryType === "categoria") {
            primaryCat.push(allCategories[i]);
          }
        }

        for (let i = 0; i < primaryCat.length; i++) {
            secondaryCat[i] = [];
          for (let j = 0; j < allCategories.length; j++) {
            if (primaryCat[i].pk === allCategories[j].categorylvl1) {
                secondaryCat[i].push(allCategories[j]);
            }
          }
          primaryCat[i]["subcategories"] = secondaryCat[i]
        }


        console.log("primaryCategories", primaryCat)
        setCategories(primaryCat)
        // console.log("secondaryCat", secondaryCat);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const states = { categories };
  const setters = { setCategories };
  const requests = { getAllCategories };

  const data = { states, setters, requests };

  return <Context.Provider value={data}>{props.children}</Context.Provider>;
};

export default Provider;
