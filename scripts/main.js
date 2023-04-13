import { decrypt } from "./decrypt.js";
import { encrypt } from "./encrypt.js";
import { hideToast, showToast } from "./toast.js";
import "./toggle-theme.js";

const btnEncrypt = document.querySelector("#btn-encrypt");
const btnDecrypt = document.querySelector("#btn-decrypt");
const btnCopy = document.querySelector("#btn-copy");

const textInput = document.querySelector(".textarea");

const resultContainer = document.querySelector(".result");
const noResultContainer = document.querySelector(".no-result");

function getResultText() {
  const resultTag = document.querySelector(".result__text");
  return resultTag.innerText;
}

function hideResultContainer() {
  resultContainer.classList.remove("active");
}

function showResultContainer() {
  resultContainer.classList.add("active");
}

function hideNoResultContainer() {
  noResultContainer.classList.add("inative");
}

function showNoResultContainer() {
  noResultContainer.classList.remove("inative");
}

function setResult(result) {
  const resultTag = document.querySelector(".result__text");
  resultTag.innerText = result;
}

function setTextInputValue(result) {
  textInput.value = result;
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

function onCopy() {
  copyToClipboard(getResultText());
  textInput.focus();
  showToast("Texto copiado");
}

function onEncrypt() {
  if (textInput.value.trim()) {
    const encrypted = encrypt(normalizeString(textInput.value));
    hideNoResultContainer();
    showResultContainer();
    setResult(encrypted);
    setTextInputValue("");

    showToast("Texto criptografado");
    textInput.focus();
  } else {
    showNoResultContainer();
    hideResultContainer();
  }
}

function normalizeString(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function onDecrypt() {
  if (textInput.value.trim()) {
    const decrypted = decrypt(normalizeString(textInput.value));
    hideNoResultContainer();
    showResultContainer();
    setResult(decrypted);
    setTextInputValue("");

    showToast("Texto descriptografado");

    textInput.focus();
  } else {
    showNoResultContainer();
    hideResultContainer();
  }
}

btnEncrypt.addEventListener("click", onEncrypt);

btnDecrypt.addEventListener("click", onDecrypt);

btnCopy.addEventListener("click", onCopy);
