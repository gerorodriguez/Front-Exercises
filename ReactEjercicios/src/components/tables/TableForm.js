import React, { useState } from "react";
import TableInput from "./TableInput";

const TableForm = () => {
  const [legsCount, setLegsCount] = useState("");

  const handleChange = (event) => {
    setLegsCount(event.target.value);
  };

  return (
    <div>
      <h2>Ingrese la cantidad de patas que tendrá la mesa</h2>
      <TableInput value={legsCount} onChange={handleChange} />
      {!legsCount && <p>Por favor, ingresar el número de patas.</p>}
      {legsCount && (
        <p>{legsCount === "4" ? "Mesa correcta" : "Mesa inestable"}</p>
      )}
    </div>
  );
};

export default TableForm;
