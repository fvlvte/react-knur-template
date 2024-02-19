import { useState } from "react";

function Zadanie2() {
  const [text, setText] = useState("text");

  const papiezImg =
    "https://i.gremicdn.pl/image/free/a9ebca23aec49667fb062fd8aa64f53a/?t=resize:fill:408:255,enlarge:1";

  return (
    <>
      <p>{text}</p>
      <input
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <br />
      {text === "papiez" && <img src={papiezImg} />}
    </>
  );
}

export { Zadanie2 };
