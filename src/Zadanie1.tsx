import { useState } from "react";

function Zadanie1() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter((oldValue) => {
      return oldValue + 1;
    });
  }

  return (
    <>
      <p>{counter}</p>
      <button onClick={incrementCounter}>POWIĘKSZ LICZBĘ</button>
    </>
  );
}

export { Zadanie1 };
