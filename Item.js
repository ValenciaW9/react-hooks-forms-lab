import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  // State for form inputs
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    // Create a new item object
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };

    // Pass the new item to the callback prop
    onItemFormSubmit(newItem);

    // Reset form inputs
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