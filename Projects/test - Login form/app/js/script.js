function ValidateForm() {

  valid = true;

  if (username.value == 0) {
    document.getElementById('error__name').innerHTML = (" *Please enter your name ");
    username.focus();
    return false;
  }

  if (password.value == 0) {
    document.getElementById('error__password').innerHTML = (" *Please enter your password ");
    password.focus();
    return false;
  }

  setTimeout(function() {
    document.location.href = "main.html";
  })

  return valid;
}



function LogOut() {
  function checkCookie() {
    var name = document.username.value;
    document.getElementById('greeting').innerHTML = ('hi' + name);
  }


  setTimeout(function() {
    document.location.href = "index.html"
  });
}
