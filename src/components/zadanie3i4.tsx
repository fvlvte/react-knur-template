/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

export const Zadanie3i4 = () => {
  const segregacja = () => {
    const sortujemy = [...segregowanie];
    sortujemy.sort((a, b) => a.wiek - b.wiek);
    setSegregowanie(sortujemy);
  };
  const dane = [
    {
      nazwa: "papaj",
      wiek: 104,
      obrazek:
        "https://i1.sndcdn.com/artworks-000296230950-zfa2yh-t500x500.jpg",
    },
    {
      nazwa: "okon",
      wiek: 3,
      obrazek: "https://ryby.wwf.pl/wp-content/uploads/2016/10/287893.jpg",
    },
    {
      nazwa: "szczupak",
      wiek: 6,
      obrazek:
        "https://www.medianauka.pl/biologia/grafika/ryby/big/szczupak.jpg",
    },
    {
      nazwa: "sum",
      wiek: 12,
      obrazek:
        "https://sklep.smolinfish.pl/environment/cache/images/0_0_productGfx_193/sum-tusza-2.jpg",
    },
    {
      nazwa: "leszcz",
      wiek: 2,
      obrazek: "https://pzwtarnow.pl/images/ryby/leszcz.jpg",
    },
  ];

  const [segregowanie, setSegregowanie] = useState(dane);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Nazwa</th>
            <th>Wiek</th>
            <th>Obrazek</th>
          </tr>
        </thead>
        <tbody>
          {segregowanie.map((dana) => (
            <tr key={dana.wiek}>
              <td>{dana.nazwa}</td>
              <td>{dana.wiek}</td>
              <td>
                <img src={dana.obrazek} width={200} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={segregacja}>Segregacja</button>
    </>
  );
};
