import { createContext, useState } from "react";
import { InventoryInferface } from "../types/Inventory";
import { getLocallyStoredValues } from "../utils/getLocallyStoredValues";

type ContextProps = {
  inventoryItems: InventoryInferface[];
  setInventoryItems: React.Dispatch<React.SetStateAction<InventoryInferface[]>>;
  addItem: (
    amount: number | string,
    costPrice: number | string,
    productName: string,
    quantity: number | string,
    stockDueDate: string,
    supplierName: string
  ) => void;
  updateItem: (
    id: number,
    amount: number | string,
    costPrice: number | string,
    productName: string,
    quantity: number | string,
    stockDueDate: string,
    supplierName: string
  ) => void;
  toggleItemIsEditable: (id: number) => void;
  removeItem: (id: number) => void;
};

export const AppContext = createContext<ContextProps>({
  inventoryItems: [],
  setInventoryItems: () => {},
  addItem: () => {},
  updateItem: () => {},
  toggleItemIsEditable: () => {},
  removeItem: () => {},
});

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const storedValues = getLocallyStoredValues();
  const [inventoryItems, setInventoryItems] = useState<InventoryInferface[]>(
    storedValues || []
  );

  const addItem = (
    amount: number | string,
    costPrice: number | string,
    productName: string,
    quantity: number | string,
    stockDueDate: string,
    supplierName: string
  ) => {
    setInventoryItems((prevValue) => [
      ...prevValue,
      {
        id: inventoryItems.length + 1,
        isEditable: false,
        amount,
        costPrice,
        productName,
        quantity,
        stockDueDate,
        supplierName,
      },
    ]);
  };
  const updateItem = (
    id: number,
    amount: number | string,
    costPrice: number | string,
    productName: string,
    quantity: number | string,
    stockDueDate: string,
    supplierName: string
  ) => {
    const newInventoryItems = [...inventoryItems];
    const selectedItem = newInventoryItems.find(
      (inventoryItem) => inventoryItem.id === id
    );
    if (selectedItem) {
      selectedItem.amount = amount;
      selectedItem.costPrice = costPrice;
      selectedItem.productName = productName;
      selectedItem.quantity = quantity;
      selectedItem.stockDueDate = stockDueDate;
      selectedItem.supplierName = supplierName;
      selectedItem.isEditable = !selectedItem.isEditable;
    }
    setInventoryItems(newInventoryItems);
  };

  const toggleItemIsEditable = (id: number) => {
    const newInventoryItems = [...inventoryItems];
    const selectedItem = newInventoryItems.find(
      (inventoryItem) => inventoryItem.id === id
    );
    if (selectedItem) {
      selectedItem.isEditable = !selectedItem.isEditable;
    }
    setInventoryItems(newInventoryItems);
  };

  const removeItem = (id: number) => {
    const updatedInventoryItems = inventoryItems.filter(
      (inventoryItem) => inventoryItem.id !== id
    );
    setInventoryItems(updatedInventoryItems);
  };

  return (
    <AppContext.Provider
      value={{
        inventoryItems,
        setInventoryItems,
        addItem,
        toggleItemIsEditable,
        updateItem,
        removeItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
