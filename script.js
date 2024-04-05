adddata= function () {
  
};


function validateform() {
  
  var username = document.getElementById("username").value;
  var mnumber = document.getElementById("mobilenumber").value;
  var dateofbirth = document.getElementById("dob").value;
  var gender = document.getElementById("gender").value;
  var password = document.getElementById("pwd").value;
  var email = document.getElementById("email").value;
  const question=document.getElementById("que").value;
  if (username == null || username == "") {
    document.getElementById("error").innerHTML = "Name can't be blank";
    
  } else if (!email.match(/\S+@\S+\.\S+/)) {
    document.getElementById("error").innerHTML = "email format is wrong";
    
  } else if (mnumber.length != 10) {
    document.getElementById("error").innerHTML = "mobile number wrong";
    
  } else if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/)) {
    document.getElementById("error").innerHTML = "password must contatiet";
    
  }else{
          localStorage.setItem("username", username);  
          localStorage.setItem("mobilenumber", mnumber);
          localStorage.setItem("dob", dateofbirth);
          localStorage.setItem("gender", gender);      
          localStorage.setItem("password", password);
          localStorage.setItem("email", email);
          localStorage.setItem("que",question);
          
          window.location.href = "login.html";
        }
        
      
       
      }
      
