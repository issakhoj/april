function validate() {
  var username = document.getElementById("username").value
  var email = document.getElementById("email").value
  var password = document.getElementById("password").value
  var confirmpassword = document.getElementById("confirmpassword").value

  checkusername(username)
  checkemail(email)
  checkpassword(password)
  checkconfirmpassword(password, confirmpassword)

}


function checkusername(username) {
  if (username.length > 7) {
    document.getElementById("username").classList.add("success")
    document.getElementById("username").classList.replace("error", "success")
    document.getElementById("username_error").classList.add("hide")

  } else {
    document.getElementById("username").classList.add("error")
    document.getElementById("username_error").classList.remove("hide")

  }
}


function checkemail(email) {
  if (email.length > 8 && email.includes('@')) {
    document.getElementById("email").classList.add("success")
    document.getElementById("email").classList.replace("error", "success")
    document.getElementById("email_error").classList.add("hide")

  } else {
    document.getElementById("email").classList.add("error")
    document.getElementById("email_error").classList.remove("hide")

  }
}



function checkpassword(password) {
  if (password.length > 7 && password.includes('$')) {
    document.getElementById("password").classList.add("success")
    document.getElementById("password").classList.replace("error", "success")
    document.getElementById("password_error").classList.add("hide")

  } else {
    document.getElementById("password").classList.add("error")
    document.getElementById("password_error").classList.remove("hide")

  }
}


function checkconfirmpassword(password, confirmpassword) {
  if (password == confirmpassword) {
    document.getElementById("confirmpassword").classList.add("success")
    document.getElementById("confirmpassword").classList.replace("error", "success")
    document.getElementById("confirmpassword_error").classList.add("hide")

  } else {
    document.getElementById("confirmpassword").classList.add("error")
    document.getElementById("confirmpassword_error").classList.remove("hide")

  }
}
