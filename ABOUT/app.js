const copyBtn = document.querySelector(".fa-copy");
const copiedToast = document.querySelector(".copied");
const cancelToast = document.querySelector(".fa-xmark");

copyBtn.addEventListener("click", (e) => {
    e.preventDefault();
    copiedToast.classList.toggle("hide");
});

cancelToast.addEventListener("click", () => {
    copiedToast.classList.toggle("hide");
});