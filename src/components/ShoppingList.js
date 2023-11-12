import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  // state variable to keep track of the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // event handler for the change in select
  const handleCategoryChange =(event) => {
    setSelectedCategory(event.target.value);
  };

  // filter items based on selected category
  // the selectedCategory === "All"  return true or false
  const filteredItems = selectedCategory === "All" ? items : items.filter(item => item.category === selectedCategory);

  return (
    <div className="ShoppingList">
      <div className="Filter">
        {/* Use the event handler onChange on the select change */}
        <select name="filter" onChange = {handleCategoryChange} value = {selectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item 
          key={item.id} 
          name={item.name} 
          category={item.category} 
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
