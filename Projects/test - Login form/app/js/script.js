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

    document.location.href = "http://www.google.com";
}




/*document.getElementById('greeting').innerHTML = ('hi' + name);*/


/* localStorage.setItem("username");
console.log(localStorage.getItem("username"));
// → marijn
localStorage.removeItem("username");  */