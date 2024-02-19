import { Tabela } from "./components/tabela/Tabela2";

interface TabelaProp {
  nazwa: string;
  wiek: number;
  obrazek: string;
}

function Zadanie4() {
  const tabelaData: TabelaProp[] = [
    {
      nazwa: "String 1",
      wiek: 69,
      obrazek:
        "https://i.gremicdn.pl/image/free/a9ebca23aec49667fb062fd8aa64f53a/?t=resize:fill:408:255,enlarge:1",
    },
    {
      nazwa: "String 2",
      wiek: 21,
      obrazek:
        "https://i.gremicdn.pl/image/free/a9ebca23aec49667fb062fd8aa64f53a/?t=resize:fill:408:255,enlarge:1",
    },
    {
      nazwa: "String 3",
      wiek: 37,
      obrazek:
        "https://i.gremicdn.pl/image/free/a9ebca23aec49667fb062fd8aa64f53a/?t=resize:fill:408:255,enlarge:1",
    },
    {
      nazwa: "String 4",
      wiek: 420,
      obrazek:
        "https://i.gremicdn.pl/image/free/a9ebca23aec49667fb062fd8aa64f53a/?t=resize:fill:408:255,enlarge:1",
    },
  ];

  return (
    <>
      <Tabela dane={tabelaData} />
    </>
  );
}

export { Zadanie4 };
