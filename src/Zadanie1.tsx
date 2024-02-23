import { useState } from "react";

export const Zadanie1 = () => {
  const [licznik, setLicznik] = useState(0);

  function incrementLicznik() {
    setLicznik((n) => n + 1);
  }

  return (
    <>
      <h2>ZADANIE 1 - Licznik</h2>
      <p>{licznik}</p>
      <button onClick={incrementLicznik}>dodaj</button>
    </>
  );
};
