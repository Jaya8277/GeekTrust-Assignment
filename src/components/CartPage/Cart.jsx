import React, { useContext, useState } from "react";
import "./Cart.css";
import { CreateContextApp } from "../../Context/ContextProvider";
export default function Card(props) {
  const { imageURL, name, price } = props;

  const [flag, setFlag] = useState(false);
  const { cart, setCart } = useContext(CreateContextApp);
  function handleAddToCart(item) {
    console.log(item);

    setCart([...cart, { ...item, quant: 1 }]);
    setFlag(true);
    alert("Data Added Succesfully to Cart");
  }

  return (
    <div className="card">
      <img src={imageURL} alt="/" />
      <div>
        <h3 id="name1">{name}</h3>
        <h3>Rs {price}</h3>
        <button disabled={flag} onClick={() => handleAddToCart(props)}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
