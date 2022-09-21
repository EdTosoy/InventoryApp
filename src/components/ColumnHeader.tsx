import React from "react";

type ColumnHeaderProps = {
  label: string;
};

function ColumnHeader({ label }: ColumnHeaderProps) {
  return (
    <h3 className="font-bold text-lg text-white py-3 max-w-lg">{label}</h3>
  );
}

export default ColumnHeader;
