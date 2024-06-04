
// var request=new XMLHttpRequest();
// request.open("GET","https://forkify-api.herokuapp.com/api/search?q=pizza");
// request.send();
// request.addEventListener("load",function(){
//      console.log(JSON.parse(request.response).recipes)
// })


// function displayData(){

// }


var Username=document.getElementById("UserName");
var Useremail=document.getElementById("Email");
var Userpassword=document.getElementById("password");
var signUp=document.getElementById("signUpB");
var success=document.getElementById("done");
var exist=document.getElementById("exist")




var personalDetailes=[]
if(localStorage.getItem("userDetailes") != null){
      personalDetailes=JSON.parse(localStorage.getItem("userDetailes"))
}
 
var genarelIndex;
function findIndex(){
      for(var i=0 ; i<=personalDetailes.length; i++){
            genarelIndex=i;
           
      }
}


findIndex()

signUp.addEventListener("click",function(){
      if(vaildteUserName()== true && vaildteEmail()== true && vaildtepass()== true){
            var user={
                  name:Username.value,
                  email:Useremail.value,
                  password:Userpassword.value
            } 
            personalDetailes.push(user); 
            var result=isEmailRegistered(personalDetailes[genarelIndex].email);
            console.log(personalDetailes);
           
           if(result){
                     exist.classList.replace("d-none","d-block");
                     console.log("exist");
           }else{
                  success.classList.replace("d-none","d-block");
                  exist.classList.replace("d-block","d-none");
                  localStorage.setItem("userDetailes",JSON.stringify(personalDetailes)) 
                
            }    
              
}
})

function isEmailRegistered(email) {
      return Useremail.value.includes(email.toLowerCase());
}  



function vaildteUserName(){
      var regxName=/^[a-zA-Z][a-zA-Z0-9_-]{2,15}$/
      return regxName.test(Username.value)
}
function vaildteEmail(){
      var regxEmail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      return regxEmail.test(Useremail.value)
}
function vaildtepass(){
      var regxPass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/
      return regxPass.test(Userpassword.value)
}


