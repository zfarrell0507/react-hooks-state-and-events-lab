import React, { useState } from "react";

function Item({ name, category }) {
  const [addItem, setAddItem] = useState(false)
  const handleAdd = () => {
    setAddItem(addItem => !addItem)
  }
  const itemClass = addItem ? "in-cart" : ""

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={addItem ? "remove" : "add"} onClick={handleAdd}>
        {addItem ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
