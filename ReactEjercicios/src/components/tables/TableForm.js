import React, { useState } from "react";
import TableInput from "./TableInput";

// 1. Deseamos crear dos componentes para el ingreso de la cantidad de patas que va a
// tener una mesa. Los componentes se denominan TableForm y TableInput, y
// necesitan cumplir los siguientes requisitos:
// TableInput:
// ● Este componente solo retornará un input en donde el usuario ingresará la
// cantidad de patas que va a tener la mesa.
// ● No es obligatorio pero se considerará puntos extra la buena utilización del
// two-way data binding
// TableForm:
// ● Debe tener un mensaje h2 que indique “Ingrese la cantidad de patas que
// tendrá la mesa”
// ● Debe importar y utilizar el componente TableInput.
// ● Debe tener un elemento p que:
// ○ En el caso de que el usuario escriba el valor 4 en el input, mostrará el
// mensaje “Mesa correcta”.
// ○ Caso que no sea 4 el valor del input, mostrará “Mesa inestable”
// Generales:
// ● El componente debe ser funcional.
// ● No es necesario ningún tipo de estilizado en la respuesta.
// ● Solo escribir dos componentes
// ● El único hook necesario para la resolución del ejercicio es useState

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
