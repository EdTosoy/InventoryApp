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
    <>
      <td className="p-2">
        <FormInput
          label="Product Name"
          register={register(productNameFieldName)}
          value={isEditable ? fields.productName : productName}
          isDisabled={!isEditable}
        />
      </td>
      <td className="p-2">
        <FormInput
          label="Quantity"
          register={register(quantityFieldName)}
          value={isEditable ? fields.quantity : quantity}
          isDisabled={!isEditable}
        />
      </td>
      <td className="p-2">
        <FormInput
          label="Cost Price"
          register={register(costPriceFieldName)}
          value={isEditable ? fields.costPrice : costPrice}
          isDisabled={!isEditable}
        />
      </td>
      <td className="p-2">
        <FormInput
          label="Stock Due Date"
          register={register(stockDueDateFieldName)}
          value={isEditable ? fields.stockDueDate : stockDueDate}
          isDisabled={!isEditable}
        />
      </td>
      <td className="p-3">
        <FormInput
          label="Supplier Name"
          register={register(supplierNameFieldName)}
          value={isEditable ? fields.supplierName : supplierName}
          isDisabled={!isEditable}
        />
      </td>
      <td className="p-2">
        <FormInput
          label="Amount"
          register={register(amountFieldName)}
          value={isEditable ? fields.amount : amount}
          isDisabled={!isEditable}
        />
      </td>
      <td className="p-2">
        <div className="flex gap-4">
          {!isEditable ? (
            <button onClick={() => toggleItemIsEditable(id)}>
              <div className="grid place-content-center">
                <box-icon type="solid" name="edit"></box-icon>
              </div>
            </button>
          ) : (
            <button onClick={handleOnSave}>
              <div className="grid place-content-center">
                <box-icon name="save" type="solid"></box-icon>
              </div>
            </button>
          )}

          <button onClick={() => removeItem(id)}>
            <div className="grid place-content-center">
              <box-icon name="trash"></box-icon>
            </div>
          </button>
        </div>
      </td>
    </>
  );
}

export default InventoryItem;
