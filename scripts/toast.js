const toast = document.querySelector(".toast");

export function showToast(msg) {
  toast.innerText = `${msg}`;
  toast.classList.add("active");

  setTimeout(hideToast, 2500);
}

export function hideToast() {
  toast.classList.remove("active");
}
