const btn = document.querySelector('.btn')
const input_nm = document.querySelector('.input-name')
const input_email = document.querySelector('.input-email')
const input_pw = document.querySelector('.input-password')
const s_mention = document.querySelector('.s-mention')
const s_subject = document.querySelector('.s-subject')
var disciplina
var mencao
var aluno



function btn_f(){
    if(input_nm.value == ''){
        alert('ERROR :: Nome inválido')
    }
    if(input_email.value == ''){
        alert('ERROR :: Email inválido')
    }
    if(input_pw.value == ''){
        alert('ERROR :: Senha inválida')
    }
    else if(input_nm.value != '' && input_email.value != '' && input_pw.value != ''){
        alert('Cadastrado \n\n\n\n Máteria: '+s_subject.options[s_subject.selectedIndex].text +' nota '+ s_mention.options[s_mention.selectedIndex].text)
        mencao = s_mention.options[s_mention.selectedIndex].value
        disciplina = s_subject.options[s_subject.selectedIndex].value
        nome = input_nm.value

        localStorage.setItem(s_subject, s_mention)
        alert(mencao+'\n'+disciplina+'\n'+nome)
    }

}
function listar(){
    var exibirmencao

    selecao = document.getElementsByClassName('s_subject')
    selecaodisciplina - selecao.options[selecao.selectedIndex].value

    exibirmencao = localStorage.getItem(selecaodisciplina)

    document.getElementsById('exibirdisciplina').textContent = selecaodisciplina
    document.getElementsById('exibirmencao').textContent = exibirmencao
}
 btn.addEventListener('starttouch', function(event){btn_f(event)})
 btn.addEventListener('click', function(event){btn_f(event)})