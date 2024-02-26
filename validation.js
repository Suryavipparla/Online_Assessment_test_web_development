
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    var name=  document.getElementById('name').value;
    localStorage.setItem('name',name);
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    var error = document.getElementById('error');
    if(password!="batch_7"){
        error.innerHTML = "Invalid Password";
        return false;
    }
    else{
        // route to questions.html
        window.location.href = "questions.html";
    }
    localStorage.setItem('loggedin',true);
  });

  window.onload = function() {
    const name = localStorage.getItem("loggedin");
    if (name) {
      window.location.href = "questions.html";
    }
  }