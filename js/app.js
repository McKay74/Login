var $password = $("#password");
var $confirmPassword = $("#confirm_password");
var $username = $("#username");
//Hide hints
$("form span").hide();

function userNamePresent(){
  return $username.val().length > 0;
}

function isPasswordValid(){
  return $password.val().length > 8;
}

function arePasswordsMatching(){
  return $password.val() === $confirmPassword.val();
}

function canSubmit(){
  return isPasswordValid() && arePasswordsMatching() && userNamePresent();
}

function passwordEvent(){
   //Find out if password is valid
  if(isPasswordValid()) {
    //Hide hint if valid
    $password.next().hide();
  } else {
    //else show hint
    $password.next().show();
  } 
}

function confirmPasswordEvent(){
  //Find out if password and confirmation match
  if(arePasswordsMatching()) {
    //Hide hint if match
    $confirmPassword.next().hide();
  } else {
    //else show hint
    $confirmPassword.next().show();
  }
}

function enableSubmitEvent(){
  $("#submit").prop("disabled", !canSubmit());
}

$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();


