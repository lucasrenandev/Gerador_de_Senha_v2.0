const buttonGenerate = document.getElementById("button-generate")
const inputPassword = document.getElementById("input-password")
const exitText = document.getElementById("exit-text")
const iconEye = document.getElementById("icon-eye")
const iconCopy = document.getElementById("icon-copy")

function generatePassword() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    const numbers = "0123456789"
    const simbols = "!@#$%&*(){}[]-+=,.;/?~^"
    const characters = alphabet + numbers + simbols
    const maxCharacters = 16
    let newPassword = ""

    for(let i = 0; i < maxCharacters; i ++) {
        const randomCharacters = Math.floor(Math.random() * characters.length) 
        newPassword += characters.charAt(randomCharacters, randomCharacters + 1)

        inputPassword.value = newPassword
        exitText.innerHTML = `A sua senha possui <mark style="border-radius: 3px; padding: 3px">${maxCharacters}</mark> caracteres.`
    }
}

function toggleTypePassword() {
    if(inputPassword.type === "password") {
        inputPassword.type = "text"
    }
    else if(inputPassword.type === "text") {
        inputPassword.type = "password"
    }
}

buttonGenerate.addEventListener("click", function() {
    generatePassword()
    iconEye.style.display = "inline-block"
    iconCopy.style.display = "inline-block"
})

iconEye.addEventListener("click", function() {
    toggleTypePassword()
    iconEye.classList.toggle("fa-eye")
})

iconCopy.addEventListener("click", function() {
    navigator.clipboard.writeText(inputPassword.value)
    window.alert("Senha copiada com sucesso!")
})