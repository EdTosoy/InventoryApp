import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../contextAPI/inventory";
import FormInput from "./FormInput";
import { NewItemFormInput } from "./NewItemForm";

type Props = {
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
}: Props) {
  const { register, watch } = useForm<NewItemFormInput>();
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
        register={register("productName")}
        value={isEditable ? fields.productName : productName}
        isDisabled={!isEditable}
      />
      <FormInput
        label="Quantity"
        register={register("quantity")}
        value={isEditable ? fields.quantity : quantity}
        isDisabled={!isEditable}
      />
      <FormInput
        label="Cost Price"
        register={register("costPrice")}
        value={isEditable ? fields.costPrice : costPrice}
        isDisabled={!isEditable}
      />
      <FormInput
        label="Stock Due Date"
        register={register("stockDueDate")}
        value={isEditable ? fields.stockDueDate : stockDueDate}
        isDisabled={!isEditable}
      />
      <FormInput
        label="Supplier Name"
        register={register("supplierName")}
        value={isEditable ? fields.supplierName : supplierName}
        isDisabled={!isEditable}
      />
      <FormInput
        label="Amount"
        register={register("amount")}
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
