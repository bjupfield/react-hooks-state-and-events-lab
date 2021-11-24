import React from "react";
import Item from "./Item";
import { useState } from "react";
function ShoppingList({ items }) {
  const[category, catChange] = useState("All")
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange ={e=>catChange((category)=>e.target.value)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {
        category === "All" ? items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        )) : items.filter((e)=>e.category === category).map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))
        }
      </ul>
    </div>
  );
}

export default ShoppingList;
