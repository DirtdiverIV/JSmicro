function countVocals() {

    let frase = prompt("Escribe una frase: ", "Bienvenido al Bootcamp F5");
    let charCount = 0;
    /*const vocales = ["a", "e", "i", "o", "u"]*/
    
    for (let i = 0; i < frase.length; i++) {
      if ('aeiou'.includes(frase[i].toLowerCase())) {
        charCount++;
      }
    }
    document.getElementById("countVocals").innerHTML = "Tu frase tiene " + charCount + " vocales.";
    }