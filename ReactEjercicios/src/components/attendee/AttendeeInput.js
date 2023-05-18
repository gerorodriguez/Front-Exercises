import React from "react";

const AttendeeInput = ({ onChange, value, onClick }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="nombre del asistente"
      ></input>
      <button onClick={onClick}>Registrarse</button>
    </div>
  );
};

export default AttendeeInput;
