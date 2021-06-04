import React, { useState } from "react";
import Context from "../GlobalState/Context.js";
import axios from "axios";
import { BASE_URL } from "../Constants/url";

const Provider = (props) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const getAllCategories = async () => {
    await axios
      .get(BASE_URL + "/dev/categorys")
      .then((res) => {
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
          primaryCat[i]["subcategories"] = secondaryCat[i];
        }
        setCategories(primaryCat);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAllProducts = async () => {
    await axios
      .get(BASE_URL + "/dev/products")
      .then((res) => {
        let productsArray =[]
        for(let i=0; i<res.data.length;i++){
          if(res.data[i].productPicture){
            productsArray.push(res.data[i])
          }
        }
        setProducts(productsArray);
        console.log("setProducts", res.data);
        const result = res.data 

        let tags = []

        for (let i = 0; i < result.length; i++) {
          if(result[i].productTag !== []){
            tags.push(result[i].productTag)
          }
        }
        console.log(tags)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const states = { categories, products };
  const setters = { setCategories, setProducts };
  const requests = { getAllCategories, getAllProducts };

  const data = { states, setters, requests };

  return <Context.Provider value={data}>{props.children}</Context.Provider>;
};

export default Provider;
