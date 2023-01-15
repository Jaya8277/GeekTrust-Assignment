import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import FilterOption from "./FilterPage/FillterPage";
import Search from "./SearchPage/Search";
import { CreateContextApp } from "../Context/ContextProvider";
import CardList from "./Cartdatapage/CardList";
const Home = () => {
  const { data, setData } = useContext(CreateContextApp);
  const [text, setText] = useState("");
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get(
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
      )
      .then((res) => {
        setData(res.data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  function SearchFunc(e) {
    e.preventDefault();

    let dataSearched = data.filter((e) =>
      e.name.toLowerCase().includes(text.toLowerCase())
    );
    setText("");
    setData(dataSearched);
  }

  return (
    <div>
      <Search text={text} setText={setText} SearchFunc={SearchFunc} />
      <FilterOption />
      <CardList data={data} />
    </div>
  );
};

export default Home;
