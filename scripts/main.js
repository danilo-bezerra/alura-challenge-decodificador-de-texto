import { decrypt } from "./decrypt.js"
import { encrypt } from "./encrypt.js"

const btnEncrypt = document.querySelector("#btn-encrypt")
const btnDecrypt = document.querySelector("#btn-decrypt")

const textInput = document.querySelector(".textarea")

const resultContainer = document.querySelector('.result')
const noResultContainer = document.querySelector('.no-result')

function hideResultContainer() {
    resultContainer.classList.remove("active")
} 

function showResultContainer() {
    resultContainer.classList.add("active")
}   

function hideNoResultContainer() {
    noResultContainer.classList.add("inative")
} 

function showNoResultContainer() {
    noResultContainer.classList.remove("inative")
} 

function setResult(result) {
    const resultTag = document.querySelector(".result__text")
    resultTag.innerText = encrypt(result)
}

function setTextInputValue(result) {
    textInput.value = result
}

textInput.addEventListener('input', () => {
   
})

btnEncrypt.addEventListener('click', () => {
    hideNoResultContainer()
    showResultContainer()
    setResult(textInput.value)
    setTextInputValue("")
})

btnDecrypt.addEventListener('click', () => {
    const resultTag = document.querySelector(".result__text")
    const decrypted = decrypt(resultTag.innerText)
    setTextInputValue(decrypted)
})