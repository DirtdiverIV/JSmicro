function inputReturn() {
    let user = prompt("Please enter your name", "Giacomo");
    if (user != null) {
      document.getElementById("showUser").innerHTML =
      "Hello " + user;
    }
  }