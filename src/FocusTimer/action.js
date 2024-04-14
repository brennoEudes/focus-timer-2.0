import state from "./state.js";
import * as timer from "./timer.js";
import * as el from "./controls.js";
import * as sounds from "./sounds.js";

export function toogleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");

  timer.countdown();
  sounds.buttonPressAudio.play();
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");
  timer.updateDisplay();
  sounds.buttonPressAudio.play();
}

export function set() {
  el.minutes.setAttribute("contenteditable", true);
  el.minutes.focus();
  sounds.buttonPressAudio.play();
}

export function toogleMusic() {
  state.isMute = document.documentElement.classList.toggle("music-on");

  if(state.isMute) {
    sounds.forestAudio.play()
    return
  }

  sounds.forestAudio.pause();
}
