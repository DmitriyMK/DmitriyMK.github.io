function ValidateForm() {

  valid = true;

  if (username.value.length == 0) {
    document.getElementById('error__name').innerText = (" *Please enter your name ");
    username.focus();
    return false;
  };

  if (password.value.length == 0) {
    document.getElementById('error__password').innerText = (" *Please enter your password ");
    password.focus();
    return false;
  }

  setTimeout(function() {
    document.location.href = "main.html"
  });

  return valid;

}


function checkCookie() {
    var user = getCookie("username");
    if (user != "" || user != "undefined") {
        document.getElementById("greeting").innerHTML = "Welcome " + user;
    }
}


function LogOut() {
  setTimeout(function() {
    document.location.href = "index.html"
  });
}