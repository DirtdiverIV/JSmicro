function countEachVocals() {
    let frase = prompt("Escribe una frase: ", "Bienvenido al Bootcamp F5");
    let vocalCounts = {a: 0,e: 0,i: 0,o: 0,u: 0};
    
    for (let i = 0; i < frase.length; i++) {
      let char = frase[i].toLowerCase();
      if ('aeiou'.includes(char)) {
        vocalCounts[char]++;
      }
    }
    
    let resultado = "Numero de vocales: ";
    for (let vocal in vocalCounts) {
      resultado += vocal + " : " + vocalCounts[vocal] + " , ";
    }
    
    document.getElementById("countEachVocals").innerHTML = resultado;;
  }