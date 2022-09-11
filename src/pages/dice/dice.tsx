import { Component, createSignal } from "solid-js";
import sixSided from "../../assets/six.svg";
import Six from "./six";

const Dice: Component = () => {
  const [roll, setRoll] = createSignal(6);
  return (
    <div class="container">
      <h1>Dice Rolls</h1>
      <article>
        <header>Six (6) Sided</header>
        <div>
          <Six />
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
