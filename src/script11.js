function numDiv() {
    let num1 = parseInt(prompt("Please enter a number", "0123456789"));
    let div2 = "NO";
    let div3 = "NO";
    let div5 = "NO";
    let div7 = "NO";

    if (num1 % 2 === 0) {
        div2 = "SI";
    }
    if (num1 % 3 === 0) {
        div3 = "SI";
    }
    if (num1 % 5 === 0) {
        div5 = "SI";
    }
    if (num1 % 7 === 0) {
        div7 = "SI";
    }

    document.getElementById("divisible").innerHTML = div2 + " es divisible por 2. " + div3 + " es divisible por 3. " + div5 + " es divisible por 5. " + div7 + " es divisible por 7.";
}