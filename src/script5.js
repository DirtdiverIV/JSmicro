function inputReturnBig() {
    let num1 = parseInt(prompt("Please enter first number", "0123456789"));
    let num2 = parseInt(prompt("Please enter second number", "0123456789"));
    if (num1 > num2) {
        result = 'El mayor es ' + num1;
      } 
    if (num1 < num2) {
        result = 'El mayor es ' + num2;
      }
    if (num1 == num2){
        result = "Son iguales"
    } 
      document.getElementById("showBig").innerHTML =
      result;
    }
  