function ValidateEmail(inputText) {
  if (inputText.value.length == 0) {
    document.getElementById('invalidEmailLable').innerHTML = 'Please add a valid email address';
    document.getElementById('emailLabel').innerHTML = '';
    document.getElementById('emailFormGroup').classList.add('invalid');
    return false;
  }
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    document.getElementById('invalidEmailLable').innerHTML = '';
    document.getElementById('emailLabel').innerHTML = 'Email';
    var str = inputText.value;
    window.location('emailSearchResult.html?email=' + str, '_self');
    return true;
  } else {
    document.getElementById('invalidEmailLable').innerHTML = 'Please add a valid email address';
    document.getElementById('emailLabel').innerHTML = '';
    document.getElementById('emailFormGroup').classList.add('invalid');
    return false;
  }
}
