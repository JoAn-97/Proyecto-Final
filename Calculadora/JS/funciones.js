let modoClaro = "Estilos/claro.css";
let modoOscuro = "Estilos/oscuro.css";

// Clears the screen on click of C button.
function LimpiarPantalla() {
  document.getElementById("resultado").value = "";
}
// Displays entered value on screen.
function Pantalla(value) {
  document.getElementById("resultado").value += value;
}
// Swaps the style sheet in order to  achieve dark mode.
function CambiodeColor() {
  let darkMode = document.getElementById("modo_oscuro");
  let theme = document.getElementById("theme");
  if (theme.getAttribute("href") == modoClaro) {
    theme.href = modoOscuro;
    darkMode.innerHTML = "Claro";
  } else {
    theme.href = modoClaro;
    darkMode.innerHTML = "Oscuro";
  }
}
