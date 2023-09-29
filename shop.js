let cloths=document.getElementById("cloths");
let reviews=document.getElementById("reviews");
let contacts=document.getElementById("contacts");
let blogs=document.getElementById("blogs");

cloths.addEventListener("click",function(){
    cloths.style.color="red";
    reviews.style.color="black";
    contacts.style.color="black";
    blogs.style.color="black";
})
let login= document.getElementById("login");
login.addEventListener("click",function(){
   let loginPage= document.querySelector(".loginPage");
   loginPage.style.display="block"
})

let loged= document.getElementById("loged");
loged.addEventListener("click",function(){
let email=document.getElementById("email");
let password=document.getElementById("password");
if(email.value=="" ||password.value==""){
    alert("please Enter Email Password")
}else{
alert("You Logged In")
let loginPage= document.querySelector(".loginPage");
loginPage.style.display="none"
}})

let submit=document.getElementById("submit");
submit.addEventListener("click",function(){
    let name=document.getElementById("name");
    let password=document.getElementById("pass");
    if(name.value=="" ||pass.value==""){
        alert("please Enter Name Password")
    }else{
    alert( " thanks for Connecting ")
    let loginPage= document.querySelector(".loginPage");
    loginPage.style.display="none"
    } 
})