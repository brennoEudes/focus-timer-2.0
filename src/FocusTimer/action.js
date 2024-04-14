import state from "./state.js";
import * as timer from "./timer.js";

export function toogleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");

  timer.countdown();
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");
  timer.updateDisplay()
}

export function set() {
  console.log("set!");
}

export function toogleMusic() {
  state.isMute = document.documentElement.classList.toggle("music-on");
}
