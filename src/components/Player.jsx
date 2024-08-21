import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const playerNameRef = useRef("unknown entity");

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  const handleClick = () => {
    setEnteredPlayerName(playerNameRef.current.value);
  };

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unkown entity"}</h2>
      <p>
        <input ref={playerNameRef} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
