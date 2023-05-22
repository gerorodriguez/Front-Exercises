import React, { useState } from "react";
import SendingRadio from "./SendingRadio";

// 2. Deseamos saber qué tipo de envío desea el usuario para su encomienda. Para ello,
// vamos a construir dos componentes que cumplan los siguientes requisitos:
// SendingRadio
// ● Este componente devolverá tres inputs del tipo radio (con sus respectivos
// labels), donde el cliente pueda seleccionar que tipo de envío prefiere (“Reitro
// en el local ”, “Envío express”, “Envío común”).
// ● Un div que recubra a los 3 inputs + labels.
// SendingForm
// ● Debe tener un elemento h2 que diga “Seleccione el tipo de envío”
// ● Debe importar y utilizar el componente SendingRadio
// ● En el caso de que se haya elegido una opción:
// ○ Si la opción que se eligió es Retiro en el local, devolvemos un
// elemento p con el texto “No hay recargo”.
// ○ Si elige la opción Envío común o Envío Express, devolvemos un
// elemento p con el texto “Tendrá recargo”
// ● En el caso de que la opción aún no haya sido elegida, no mostramos el
// elemento p.
// Generales
// ● El componente debe ser funcional.
// ● Solo escribir dos componentes
// ● El único hook necesario para la resolución del ejercicio es useState.
// No es necesario la utilización de un elemento form ni de un botón submit (ni de
// ningún botón), ya que la función deseada para la resolución es un onChange, no un
// onSubmit

const SendingForm = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h2>Seleccione el tipo de envio</h2>
      <SendingRadio selectedOption={selectedOption} onChange={handleChange} />
      {selectedOption && (
        <p>
          {selectedOption === "local" ? "No hay recargo" : "Tendra recargo"}{" "}
        </p>
      )}
    </div>
  );
};

export default SendingForm;
