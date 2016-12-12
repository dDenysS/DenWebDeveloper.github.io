var menu = document.querySelector(".page-header");

var menuButton = document.querySelector(".main-nav__burger");

var title = document.querySelector(".slogan__title");

var slogan = document.querySelector(".slogan");

var figure = 0;

menu.classList.add("page-header--close");
console.log("0");

menuButton.addEventListener("click", function (event) {
    if (figure == 0) {
        menu.classList.remove("page-header--close");
        title.classList.add("slogan__title--ghost");
        slogan.classList.add("slogan--box");
        figure = 1;
    } else {
        menu.classList.add("page-header--close");
        title.classList.remove("slogan__title--ghost");
        slogan.classList.remove("slogan--box");
        figure = 0;
    }
    
});