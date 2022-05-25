let password = window.document.getElementById('exampleInputPassword')
let email = document.querySelector('exampleInputEmail')  /*se fosse classe tinha . antes no lugar do hashtag*/
let validaNome = false
let validaEmail = false
let validaAssunto = false


function validacaoSenha(){
    let txt = document.querySelector('#txtSenha')
    if(nome.value.length < 3){
        txt.innerHTML = 'Nome inválido'  
        txt.style.color = 'red' 
        validaNome = false
    } else{
        txt.innerHTML = 'Nome válido'
        txt.style.color = 'green'
        validaNome = true
    }
}

function validacaoEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'Email inválido'  
        txtEmail.style.color = 'red' 
        validaEmail = false
    } else{
        txtEmail.innerHTML = 'Nome válido'
        txtEmail.style.color = 'green'
        validaEmail = true
    }
}
