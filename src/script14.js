function twoDivs() {
    let num1 = parseInt(prompt("Please enter a number", "0123456789"));
    let num2 = parseInt(prompt("Please enter a number", "0123456789"));
    let divisores = [];
  
    for (let i = 1; i <= num1; i++) {
      if (num1 % i === 0 && num2 % i === 0) {
        divisores.push(i);
      }
    }
  
    let resultado = "Divisores de " + num1 + " y " + num2 + " : " + divisores;
    document.getElementById("twoDivisor").innerHTML = resultado;
  }