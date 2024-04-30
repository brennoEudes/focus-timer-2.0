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
  toggleSound(el.forestButton, sounds.forestAudio);
});

el.rainButton.addEventListener("click", () => {
  toggleSound(el.rainButton, sounds.rainAudio);
});

el.coffeeButton.addEventListener("click", () => {
  toggleSound(el.coffeeButton, sounds.coffeeAudio);
});

el.fireplaceButton.addEventListener("click", () => {
  toggleSound(el.fireplaceButton, sounds.fireplaceAudio);
});

function toggleSound(button, audio) {
  // Verifica se o áudio está pausado ou em reprodução
  const isPaused = audio.paused;

  // Pausa todos os sons e remove a classe 'selected' de todos os botões
  const allButtons = document.querySelectorAll('.music-controls button');
  allButtons.forEach(btn => {
      btn.classList.remove('selected');
  });
  Object.values(sounds).forEach(sound => {
      sound.pause();
  });

  // Alterna entre pausar e reproduzir o áudio
  if (isPaused) {
      // Toca o áudio e adiciona a classe 'selected' ao botão
      audio.play();
      button.classList.add('selected');
  } else {
      // Pausa o áudio e remove a classe 'selected' do botão
      audio.pause();
      button.classList.remove('selected');
  }
}