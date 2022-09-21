import React, { useContext } from "react";
import { AppContext } from "../contextAPI/inventory";
import ColumnHeader from "./ColumnHeader";
import InventoryItem from "./InventoryItem";

function InventoryList() {
  const { inventoryItems } = useContext(AppContext);

  return (
    <table className="w-7xl m-auto">
      <thead className="bg-gray-800">
        <tr>
          <th>
            <ColumnHeader label="Product Name" />
          </th>
          <th>
            <ColumnHeader label="Quantity" />
          </th>
          <th>
            <ColumnHeader label="Cost Price" />
          </th>
          <th>
            <ColumnHeader label="Stock Due Date" />
          </th>
          <th>
            <ColumnHeader label="Supplier Name" />
          </th>
          <th>
            <ColumnHeader label="Amount" />
          </th>
          <th>
            <ColumnHeader label="Actions" />
          </th>
        </tr>
      </thead>
      <tbody>
        {inventoryItems.map((inventoryItem) => {
          return (
            <tr className="w-full gap-4">
              <InventoryItem {...inventoryItem} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default InventoryList;
