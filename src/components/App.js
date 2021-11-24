import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = "c"
  const [darkOn, setDarkon] = useState(true);
  function clickButton(){
    setDarkon((darkOn)=> !darkOn);
  }
  // function DarkMode(){
  //   const [darkOn, setDarkon] = useState(false);
  //   function clickButton(){
  //     setDarkon((darkOn)=> !darkOn);
  //   }
  //   return <button onClick={clickButton} className = {darkOn ? "App light" : "App dark"}>{darkOn ? "ON" : "OFF"}</button>
  // }

  return (
    <div className={darkOn ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={clickButton} className = {darkOn ? "App light" : "App dark"}>{darkOn ? "Light Mode" : "Dark Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
