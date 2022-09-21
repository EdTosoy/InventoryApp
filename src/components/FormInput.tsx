import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

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
      {displayLabel && <label>{label}</label>}
      <input
        {...register}
        value={value}
        className="block"
        disabled={isDisabled}
      />
    </div>
  );
}

export default FormInput;
