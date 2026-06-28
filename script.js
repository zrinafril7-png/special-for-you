const btn = document.getElementById("startBtn");
const content = document.getElementById("content");

btn.addEventListener("click", function () {
    content.classList.remove("hidden");
    content.classList.add("show");
    btn.style.display = "none";
});
