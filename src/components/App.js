import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // use the useState hook to cretae a state variable for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // event handler for toggling between dark and light mode
  // prevMode represents the mode of isDarkMode
  const handleDarkModeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode)
  }
  const appClass = isDarkMode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        {/* onClick event handler */}
        <button onClick = {handleDarkModeToggle}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
