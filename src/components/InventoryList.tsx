import React, { useContext } from "react";
import { AppContext } from "../contextAPI/inventory";
import InventoryItem from "./InventoryItem";

type Props = {};

function InventoryList({}: Props) {
  const { inventoryItems } = useContext(AppContext);

  return (
    <div>
      {inventoryItems.map((inventoryItem) => {
        return <InventoryItem {...inventoryItem} />;
      })}
    </div>
  );
}

export default InventoryList;
