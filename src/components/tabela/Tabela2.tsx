import { useState } from "react";

interface TabelaProp {
  nazwa: string;
  wiek: number;
  obrazek: string;
}

function Tabela({ dane }: { dane: TabelaProp[] }) {
  const [sort, setSort] = useState(false);

  function sortByAge() {
    if (!sort) {
      dane = dane.sort((a, b) => a.wiek - b.wiek);
    } else {
      dane = dane.sort((a, b) => b.wiek - a.wiek);
    }
    setSort(!sort);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Nazwa</th>
          <th onClick={sortByAge}>Wiek</th>
          <th>Obrazek</th>
        </tr>
      </thead>
      <tbody>
        {dane.map((dane, index) => (
          <tr key={index}>
            <td>{dane.nazwa}</td>
            <td>{dane.wiek}</td>
            <td>
              <img src={dane.obrazek} alt={dane.nazwa} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export { Tabela };
