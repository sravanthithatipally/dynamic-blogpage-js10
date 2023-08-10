let about_button = document.getElementById("aboutButton");
let timetovisit_button = document.getElementById("timeToVisitButton");
let attractions_button = document.getElementById("attractionsButton");

let aboutcontent = document.getElementById("aboutTab");
let timetovisitcontent = document.getElementById("timeToVisitTab");
let attractionscontent = document.getElementById("attractionsTab");

timetovisitcontent.classList.add("d-none");
attractionscontent.classList.add("d-none");

function aboutclicked() {
    aboutcontent.classList.remove("d-none");
    timetovisitcontent.classList.add("d-none");
    attractionscontent.classList.add("d-none");

    about_button.classList.add("selected-button");
    timetovisit_button.classList.remove("selected-button");
    attractions_button.classList.remove("selected-button");
}

function timetovisitclicked() {
    timetovisitcontent.classList.remove("d-none");
    aboutcontent.classList.add("d-none");
    attractionscontent.classList.add("d-none");

    about_button.classList.remove("selected-button");
    timetovisit_button.classList.add("selected-button");
    attractions_button.classList.remove("selected-button");

}

function attractionsclicked() {
    attractionscontent.classList.remove("d-none");
    timetovisitcontent.classList.add("d-none");
    aboutcontent.classList.add("d-none");

    about_button.classList.remove("selected-button");
    timetovisit_button.classList.remove("selected-button");
    attractions_button.classList.add("selected-button");

}