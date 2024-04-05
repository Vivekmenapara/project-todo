function validdata() {
    const password = document.getElementById("pwd").value;
    const email = document.getElementById("email").value;
    const getemail=localStorage.getItem("email");
    const getpass=localStorage.getItem("password");

    
    if (!email.match(/\S+@\S+\.\S+/)) {
      document.getElementById("error").innerHTML = "email format is wrong";
    } else if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/)) {
      document.getElementById("error").innerHTML = "password must contatiet";
    }else if(getemail!==email ){
       document.getElementById("error").innerHTML="email is not registerd"
    }else if(getpass!==password){
        document.getElementById("error").innerHTML="Password is wrong"
    }else{
        
        window.location.href="dashboard.html"
    }
    
    } 
    
