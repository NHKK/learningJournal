import { Component, createSignal } from "solid-js";
import Eight from "./eight";
import Six from "./six";
import Four from "./four";

const Dice: Component = () => {
  const [roll, setRoll] = createSignal(6);
  const dimensions = { w: "50%", h: "25%" };
  return (
    <div class="container">
      <h1>Dice Rolls</h1>
      <article>
        <header>Sixf (6) Sided</header>
        <div>
          <button onClick={() => setRoll(Math.floor(Math.random() * 6 + 1))}>
            roll
          </button>
          {/* <div>
            <Eight rollnum={roll} dimensions={dimensions} />
            <Six rollnum={roll} dimensions={dimensions} />
            <Four rollnum={roll} dimensions={dimensions} />
          </div> */}
        </div>
        <footer>Footer</footer>
      </article>
      <div>
        <Eight rollnum={roll} dimensions={dimensions} />
        <Six rollnum={roll} dimensions={dimensions} />
        <Four rollnum={roll} dimensions={dimensions} />
      </div>
    </div>
  );
};

export default Dice;
