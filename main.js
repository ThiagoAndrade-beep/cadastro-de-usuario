const btnForm = document.getElementById("btn-form")
const limparCadastro = document.getElementById("limpar-cadastro")
const limparLogin = document.getElementById("limpar-login")
const formCadastro = document.querySelector(".container-form-cadastro")
const formLogin = document.querySelector(".container-form-login")

    
const inputEmail = document.getElementById("input-email")
const inputSenha = document.getElementById("input-senha")



btnForm.addEventListener("click", (e) => {
    e.preventDefault()
    const email = inputEmail.value.trim()
    const senha = inputSenha.value.trim()    

    if(!email || !senha) {
        alert("Digite todos os campos")
        return
    }
    inputEmail.value = ""
    inputSenha.value = ""

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(!regex.test(email)) {
        alert("Email inválido")
    }

    function saveInformation() {

        let user = JSON.parse(localStorage.getItem('users')) || []
        const userExist = user.some(user => user.email === email) //cada item.email possuir o mesmo email de algum guardado no local storage, return

        if(userExist) {
            alert("Email já cadastrado")
            return
        }

        const newUser = {
            email,
            senha
        }

        user.push(newUser)

        localStorage.setItem("users", JSON.stringify(user))
        console.log(user)
        alert("Cadastro feito com sucesso!")
        formCadastro.classList.add("none")
        formLogin.classList.remove("none")
    }
    saveInformation()
})
//-------------------login------------------------------//


const inputEmailLogin = document.getElementById("input-email-login")
const inputSenhaLogin = document.getElementById("input-senha-login")
const btnLogin = document.getElementById("btn-form-login")

btnLogin.addEventListener("click", (e) => {
        e.preventDefault()


        const emailLogin = inputEmailLogin.value.trim()
        const senhaLogin = inputSenhaLogin.value.trim()
    
        if (!emailLogin || !senhaLogin) {
            alert("Preencha todos os campos.")
            return
        }

        const userLogin = JSON.parse(localStorage.getItem('users')) || []
        const loginExist = userLogin.some(user => user.email === emailLogin && user.senha === senhaLogin)

        if(loginExist) {
            alert(`Login feito! Seja bem vindo ${emailLogin}`)
            formLogin.classList.remove("none")
            formCadastro.classList.add("none")

        }else {
            alert("Credenciais inválidas")
            inputEmailLogin.focus()
        }
        inputEmailLogin.value = ""
        inputSenhaLogin.value = ""
})


limparCadastro.addEventListener("click", () => {
    localStorage.clear()
})

limparLogin.addEventListener("click", () => {
    localStorage.clear()
})