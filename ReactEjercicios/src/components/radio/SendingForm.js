import React, { useState } from "react";
import SendingRadio from "./SendingRadio";

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
