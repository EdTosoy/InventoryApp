import React from "react";
import "./App.css";
import Header from "./components/Header";
import InventoryList from "./components/InventoryList";
import NewItemForm from "./components/NewItemForm";

function App() {
  return (
    <div className="App">
      <Header />
      <NewItemForm />
      <InventoryList />
    </div>
  );
}

export default App;
