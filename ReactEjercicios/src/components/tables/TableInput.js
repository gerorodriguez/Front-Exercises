import React from "react";

const TableInput = ({ value, onChange }) => {
  return (
    <input
      type="number"
      value={value}
      onChange={onChange}
      placeholder="Ingrese la cantidad de patas"
    />
  );
};

export default TableInput;
