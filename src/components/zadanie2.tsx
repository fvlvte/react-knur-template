/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

export const Zadanie2 = () => {
  const [papiez, setPapiez] = useState("");
  return (
    <>
      <p>Podaj haslo</p>
      <input onChange={(e) => setPapiez(e.target.value)}></input>
      {papiez === "papiez" ? (
        <img src="https://dziejesienapodkarpaciu.pl/wp-content/uploads/2020/05/jp2.jpg"></img>
      ) : (
        console.log("haslo nieprawidlowe")
      )}
    </>
  );
}
