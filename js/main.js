function validaForm() {



const contactForm = document.getElementById('contact')

const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const messageInput = document.querySelector('#message')

nameValue = nameInput.value
emailValue = emailInput.value
messageValue = messageInput.value

contactForm.addEventListener('submit', function (){
  event.preventDefault()

  if (nameValue === "") {
    
alert('Digite um nome válido')


return false



    
  }

  if (emailValue === "") {
    
alert('Digite um email válido')
return false



    
  }

  if (messageValue === "") {
    
alert('Digite uma mensagem válido')
return false


    
  }

else {
  alert (nameValue + ' ' + emailValue + ' ' + messageValue + 'Informações enviadas com sucesso!')
  return true;


  
}



})

}


