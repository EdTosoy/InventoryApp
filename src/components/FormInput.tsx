import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import DatePicker from "react-date-picker";

type FormInputProps = {
  label: string;
  register: UseFormRegisterReturn<string>;
  displayLabel?: boolean;
  value?: string | number;
  isDisabled?: boolean;
};

function FormInput({
  label,
  register,
  displayLabel,
  value,
  isDisabled,
}: FormInputProps) {
  return (
    <div>
      {displayLabel && <label className="font-bold ">{label}</label>}
      <input
        {...register}
        value={value}
        className={`block my-1 rounded-sm py-2 px-1 w-full   ${
          isDisabled ? "bg-gray-200" : "border-2"
        }`}
        disabled={isDisabled}
      />
    </div>
  );
}

export default FormInput;
