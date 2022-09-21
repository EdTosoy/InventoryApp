import React, { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AppContext } from "../contextAPI/inventory";
import { ItemFormInput } from "../types";
import FormInput from "./FormInput";
import {
  amountFieldName,
  costPriceFieldName,
  itemInputDefaultValues,
  productNameFieldName,
  quantityFieldName,
  stockDueDateFieldName,
  supplierNameFieldName,
} from "../contants";

function NewItemForm() {
  const { addItem } = useContext(AppContext);
  const { register, handleSubmit, watch, reset } = useForm<ItemFormInput>({
    mode: "onChange",
    defaultValues: itemInputDefaultValues,
  });

  const {
    amount,
    costPrice,
    productName,
    quantity,
    stockDueDate,
    supplierName,
  } = watch();

  const onSubmit: SubmitHandler<ItemFormInput> = () => {
    addItem(
      amount,
      costPrice,
      productName,
      quantity,
      stockDueDate,
      supplierName
    );
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-7xl m-auto mb-14">
      <div>
        <h3 className="m-4 font-bold text-lg">Add new item</h3>
      </div>
      <div className="flex gap-1 justify-around items-end">
        <FormInput
          label="Product Name"
          register={register(productNameFieldName)}
          displayLabel
        />
        <FormInput
          label="Quantity"
          register={register(quantityFieldName)}
          displayLabel
        />
        <FormInput
          label="Cost Price"
          register={register(costPriceFieldName)}
          displayLabel
        />
        <FormInput
          label="Stock Due Date"
          register={register(stockDueDateFieldName)}
          displayLabel
        />
        <FormInput
          label="Supplier Name"
          register={register(supplierNameFieldName)}
          displayLabel
        />
        <FormInput
          label="Amount"
          register={register(amountFieldName)}
          displayLabel
        />
        <button
          type="submit"
          className="mr-1 rounded-md bg-blue-300 font-bold mb-2 p-2"
        >
          Add Item
        </button>
      </div>
    </form>
  );
}

export default NewItemForm;
