let email = document.getElementById('email')

email.addEventListener('click', ()=>{
    navigator.clipboard.writeText('Ricardo.santos.ferreira29@gmail.com')
    let mensagem = document.getElementById('mensagem')

    mensagem.style.filter = 'opacity(100%)'
    setTimeout(() => {
        mensagem.style = ''
        mensagem.style.transition = 'all 0.3s'
    }, 1500)

    
})
