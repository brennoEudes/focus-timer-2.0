import { timerControls, musicControls } from "./controls.js";
import * as actions from "./action.js";

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

export function music() {
  musicControls.addEventListener("click", (event) => {
    const action = event.target.dataset.action; // target indica o elemento q está sendo clicado // dataset se conecta c/ data no html.

    if (typeof actions[action] !== "function") {
      return;
    }
    actions[action]();
  });
}
