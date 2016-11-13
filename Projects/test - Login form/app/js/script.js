"use strict";

function validateForm() {

  var name = document.forms["form"].username.value;
  var pass = document.forms["form"].password.value;
  var username = document.getElementById("username");
  var password = document.getElementById("password");

    if (name === "" || name === null) {
    document.getElementById('error__name').innerHTML = (" *Please enter your name ");
    username.focus();
    return false;
  }

  if (pass === "" || pass === null) {
    document.getElementById('error__password').innerHTML = (" *Please enter your password ");
    password.focus();
    return false;
}
  setTimeout(function() {
    document.location.href = "main.html";

    document.getElementById("username").value = localStorage.getItem("userName");
    document.getElementById("greeting").innerHTML = ("hi" + userName);

  });

};


