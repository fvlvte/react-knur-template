interface TabelaProp {
  nazwa: string;
  wiek: number;
  obrazek: string;
}

function Tabela({ dane }: { dane: TabelaProp[] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Nazwa</th>
          <th>Wiek</th>
          <th>Obrazek</th>
        </tr>
      </thead>
      <tbody>
        {dane.map((dane) => (
          <tr>
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
