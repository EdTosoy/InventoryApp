import React, { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AppContext } from "../contextAPI/inventory";
import FormInput from "./FormInput";

type Props = {};

export interface NewItemFormInput {
  productName: string;
  stockDueDate: string;
  supplierName: string;
  quantity: number | string;
  costPrice: number | string;
  amount: number | string;
}

const defaultValues = {
  productName: "",
  stockDueDate: "",
  supplierName: "",
  quantity: "",
  costPrice: "",
  amount: "",
};

function NewItemForm({}: Props) {
  const { addItem } = useContext(AppContext);
  const { register, handleSubmit, watch, reset } = useForm<NewItemFormInput>({
    mode: "onChange",
    defaultValues,
  });

  const {
    amount,
    costPrice,
    productName,
    quantity,
    stockDueDate,
    supplierName,
  } = watch();

  const onSubmit: SubmitHandler<NewItemFormInput> = () => {
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
        <FormInput label="Product Name" register={register("productName")} />
        <FormInput label="Quantity" register={register("quantity")} />
        <FormInput label="Cost Price" register={register("costPrice")} />
        <FormInput label="Stock Due Date" register={register("stockDueDate")} />
        <FormInput label="Supplier Name" register={register("supplierName")} />
        <FormInput label="Amount" register={register("amount")} />
        <button type="submit">Add Item</button>
      </div>
    </form>
  );
}

export default NewItemForm;
