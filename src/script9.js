function showVocals() {

    let frase = prompt("Escribe una frase: ", "Bienvenido al Bootcamp F5");
    let insideVocals = [];
    /*const vocales = ["a", "e", "i", "o", "u"]*/
    
    for (let i = 0; i < frase.length; i++) {
      if ('aeiou'.includes(frase[i].toLowerCase())) {
        insideVocals.push(frase[i]);
      }
    }
    let resultado = "Las vocales encontradas en tu frase son: " + insideVocals.join(", ");
    document.getElementById("showVocals").innerHTML = resultado;
    }