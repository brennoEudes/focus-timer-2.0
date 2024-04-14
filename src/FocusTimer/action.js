import state from "./state.js";

export function toogleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");
}

export function set() {
  console.log("set!");
}

export function toogleMusic() {
  state.isMute = document.documentElement.classList.toggle("music-on");
}
