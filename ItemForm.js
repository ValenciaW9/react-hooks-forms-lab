import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  function handleSubmit(event) {
    event.preventDefault();

    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };

    onItemFormSubmit(newItem);

    setItemName("");
    setItemCategory("Produce");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={itemName}
            onChange={(event) => setItemName(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Category:
          <select
            value={itemCategory}
            onChange={(event) => setItemCategory(event.target.value)}
          >
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Dessert">Dessert</option>
          </select>
        </label>
      </div>
      <button type="submit">Add Item</button>
    </form>
  );
}

export default ItemForm;