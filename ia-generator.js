// ===================================
// STUDIO BD IA - GENERATEUR IMAGE IA
// ===================================


function genererImageIA() {

    let personnage =
    document.getElementById("personnageIA").value;

    let style =
    document.getElementById("styleIA").value;

    let decor =
    document.getElementById("decorIA").value;


    let prompt = 
    `
    Personnage anime :
    ${personnage}

    Style :
    ${style}

    Décor :
    ${decor}

    Création manga haute qualité,
    détails précis,
    lumière cinématique,
    style anime japonais.
    `;


    document.getElementById("resultatIA").innerHTML =
    `
    <h3>Prompt créé par Studio BD IA :</h3>
    <p>${prompt}</p>

    <div class="image-attente">
    🤖 Génération de l'image IA en cours...
    </div>
    `;


    // Ici viendra la connexion avec une vraie IA d'image
    envoyerVersIA(prompt);

}




function envoyerVersIA(prompt){

    console.log("Demande envoyée à l'IA :");
    console.log(prompt);


    /*
    Exemple futur :

    fetch("API_IMAGE_IA", {
        method:"POST",
        body:JSON.stringify({
            prompt:prompt
        })
    })

    */


}




// Création automatique de personnage

function creerPersonnageAleatoire(){

let noms=[
"Akira",
"Yuna",
"Ren",
"Hikari",
"Kaito"
];


let pouvoirs=[
"feu",
"glace",
"foudre",
"ombre",
"vent"
];


let nom =
noms[Math.floor(Math.random()*noms.length)];


let pouvoir =
pouvoirs[Math.floor(Math.random()*pouvoirs.length)];


document.getElementById("personnageIA").value =
`
${nom}, guerrier anime,
pouvoir ${pouvoir},
apparence unique
`;

}
