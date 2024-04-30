import state from "./state.js";
import * as timer from "./timer.js";
import * as el from "./controls.js";
import * as sounds from "./sounds.js";

export function toggleRunning() {
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

// Edição minutos (não necessário neste exercício)
// export function set() {
//   el.minutes.setAttribute("contenteditable", true);
//   el.minutes.focus();
//   sounds.buttonPressAudio.play();
// }

export function increase5Minutes() {
  timer.plus();
  sounds.buttonPressAudio.play();
}
export function decrease5Minutes() {
  timer.minus();
  sounds.buttonPressAudio.play();
}

el.forestButton.addEventListener("click", () => {
  state.isMute = document.documentElement.classList.toggle("music-on");
  el.forestButton.classList.toggle("selected");

  if (state.isMute) {
    sounds.forestAudio.play();
    return;
  }
  sounds.forestAudio.pause();
});

el.rainButton.addEventListener("click", () => {
  state.isMute = document.documentElement.classList.toggle("music-on");
  el.rainButton.classList.toggle("selected");

  if (state.isMute) {
    sounds.rainAudio.play();
    return;
  }
  sounds.rainAudio.pause();
});

el.coffeeButton.addEventListener("click", () => {
  state.isMute = document.documentElement.classList.toggle("music-on");
  el.coffeeButton.classList.toggle("selected");

  if (state.isMute) {
    sounds.coffeeAudio.play();
    return;
  }
  sounds.coffeeAudio.pause();
});

el.fireplaceButton.addEventListener("click", () => {
  state.isMute = document.documentElement.classList.toggle("music-on");
  el.fireplaceButton.classList.toggle("selected");

  if (state.isMute) {
    sounds.fireplaceAudio.play();
    return;
  }
  sounds.fireplaceAudio.pause();
});
