const buttonGenerate = document.getElementById("button-generate")
const inputPassword = document.getElementById("input-password")
const exitText = document.getElementById("exit-text")
const iconEye = document.getElementById("icon-eye")
const iconCopy = document.getElementById("icon-copy")

function generatePass() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*(){}[]-+=,.;/?~^"
    const maxCharacters = 16
    let newPass = ""

    for(let i = 0; i < maxCharacters; i ++) {
        const randomChar = Math.floor(Math.random() * characters.length) 
        newPass += characters.charAt(randomChar, randomChar + 1)

        inputPassword.value = newPass
        exitText.innerHTML = `A sua senha possui <mark style="border-radius: 20px; padding: 4px">${maxCharacters}</mark> caracteres.`
    }
}

function toggleIconPass() {
    if(inputPassword.type === "password") {
        inputPassword.type = "text"
    }
    else if(inputPassword.type === "text") {
        inputPassword.type = "password"
    }
}

buttonGenerate.addEventListener("click", function() {
    generatePass()
    iconEye.style.display = "inline-block"
    iconCopy.style.display = "inline-block"
})

iconEye.addEventListener("click", function() {
    toggleIconPass()
    iconEye.classList.toggle("fa-eye")
})

iconCopy.addEventListener("click", function() {
    navigator.clipboard.writeText(inputPassword.value)
    window.alert("Senha copiada com sucesso!")
})