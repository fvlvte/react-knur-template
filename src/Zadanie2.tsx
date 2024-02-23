import { useState } from "react";

export const Zadanie2 = () => {
  const [password, setPassword] = useState("");

  return (
    <>
      <h2>ZADANIE 1 - Papiez</h2>
      <input
        onChange={(i) => setPassword(i.target.value)}
        placeholder="wpisz"
        value={password}
      />
      {password === "papiez" && (
        <img src="https://kjb24.pl/wp-content/uploads/2020/10/kjb24.pl-1.png" />
      )}
    </>
  );
};
