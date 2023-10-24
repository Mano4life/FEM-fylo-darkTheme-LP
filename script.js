let formBtn = document.getElementById("formButton");
let form = document.getElementById("formInput");
let error = document.getElementById("error");

formBtn.addEventListener("click", ()=>{
  if(!form.value){
    error.innerHTML = 'Please enter a valid email address'
  }
  else{
    error.innerHTML = '';
  }
})