import { useState } from "react";

const Login = () => {
  const [userRegistered, setUserRegistered] = useState("");
  const handleChange = (event) => {
    setUserRegistered(event.target.value);
  };
  const handleRegister = () => {
    if (userRegistered.toLowerCase().includes("o")) {
      alert("Por favor, nombres de usuario sin la letra o o O");
    } else {
      alert("Bienvenido");
    }
  };
  return (
    <div>
      <input
        type="text"
        value={userRegistered}
        onChange={handleChange}
        placeholder="Ingresa tu username"
      ></input>
      <button onClick={handleRegister}>Registrarse</button>
    </div>
  );
};

export default Login;
