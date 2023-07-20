import React, { useState } from "react";

function Item({ name, category }) {
  const [itemState, setItemState] = useState({
    [name]: { isAdded: "", addedMessage: "Add to cart" },
  });

  function inCartClicked(e) {
    const clickedName = e.target.getAttribute("datacount");
    if (itemState[clickedName].isAdded === "") {
      setItemState((prevState) => ({
        ...prevState,
        [clickedName]: {
          ...prevState[clickedName],
          isAdded: "in-cart",
          addedMessage: "Remove From Cart",
        },
      }));
    } else {
      setItemState((prevState) => ({
        ...prevState,
        [clickedName]: {
          ...prevState[clickedName],
          isAdded: "",
          addedMessage: "Add to cart",
        },
      }));
    }
  }
  return (
    <li className={itemState[name].isAdded}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={inCartClicked} datacount={name}>
        {itemState[name].addedMessage}
      </button>
    </li>
  );
}

export default Item;
