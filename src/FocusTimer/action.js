import state from "./state.js";
import * as timer from "./timer.js";
import * as el  from "./controls.js";

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
  el.minutes.setAttribute("contenteditable", true);
  el.minutes.focus()
}

export function toogleMusic() {
  state.isMute = document.documentElement.classList.toggle("music-on");
}
