import React from "react";

const Table = ({ netIncomes }) => {
  const totalIncome = netIncomes.reduce((sum, item) => sum + item.income, 0);
  const averageIncome = totalIncome / netIncomes.length;
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Marca</th>
            <th>Ingreso neto</th>
          </tr>
        </thead>
        <tbody>
          {netIncomes.map((item) => (
            <tr key={item.brand}>
              <td>{item.brand}</td>
              <td>{item.income}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>El promedio es de {averageIncome}</p>
    </>
  );
};

export default Table;
