import React, { useContext } from "react";
import { CreateContextApp } from "../../Context/ContextProvider";
import SingleItem from "./SingleItem";
import "./single.css";
export default function Products() {
  const { cart, setCart } = useContext(CreateContextApp);

  function handleDelete(id) {
    let deleteItems = cart.filter((e) => e.id !== id);
    setCart(deleteItems);
  }

  function handQty(id, qty) {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === id) {
          return { ...item, qty: item.qty + qty };
        }
        return item;
      })
    );
  }
  return (
    <div className="products">
      <h1>Shopping Cart</h1>
      <div className="maincontainer">
        {cart.length <= 0 ? (
          <h1>No cart available...</h1>
        ) : (
          cart?.map((elem) => (
            <SingleItem
              handQty={handQty}
              handleDelete={handleDelete}
              name={elem.name}
              img={elem.imageURL}
              quant={elem.quantity}
              id={elem.id}
              price={elem.price}
            />
          ))
        )}
      </div>
    </div>
  );
}
