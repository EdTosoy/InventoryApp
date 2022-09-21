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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h3>Add new item</h3>
      </div>
      <div className="flex gap-5 justify-center">
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
        <button type="submit">Add Item</button>
      </div>
    </form>
  );
}

export default NewItemForm;
