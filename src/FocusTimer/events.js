import { timerControls, musicControls } from "./controls.js";
import * as actions from "./action.js";

export function registerControls() {
  // EVENTOS
  timerControls.addEventListener("click", (event) => {
    const action = event.target.dataset.action; // target indica o elemento q está sendo clicado // dataset se conecta c/ data no html.

    if (typeof actions[action] !== "function") {
      return;
    }
    actions[action]();
  });

  musicControls.addEventListener("click", (event) => {
    const action = event.target.dataset.action; // target indica o elemento q está sendo clicado // dataset se conecta c/ data no html.

    if (typeof actions[action] !== "function") {
      return;
    }
    actions[action]();
  });
}
