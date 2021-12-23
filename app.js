const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault()
    var name=document.getElementById("username").value
    var email1=document.getElementById("email").value
    var results=document.getElementById("results")

    $.post("formvalidation.php",{name:name,email1:email1},function(data){
      results.innerHTML =data;
    })
  })
})