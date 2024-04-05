function validdata() {
    const password = document.getElementById("pwd").value;
    const email = document.getElementById("email").value;
    const getemail=localStorage.getItem("email");
    const getpass=localStorage.getItem("password");

    
    if (!email.match(/\S+@\S+\.\S+/)) {
      document.getElementById("error").innerHTML = "Please Enter valid Email ";
      document.getElementById("error").style.color="red";
    } else if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/)) {
      document.getElementById("error").innerHTML = "Please Enter valid Password Format";
      document.getElementById("error").style.color="red";
    }else if(getemail!==email ){
       document.getElementById("error").innerHTML="Email is not Registerd!Please Signup first"
       document.getElementById("error").style.color="red";
    }else if(getpass!==password){
        document.getElementById("error").innerHTML="Password is wrong! Please Enter Valid password"
        document.getElementById("error").style.color="red";
    }else{
        
        window.location.href="dashboard.html"
    }
    
    } 
    
