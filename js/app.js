//Script para la transicion de la navbar
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {

        navbar.classList.remove("bg-black/40");
        navbar.classList.add("bg-black/90");

    } else {

        navbar.classList.remove("bg-black/90");
        navbar.classList.add("bg-black/40");

    }

});

//Seccion oculta de camisetas

const shirtsBtn = document.getElementById("shirtsBtn");
const shirtsCollection = document.getElementById("shirtsCollection");

let opened = false;

shirtsBtn.addEventListener("click", () => {

    opened = !opened;

    if (opened) {

        shirtsCollection.classList.remove("collection-hidden");
        shirtsCollection.classList.add("collection-open");

        shirtsBtn.innerHTML = "Ocultar colección ↑";

setTimeout(() => {

    shirtsCollection.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}, 700);

    } else {

        shirtsCollection.classList.remove("collection-open");
        shirtsCollection.classList.add("collection-hidden");

        shirtsBtn.innerHTML = "Explorar colección →";

    }

});

// Seccion oculta de pantalones

const pantsBtn = document.getElementById("pantsBtn");
const pantsCollection = document.getElementById("pantsCollection");

let pantsOpened = false;

pantsBtn.addEventListener("click", () => {

    pantsOpened = !pantsOpened;

    if (pantsOpened) {

        pantsCollection.classList.remove("collection-hidden");
        pantsCollection.classList.add("collection-open");

        pantsBtn.innerHTML = "Ocultar colección ↑";

        setTimeout(() => {

            pantsCollection.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 700);

    } else {

        pantsCollection.classList.remove("collection-open");
        pantsCollection.classList.add("collection-hidden");

        pantsBtn.innerHTML = "Explorar colección →";

    }

});
// Seccion oculta de gorras
const capsBtn = document.getElementById("capsBtn");
const capsCollection = document.getElementById("capsCollection");

let capsOpened = false;

capsBtn.addEventListener("click", () => {

    capsOpened = !capsOpened;

    if (capsOpened) {

        capsCollection.classList.remove("collection-hidden");
        capsCollection.classList.add("collection-open");

        capsBtn.innerHTML = "Ocultar colección ↑";

        setTimeout(() => {

            capsCollection.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 700);

    } else {

        capsCollection.classList.remove("collection-open");
        capsCollection.classList.add("collection-hidden");

        capsBtn.innerHTML = "Explorar colección →";

    }

});