import state from "./state.js";
import { timerControls, musicControls } from "./controls.js";
import * as actions from "./action.js";
// import { toggleMusic } from './action.js';
import * as el from "./controls.js";
import { updateDisplay } from "./timer.js";

// EVENTOS
//Captura os eventos e verifica no pacote de ações, se as ações existem/ se fcns são retornadas:
export function timer() {
  timerControls.addEventListener("click", (event) => {
    const action = event.target.dataset.action; // target indica o elemento q está sendo clicado // dataset se conecta c/ data no html.

    if (typeof actions[action] !== "function") {
      return;
    }
    actions[action]();
  });
}

// Evento de edição minutos (não necessário neste exercício)
// export function setMinutes() {
//   el.minutes.addEventListener("focus", () => {
//     el.minutes.textContent = "";
//   });

//   el.minutes.onkeypress = (event) => /\d/.test(event.key);
//   el.minutes.addEventListener("blur",(event) => {
//     let time = event.currentTarget.textContent
//     time = time > 60 ? 60 : time;
//     state.minutes = time;
//     state.seconds = 0;

//     updateDisplay();
//     el.minutes.removeAttribute("contenteditable");

//   });
// }

// export function music() {
//   musicControls.addEventListener("click", (event) => {
//     const action = event.target.dataset.action; // target indica o elemento q está sendo clicado // dataset se conecta c/ data no html.

//     if (typeof actions[action] !== "function") {
//       return;
//     }
//     actions[action]();
//   });
// }

document.querySelectorAll('.music-controls button').forEach(btn => {
  btn.addEventListener('click', function() {
      const soundId = this.dataset.soundId;
      // toggleMusic(soundId);
  });
});
