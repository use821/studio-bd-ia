// ===================================
// STUDIO BD IA - SYSTEME DE VOIX
// ===================================


// Liste des voix/personnages

const personnagesVoix = [
    {
        nom:"Akira",
        emotion:"courage",
        phrase:"Je protégerai ce monde, peu importe le danger !"
    },

    {
        nom:"Yuna",
        emotion:"magie",
        phrase:"La puissance des éléments est avec moi !"
    },

    {
        nom:"Raizen",
        emotion:"colere",
        phrase:"Tu ne peux pas arrêter ma puissance !"
    }
];



// Faire parler un personnage

function parlerPersonnage(){

let choix =
personnagesVoix[
Math.floor(Math.random()*personnagesVoix.length)
];


let texte =
choix.phrase;



document.getElementById("dialogueVoix").innerHTML =
`
<strong>${choix.nom}</strong> :
${texte}
`;



// Utilisation de la voix du navigateur

let message =
new SpeechSynthesisUtterance(texte);


message.lang="fr-FR";

message.rate=1;

message.pitch=1;



speechSynthesis.speak(message);


}



// Dialogue de combat

function dialogueCombatVoix(){


let dialogues=[

"Prépare-toi pour le combat final !",

"Mon énergie dépasse toutes les limites !",

"Cette attaque sera la dernière !",

"Je n'abandonnerai jamais !"

];



let phrase =
dialogues[
Math.floor(Math.random()*dialogues.length)
];



document.getElementById("dialogueVoix").innerHTML =
"⚔️ " + phrase;



let voix =
new SpeechSynthesisUtterance(phrase);


voix.lang="fr-FR";


speechSynthesis.speak(voix);

}



// Arrêter la voix

function arreterVoix(){

speechSynthesis.cancel();

}
