/* eslint-disable @typescript-eslint/no-explicit-any */
import { Zadanie1 } from "./components/zadanie1";
import { Zadanie2 } from "./components/zadanie2";
import { Zadanie3i4 } from "./components/zadanie3i4";
import { Zadanie5 } from "./components/zadanie5";
import "./index.css";

function App() {
  return (
    <div className="kontener">
      <div className="lewa">
        <Zadanie1 />
        <Zadanie2 />
      </div>
      <div className="srodek">
        <Zadanie3i4 />
      </div>
      <div className="prawa">
        <Zadanie5 />
      </div>
    </div>
  );
}

export { App };
