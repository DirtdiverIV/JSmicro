function inputReturnBigThree() {
    let num1 = parseInt(prompt("Please enter first number", "0123456789"));
    let num2 = parseInt(prompt("Please enter second number", "0123456789"));
    let num3 = parseInt(prompt("Please enter second number", "0123456789"));
    if (num1 > num2 && num1 > num3) {
        result = 'El mayor es ' + num1;
      } 
    if (num2 > num1 && num2 > num3) {
        result = 'El mayor es ' + num2;
      }
    if (num3 > num1 && num3 > num2) {
        result = 'El mayor es ' + num3;
      }
    if (num1 == num2 == num3){
        result = "Son iguales"
    } 
      document.getElementById("showBigThree").innerHTML =
      result;
    }