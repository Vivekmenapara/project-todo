
function validateform() {
  
  const username = document.getElementById("username").value;
  const mnumber = document.getElementById("mobilenumber").value;
  const dateofbirth = document.getElementById("dob").value;
 const gender = document.getElementById("gender").value;
 const password = document.getElementById("pwd").value;
 const email = document.getElementById("email").value;
  const question=document.getElementById("que").value;
  if (username == null || username == "") {
    document.getElementById("error").innerHTML = "Please Fill Empty field username";
    document.getElementById("error").style.color="red";
    
  } else if (!email.match(/\S+@\S+\.\S+/)) {
    document.getElementById("error").innerHTML = "please enter valid email address";
    document.getElementById("error").style.color="red";
    
  } else if (mnumber.length != 10) {
    document.getElementById("error").innerHTML = "Mobile number is wrong";
    document.getElementById("error").style.color="red";
    
  } else if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/)) {
    document.getElementById("error").innerHTML = `Your password must be have at least long and contain uppercase & lowercase character & number "`
    document.getElementById("error").style.color="red";
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
      
