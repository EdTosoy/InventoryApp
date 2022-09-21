import { createContext, useState } from "react";

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

interface InventoryInferface {
  id: number;
  productName: string;
  stockDueDate: string;
  supplierName: string;
  quantity: number | string;
  costPrice: number | string;
  amount: number | string;
  isEditable: boolean;
}

export const AppContext = createContext<ContextProps>({
  inventoryItems: [],
  setInventoryItems: () => {},
  addItem: () => {},
  updateItem: () => {},
  toggleItemIsEditable: () => {},
  removeItem: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: Props) => {
  const [inventoryItems, setInventoryItems] = useState<InventoryInferface[]>(
    []
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
    console.log(amount);
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
