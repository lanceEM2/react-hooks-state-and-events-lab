import React, {useState} from "react";

function Item({ name, category }) {

  // state to track whether the item is in the cart or not
  const [isInCart, setIsInCart] = useState(false);

  // function to handle the button click and toggle the cart status
  const handleButtonClick = () => {
    setIsInCart((prevIsInCart) => !prevIsInCart);
  };

  // dynamically determine the className based on the cart status
  const cartClassName = isInCart ? "in-cart" : "";

  return (
    <li className={cartClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick = {handleButtonClick}>{isInCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
