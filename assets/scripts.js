let validationBtn = document.querySelector('.validation-btn')
let validationCheck = document.querySelector('#validation-check')

validationBtn.addEventListener('click',function(){
  if(validationCheck.classList == ""){
    validationCheck.classList = "hide"
  } else {
    validationCheck.classList = ""
  }
})