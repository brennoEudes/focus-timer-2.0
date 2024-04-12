import { controls } from "./controls.js";

export function registerControls() {

  // EVENTOS
  controls.addEventListener("click", (event) => {
    console.log(event.target); // target indica o elemento q está sendo clicado
  });
  
}
