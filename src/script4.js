function inputReturnSum() {
    let num1 = parseInt(prompt("Please enter first number", "0123456789"));
    let num2 = parseInt(prompt("Please enter second number", "0123456789"));
    let result = num1 + num2;
    if (num1 != null) {
      document.getElementById("showSum").innerHTML =
      "La suma de " + num1 + " mas " + num2 + " es igual a " + result;
    }
  }