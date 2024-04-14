import state from "./state.js";
import * as el from "./controls.js";

export function countdown() {
  if (!state.isRunning) {
    return;
  }
  console.log("Iniciou!");

  setTimeout(() => {
    countdown(), 1000;
  });
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;

  el.minutes.textContent = String(minutes).padStart(2, "0");
  el.seconds.textContent = String(seconds).padStart(2, "0");
}