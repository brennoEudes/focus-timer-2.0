import { timerControls, musicControls } from "./controls.js";

export function registerControls() {
  // EVENTOS
  timerControls.addEventListener("click", (event) => {
    const action = event.target.dataset.action; // target indica o elemento q está sendo clicado // dataset se conecta c/ data no html.

    if (action === undefined) {
      return;
    }

    console.log(action);
  });

  musicControls.addEventListener("click", (event) => {
    const action = event.target.dataset.action; // target indica o elemento q está sendo clicado // dataset se conecta c/ data no html.

    if (action === undefined) {
      return;
    }

    console.log(action);
  });

}
