const toast = document.querySelector(".toast");

let toastTimeOut

export function showToast(msg) {
  toast.innerText = `${msg}`;
  toast.classList.add("active");
  clearTimeout(toastTimeOut);
  toastTimeOut = setTimeout(hideToast, 2500);
}

export function hideToast() {
  toast.classList.remove("active");
}
