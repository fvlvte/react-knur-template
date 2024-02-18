/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

export const Zadanie1 = () => {
  const [licznik, setLicznik] = useState(0);
  return (
    <>
      <h1>KNURKAMP ELO</h1>
      <p>Licznik: {licznik}</p>
      <button onClick={() => setLicznik(licznik + 1)}>Zwieksz</button>
    </>
  );
}
