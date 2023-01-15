import React from "react";
import "./single.css";

const SingleItem = ({ img, name, price, qty, id, handQty, handleDelete }) => {
  return (
    <div className="cartcard">
      <img src={img} alt="/" />
      <div>
        <h3>{name}</h3>
        <h3>{price}</h3>
      </div>

      <select onChange={() => handQty(id, qty)}>
        {new Array(qty).fill(0)?.map((e, i) => (
          <option value={i + 1}>Qty:{i + 1}</option>
        ))}
      </select>
      <button id="cardbtn" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default SingleItem;
