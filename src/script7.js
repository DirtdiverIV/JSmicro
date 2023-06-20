function countChar() {

let frase = prompt("Escribe una frase: ", "Bienvenido al Bootcamp F5");
let charCount = 0;

for (let i = 0; i < frase.length; i++) {
  if (frase.charAt(i).toLowerCase() === 'a') {
    charCount++;
  }
}
document.getElementById("showChar").innerHTML = "La letra 'a' aparece " + charCount + " veces en tu frase.";
}
