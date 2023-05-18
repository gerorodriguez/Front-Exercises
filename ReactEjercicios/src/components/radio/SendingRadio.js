const SendingRadio = ({ selectedOption, onChange }) => {
  return (
    <div>
      <label>
        <input
          type="radio"
          value="local"
          checked={selectedOption === "local"}
          onChange={onChange}
        />
        Retiro en el Local
      </label>
      <label>
        <input
          type="radio"
          value="express"
          checked={selectedOption === "express"}
          onChange={onChange}
        />
        Retiro express
      </label>
      <label>
        <input
          type="radio"
          value="comun"
          checked={selectedOption === "comun"}
          onChange={onChange}
        />
        Envio comun
      </label>
    </div>
  );
};

export default SendingRadio;
