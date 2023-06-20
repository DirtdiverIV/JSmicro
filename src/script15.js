function checkPrime() {
    let num1 = parseInt(prompt("Please enter a number", "0123456789"));
    let primo = "ES PRIMO";
  
    for (let i = 2; i < num1; i++) {
      if (num1 % i === 0) {
        primo = "NO ES PRIMO";
      }
    }
  
    let resultado = num1 + " " + primo;
    document.getElementById("prime").innerHTML = resultado;
  }
  