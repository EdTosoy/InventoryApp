import React, { useContext, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import InventoryList from "./components/InventoryList";
import NewItemForm from "./components/NewItemForm";
import { LOCAL_STORAGE_KEY } from "./contants";
import { AppContext } from "./contextAPI/inventory";

function App() {
  const { inventoryItems } = useContext(AppContext);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(inventoryItems));
  }, [inventoryItems]);

  return (
    <div className="App">
      <Header />
      <NewItemForm />
      {inventoryItems?.length ? <InventoryList /> : null}
    </div>
  );
}

export default App;
