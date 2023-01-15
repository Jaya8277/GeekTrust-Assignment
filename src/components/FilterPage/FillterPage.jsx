import React, { useContext } from "react";
import { CreateContextApp } from "../../Context/ContextProvider";
import { handleFilter } from "../../Functions/Filter";

import "./FillterPage.css";
export default function FilterOption() {
  const { data, setData } = useContext(CreateContextApp);

  return (
    <div className="filter">
      <p>Colour</p>
      <div>
        <input
          type="checkbox"
          id="checkbox1"
          name="color"
          onChange={(e) => handleFilter(e, data, setData)}
          value="Red"
        />
        <label htmlFor="checkbox1">Red</label>
        <input
          type="checkbox"
          id="checkbox2"
          name="color"
          onChange={(e) => handleFilter(e, data, setData)}
          value="Blue"
        />
        <label htmlFor="checkbox2">Blue</label>
        <input
          type="checkbox"
          id="checkbox3"
          name="color"
          onChange={(e) => handleFilter(e, data, setData)}
          value="Green"
        />
        <label htmlFor="checkbox3">Green</label>
      </div>
      <p>Gender</p>
      <div>
        <input
          type="checkbox"
          id="checkbox1"
          name="gender"
          value="Men"
          onChange={(e) => handleFilter(e, data, setData)}
        />
        <label htmlFor="checkbox1">Men</label>
        <input
          type="checkbox"
          id="checkbox2"
          name="gender"
          value="Women"
          onChange={(e) => handleFilter(e, data, setData)}
        />
        <label htmlFor="checkbox2">Women</label>
      </div>
      <p>Price</p>
      <div>
        <input
          type="checkbox"
          id="checkbox1"
          name="price"
          onChange={(e) => handleFilter(e, data, setData)}
          value="0-250"
        />
        <label htmlFor="checkbox1">0-Rs250</label>
        <input
          type="checkbox"
          id="checkbox2"
          name="price"
          onChange={(e) => handleFilter(e, data, setData)}
          value="251-450"
        />
        <label htmlFor="checkbox2">Rs251-450</label>
        <input
          type="checkbox"
          id="checkbox3"
          name="price"
          onChange={(e) => handleFilter(e, data, setData)}
          value="450"
        />
        <label htmlFor="checkbox3">Rs450</label>
      </div>
      <p>Type</p>
      <div>
        <input
          type="checkbox"
          id="checkbox1"
          name="type"
          onChange={(e) => handleFilter(e, data, setData)}
          value="Polo"
        />
        <label htmlFor="checkbox1">Polo</label>
        <input
          type="checkbox"
          id="checkbox2"
          name="type"
          onChange={(e) => handleFilter(e, data, setData)}
          value="Hoodie"
        />
        <label htmlFor="checkbox2">Hoodie</label>
        <input
          type="checkbox"
          id="checkbox3"
          name="type"
          onChange={(e) => handleFilter(e, data, setData)}
          value="Basic"
        />
        <label htmlFor="checkbox3">Basic</label>
      </div>
    </div>
  );
}
