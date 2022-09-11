import { Component, createSignal } from "solid-js";
import { Routes, Route } from "@solidjs/router";
import Dice from "./pages/dice/dice";

const App: Component = () => {
  return (
    <div class="container">
      <h1> TBD IDK yet </h1>
      <Routes>
        <Route path="/dice" component={Dice} />
      </Routes>
    </div>
  );
};

export default App;
