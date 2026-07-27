// ========================================
// COMIC AI STUDIO
// script.js
// ========================================

// Animation du titre
window.addEventListener("load", () => {
    const titre = document.querySelector("h1");

    if (titre) {
        titre.style.opacity = "0";
        titre.style.transform = "translateY(-40px)";

        setTimeout(() => {
            titre.style.transition = "1s";
            titre.style.opacity = "1";
            titre.style.transform = "translateY(0)";
        }, 200);
    }
});

// Animation des cartes
const cartes = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, { threshold: 0.2 });

cartes.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.8s";

    observer.observe(card);

});

// Animation des boutons
const boutons = document.querySelectorAll("button");

boutons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.08)";
        btn.style.boxShadow = "0 0 25px #7c3aed";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";
        btn.style.boxShadow = "none";

    });

});

// Navigation des boutons
const creerPersonnage = document.getElementById("btnPersonnage");
const creerBD = document.getElementById("btnBD");
const galerie = document.getElementById("btnGalerie");
const combat = document.getElementById("btnCombat");

if (creerPersonnage) {

    creerPersonnage.onclick = () => {

        window.location.href = "personnages.html";

    };

}

if (creerBD) {

    creerBD.onclick = () => {

        window.location.href = "bd.html";

    };

}

if (galerie) {

    galerie.onclick = () => {

        window.location.href = "galerie.html";

    };

}

if (combat) {

    combat.onclick = () => {

        window.location.href = "combat.html";

    };

}

// Effet lumineux sur le fond
let intensite = 0;
let direction = 1;

setInterval(() => {

    intensite += direction;

    if (intensite > 25) direction = -1;
    if (intensite < 0) direction = 1;

    document.body.style.boxShadow =
        `inset 0 0 ${intensite}px rgba(124,58,237,0.25)`;

}, 80);

// Message de bienvenue
setTimeout(() => {

    console.log("Bienvenue sur Comic AI Studio !");

}, 1000);
