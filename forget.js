function validdata() {
    const squestion = document.getElementById("security").value;
    const getsquestion=localStorage.getItem("que");
    const pass=localStorage.getItem("password")

   if(squestion!==getsquestion ){
       document.getElementById("error").innerHTML="YOUR SECURITY WORD IS WRONG ! SORRY..........."
    }else{
        document.getElementById("error").innerHTML="YOUR PASSWORD IS:   " + pass
        
    }
    

}

function getpro(){
    if(document.getElementsByClassName("contactform2")[0].style.display=="none"){
        document.getElementsByClassName("contactform2")[0].style.display="flex"
    }else{
        document.getElementsByClassName("contactform2")[0].style.display="none"

    }
}

function changepassword(){
    const email = document.getElementById("emailid").value;
    const newpass = document.getElementById("newpassword").value;
    const reenterpass = document.getElementById("repass").value;
    const getemail=localStorage.getItem("email");
    
    if(email!==getemail ){
        document.getElementById("error2").innerHTML="YOUR EMAIL ID IS NOT REGISTERD! SORRY..........."
     }else if(newpass!==reenterpass){
        document.getElementById("error2").innerHTML="PASSWORD IS NOT SAME"
     }else{
        localStorage.setItem("password",newpass)
        window.location.href="login.html"
     }

}

window.onload=function(){
    document.getElementsByClassName("contactform2")[0].style.display="none"

}