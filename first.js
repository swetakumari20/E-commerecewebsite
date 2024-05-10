let cloths = document.getElementById("cloths");
let blogs = document.getElementById("blogs");
let reviews = document.getElementById("reviews");
let contects = document.getElementById("contects");
cloths.addEventListener('click', function(){
    cloths.style.color = "red";
    reviews.style.color="blue";
    blogs.style.color = "blue";
    contects.style.color = "blue";
    
})
blogs.addEventListener('click', function(){
    cloths.style.color = "pink";
    reviews.style.color="pink";
    blogs.style.color = "red";
    contects.style.color = "pink";
    
})
reviews.addEventListener('click', function(){
    cloths.style.color = "green";
    reviews.style.color="red";
    blogs.style.color = "green";
    contects.style.color = "green";
    
})
contects.addEventListener('click', function(){
    cloths.style.color = "aqua";
    reviews.style.color="aqua";
    blogs.style.color = "aqua";
    contects.style.color = "red";
    
})

// let login = document.getElementById("login");
// login.addEventListener('click', function(){
//    let loginPage = document.querySelector(".loginPage");
//    loginPage.style.display = "block";
  
   
// })
//login functionality
// let logged = document.getElementById("logged");
// logged.addEventListener('click', function(event){
  
//     let email = document.getElementById("email");
//     let pass = document.getElementById("pass");



//   if(email.value=="" || pass.value == ""){
//     alert("Please Enter Email & Password");
//   }
//   else{
//     alert("You Loged In");
//     let loginPage = document.querySelector(".loginPage");
//    loginPage.style.display = "none";
//   }
// })
let submit = document.getElementById("submit");
submit.addEventListener('click', function(){
  let names = document.getElementById("name");
  let password = document.getElementById("pass")
  console.log(names.value);
  if(names.value == "" || password ==""){
    alert("please enter name and password");
  }
  else{
    alert("thnks for connecting");
  }


})

