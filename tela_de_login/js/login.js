class Usuario{

    constructor(nome, nickName, senha, confirmeSenha){

        this.nome = nome
        this.nickName = nickName
        this.senha = senha
        this.confirmeSenha = confirmeSenha
    }

    confirmarSenha(){

        if(this.senha === this.confirmeSenha) {

            return true

        }else {
            
            return false
        }

    }

    validarDados(){

        let cont = 0

        for(let i in this) {

            if(this[i] != undefined && this[i] != '' && this[i] != null) {

              cont += 1 

            }
        }

        if(cont === 4) {

            return true
        }
        else {

            return false

        }
    }
}

// class Bd {
//     constructor() {
//         let id = localStorage.getItem('id')

//         if (id === null) {
//             localStorage.setItem('id', 0)
//         }
//     }
//     getProximoId() {
//         let proximoId = localStorage.getItem('id')
//         return parseInt(proximoId)+1
//     }

//     gravarDados(usuario) {
//         let id = this.getProximoId()
//         localStorage.setItem(id, JSON.stringify(usuario))
//         localStorage.setItem('id', id)
//     }

//     recuperarDados() {
//         let id = localStorage.getItem('id')
//         let registro = localStorage.getItem(id)
//         console.log(registro)
//     }

//     recuperarTodosUsuarios() {
//         let usuario = Array()
        
//     }
// }

// let bd = new Bd()

function cadastrar(){

    let nome = document.getElementById('txt_nome')
    let nickName = document.getElementById('txt_usuario')
    let senha = document.getElementById('txt_senha')
    let confirmeSenha = document.getElementById('txt_confirme_senha')

    let user = new Usuario(nome.value, nickName.value, senha.value, confirmeSenha.value)

    if(user.validarDados()) {

        if(user.confirmarSenha()) {

            
            bd.gravarDados(user)
            window.location.href = 'logar.html'

        }else {
    
            alert('As senhas informadas não são iguais')
        }

    }else {

        alert('Um ou mais campos estão vazios')
    }

}

function logar() {
    // let txtUsuario = document.getElementById('txt_usuario')
    // let txtSenha = document.getElementById('txt_senha')
    // bd.recuperarDados()
    // let teste = localStorage.getItem("Adelaide")
    console.log(teste)
}

