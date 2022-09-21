import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../contextAPI/inventory";
import { ItemFormInput } from "../types";
import FormInput from "./FormInput";
import {
  productNameFieldName,
  quantityFieldName,
  costPriceFieldName,
  stockDueDateFieldName,
  supplierNameFieldName,
  amountFieldName,
} from "../contants";

type InventoryItemProps = {
  id: number;
  productName: string;
  stockDueDate: string;
  supplierName: string;
  quantity: number | string;
  costPrice: number | string;
  amount: number | string;
  isEditable: boolean;
};

function InventoryItem({
  id,
  amount,
  costPrice,
  productName,
  quantity,
  stockDueDate,
  supplierName,
  isEditable,
}: InventoryItemProps) {
  const { register, watch } = useForm<ItemFormInput>();
  const { toggleItemIsEditable, updateItem, removeItem } =
    useContext(AppContext);
  const fields = watch();
  const handleOnSave = () => {
    updateItem(
      id,
      fields.amount,
      fields.costPrice,
      fields.productName,
      fields.quantity,
      fields.stockDueDate,
      fields.supplierName
    );
  };
  return (
    <div className="flex gap-5 justify-center">
      <FormInput
        label="Product Name"
        register={register(productNameFieldName)}
        value={isEditable ? fields.productName : productName}
        isDisabled={!isEditable}
      />
      <FormInput
        label="Quantity"
        register={register(quantityFieldName)}
        value={isEditable ? fields.quantity : quantity}
        isDisabled={!isEditable}
      />
      <FormInput
        label="Cost Price"
        register={register(costPriceFieldName)}
        value={isEditable ? fields.costPrice : costPrice}
        isDisabled={!isEditable}
      />
      <FormInput
        label="Stock Due Date"
        register={register(stockDueDateFieldName)}
        value={isEditable ? fields.stockDueDate : stockDueDate}
        isDisabled={!isEditable}
      />
      <FormInput
        label="Supplier Name"
        register={register(supplierNameFieldName)}
        value={isEditable ? fields.supplierName : supplierName}
        isDisabled={!isEditable}
      />
      <FormInput
        label="Amount"
        register={register(amountFieldName)}
        value={isEditable ? fields.amount : amount}
        isDisabled={!isEditable}
      />

      <div className="flex gap-4">
        {!isEditable ? (
          <button onClick={() => toggleItemIsEditable(id)}>EDIT</button>
        ) : (
          <button onClick={handleOnSave}>Save</button>
        )}

        <button onClick={() => removeItem(id)}>REMOVE</button>
      </div>
    </div>
  );
}

export default InventoryItem;
