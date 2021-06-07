const menuButton = document.querySelector("#menu");

const getSidebar = document.querySelector(".colorChanger");
const getSidebarLi = document.querySelectorAll(".colorChanger li");
const arrayLength = getSidebarLi.length;
const body = document.body;
const div = document.querySelector("#text");
const navBar = document.querySelector(".navBar");
const inputButtons = document.querySelectorAll("input");

// const toggleMenu = function () {
//     getSidebar.classList.toggle("show");
// };
//met toggle krijg ik de functie niet helemaal werkend zoals ik zou willen, waardoor ik altijd alsnog 2 funties nodig had, dus dan liever zonder toggle

const getMenu = function () {
    getSidebar.classList.add("show");
};
const removeMenu = function () {
    getSidebar.classList.remove("show");
};
menuButton.addEventListener("mouseover", getMenu);
navBar.addEventListener("mouseleave", removeMenu);

//met toggle krijg je als je 1 kleur klikt en daarna de ander en daarna nog een keer die ander, dat je de vorige kleur terug krijgt
//ik wil dat alles grijs wordt ongeacht welke kleuren ik van te voren in heb geklikt, dus dan maar zo

inputButtons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const li = e.target.parentElement.className;
        if (body.className == li) {
            body.removeAttribute("class");
            div.textContent = "geen kleur gekozen";
            div.removeAttribute("class");
            // het lukt me niet om ook de checked status van de radiobutton te verwijderen, meerdere manieren geprobeerd, maar ik vind het wel ok om te zien wat de laatste toggle is geweest
        } else {
            body.removeAttribute("class");
            body.classList.add(li);
            div.textContent = e.target.parentElement.textContent;
            div.classList.add("smallerdiv");
        }
        removeMenu();
        //met toggle krijg je als je 1 kleur klikt en daarna de ander en daarna nog een keer die ander, dat je de vorige kleur terug krijgt
        //ik wil dat alles grijs wordt ongeacht welke kleuren ik van te voren in heb geklikt, dus dan maar zo
    });
});

document.addEventListener("keydown", function (event) {
    let number = parseInt(event.key) - 1;
    console.log(number);
    if (Number.isNaN(number) || number > 5 || number < 0) {
        div.textContent = "geen geldige invoer";
        div.removeAttribute("class");
        return;
    }

    let color = getSidebarLi[number].className;
    let text = getSidebarLi[number].textContent;

    if (body.className == color) {
        body.removeAttribute("class");
        div.textContent = "geen kleur gekozen";
        div.removeAttribute("class");
    } else {
        body.removeAttribute("class");
        body.classList.add(color);
        div.textContent = text;
        div.classList.add("smallerdiv");
    }
    removeMenu();
    // ook hier lukt het me niet om dan ook de radiobuttons aan of uit te vinken
});
