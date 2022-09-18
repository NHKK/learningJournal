import { Component, createSignal } from "solid-js";
import Six from "./six";
import Four from "./four";

const Dice: Component = () => {
  const [roll, setRoll] = createSignal(6);
  return (
    <div class="container">
      <h1>Dice Rolls</h1>
      <article>
        <header>Six (6) Sided</header>
        <div>
          <button onClick={() => setRoll(Math.floor(Math.random() * 6 + 1))}>
            roll
          </button>
          <Six rollnum={roll} />
          <Four rollnum={roll} />
          {/* <Six rollnum={roll} /> */}
        </div>
        <footer>Footer</footer>
      </article>
      {/*
      <button onClick={() => setRoll(Math.floor(Math.random() * 6 + 1))}>
        roll
      </button>
      <p> {roll} </p>
      */}
    </div>
  );
};

export default Dice;
