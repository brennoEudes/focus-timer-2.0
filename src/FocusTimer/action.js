import state from "./state.js";
import * as timer from "./timer.js";
import * as el from "./controls.js";
import * as sounds from "./sounds.js";
// import { audioPaths } from "./sounds.js";

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

export function toogleMusic() {
  state.isMute = document.documentElement.classList.toggle("music-on");

  if(state.isMute) {
    sounds.forestAudio.play()
    return
  }

  sounds.forestAudio.pause();
}

let currentAudio = null;

let isPaused = true;

// export function toggleMusic(soundId) {
//     const audioPath = audioPaths[soundId];

//     if (currentAudio && currentAudio.src === audioPath) {
//         if (isPaused) {
//             currentAudio.play(); // Inicia a reprodução
//             isPaused = false;
//         } else {
//             currentAudio.pause(); // Pausa a reprodução
//             isPaused = true;
//         }
//     } else {
//         if (currentAudio) {
//             currentAudio.pause();
//         }
//         currentAudio = new Audio(audioPath);
//         currentAudio.play(); // Inicia a reprodução
//         isPaused = false;
//     }
// }

el.forestButton.addEventListener("click", () => {
  state.isMute = document.documentElement.classList.toggle("music-on");

  if (state.isMute) {
    sounds.forestAudio.play();
    return;
  }
  sounds.forestAudio.pause();
});

el.rainButton.addEventListener("click", () => {
  state.isMute = document.documentElement.classList.toggle("music-on");

  if (state.isMute) {
    sounds.rainAudio.play();
    return;
  }
  sounds.rainAudio.pause();
});

el.coffeeButton.addEventListener("click", () => {
  state.isMute = document.documentElement.classList.toggle("music-on");

  if (state.isMute) {
    sounds.coffeeAudio.play();
    return;
  }
  sounds.coffeeAudio.pause();
});

el.fireplaceButton.addEventListener("click", () => {
  state.isMute = document.documentElement.classList.toggle("music-on");

  if (state.isMute) {
    sounds.fireplaceAudio.play();
    return;
  }
  sounds.fireplaceAudio.pause();
});
