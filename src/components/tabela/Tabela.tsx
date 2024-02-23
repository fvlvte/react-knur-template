import { useState } from "react";

interface TabelaProp {
  nazwa: string;
  wiek: number;
  obrazek: string;
}

export const Tabela = ({ dane }: { dane: TabelaProp[] }) => {
  const [sort, setSort] = useState(false);

  function sortByWiek() {
    if (sort) dane = dane.sort((a, b) => a.wiek - b.wiek);
    else dane = dane.sort((a, b) => b.wiek - a.wiek);

    setSort(!sort);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>nazwa</th>
          <th onClick={sortByWiek}>wiek</th>
          <th>obrazek</th>
        </tr>
      </thead>
      <tbody>
        {dane.map((dane, index) => (
          <tr key={index}>
            <td>{dane.nazwa}</td>
            <td>{dane.wiek}</td>
            <td>
              <img
                height={128}
                width={128}
                src={dane.obrazek}
                alt={dane.nazwa}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
