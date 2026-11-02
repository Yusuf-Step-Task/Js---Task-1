const title = document.querySelector("#title");

const buttontitle = document.querySelector("#button-change-title");
const buttoncolor = document.querySelector("#button-change-color");
const buttonhide = document.querySelector("#button-hide-text");
const buttonshow = document.querySelector("#button-show-text");

buttontitle.addEventListener("click", function() {
    title.textContent = "Mən JavaScript öyrənirəm!";
}
);
buttoncolor.addEventListener("click", function() {
    title.style.color = "blue";
}
);
buttonhide.addEventListener("click", function() {
    title.style.display = "none";
}
);
buttonshow.addEventListener("click", function() {
    title.style.display = "block";
}
);

