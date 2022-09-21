import React, { useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import InventoryList from "./components/InventoryList";
import NewItemForm from "./components/NewItemForm";
import { AppContext } from "./contextAPI/inventory";

function App() {
  const { inventoryItems } = useContext(AppContext);
  return (
    <div className="App">
      <Header />
      <NewItemForm />
      {inventoryItems?.length ? <InventoryList /> : null}
    </div>
  );
}

export default App;
