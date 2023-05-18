import React, { useState } from "react";
import AttendeeInput from "./AttendeeInput";

const AttendeeForm = () => {
  const [attendees, setAttendees] = useState("");
  const handleAttendee = (e) => {
    setAttendees(e.target.value);
  };


  const handleRegister = (e) => {
    if (attendees !== "") {
        alert("Usuario registrado");
    } else {
        alert("Por favor ingrese el nombre del asistente");
    }
}

  return (
    <div>
      <h2>Ingrese el nombre del asistente</h2>
      <AttendeeInput onClick={handleRegister} value={attendees} onChange={handleAttendee} />
      {!attendees && <p>Por favor ingrese el nombre del asistente</p>}
      {attendees && <p>{handleRegister}</p>}
    </div>
  );
};

export default AttendeeForm;
