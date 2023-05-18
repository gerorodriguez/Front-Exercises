import React, { useState } from "react";

const Logins = () => {
  const [username, setUsername] = useState("");
  const handleChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.toLowerCase().includes("o")) {
      alert("Por favor, ingrese un nombre de usuario sin la letra  O");
    }
    setUsername(inputValue);
  };

  const handleRegister = () => {
    if (username === "") {
      alert("Por favor, ingrese un nombre de usuario");
    } else if (username.toLowerCase().includes("o")) {
      alert("Por favor, ingrese un nombre de usuario sin la letra  O");
    } else {
      alert("Bienvenido");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ingrese su username"
        onChange={handleChange}
        value={username}
      />
      <button onClick={handleRegister}>Registrarse</button>
      <p>{username}</p>
    </div>
  );
};

export default Logins;
