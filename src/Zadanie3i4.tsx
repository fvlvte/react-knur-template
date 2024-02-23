import { Tabela } from "./components/tabela/Tabela";

export const Zadanie3i4 = () => {
  const dane = [
    {
      nazwa: "papaj",
      wiek: 104,
      obrazek: "https://kjb24.pl/wp-content/uploads/2020/10/kjb24.pl-1.png",
    },
    {
      nazwa: "jacuś",
      wiek: 69,
      obrazek:
        "https://warszawawpigulce.pl/wp-content/uploads/2021/07/42-663331-1.jpg",
    },
    {
      nazwa: "narciarz",
      wiek: 42,
      obrazek:
        "https://d-art.ppstatic.pl/kadry/k/r/56/2c/5a8dc749df415_o_original.jpg",
    },
    {
      nazwa: "pudzian",
      wiek: 49,
      obrazek:
        "https://img.wprost.pl/img/mariusz-pudzianowski/08/4f/65355d0080cf7f74c123d184f4ee.jpeg",
    },
  ];

  return (
    <>
      <h2>ZADANIE 3 i 4 - Tabela</h2>
      <Tabela dane={dane} />
    </>
  );
};
