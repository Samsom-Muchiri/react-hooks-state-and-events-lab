import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [theme, setTheme] = useState({ darkMode: true });
  const appClass = theme.darkMode ? "App dark" : "App light";
  function togoleTheme(e) {
    theme.darkMode
      ? setTheme({ darkMode: false })
      : setTheme({ darkMode: true });
  }
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={togoleTheme}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
