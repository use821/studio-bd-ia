// ===================================
// STUDIO BD IA - GENERATEUR DE COMBAT
// ===================================


const attaques = [
    "Lame de lumière ⚔️",
    "Explosion d'énergie ⚡",
    "Poing du dragon 🐉",
    "Flamme éternelle 🔥",
    "Technique de l'ombre 🌑",
    "Tempête de glace ❄️",
    "Éclair céleste ⚡"
];


const lieuxCombat = [
    "Arène des guerriers",
    "Village ancien",
    "Grande ville futuriste",
    "Forêt mystérieuse",
    "Temple oublié",
    "Planète inconnue"
];



// Générer une scène de combat

function creerCombat(){

let heros =
document.getElementById("herosCombat").value;


let ennemi =
document.getElementById("ennemiCombat").value;



let attaque =
attaques[Math.floor(Math.random()*attaques.length)];


let lieu =
lieuxCombat[Math.floor(Math.random()*lieuxCombat.length)];



let scene = `

<h2>⚔️ Combat Anime ⚔️</h2>

<div class="scene-combat">

<p>
🏙️ Lieu : ${lieu}
</p>

<p>
🧑 Héros : ${heros}
</p>

<p>
👿 Ennemi : ${ennemi}
</p>

<p>
💥 Attaque utilisée :
<strong>${attaque}</strong>
</p>

<p>
🔥 Les deux guerriers libèrent leur énergie !
</p>

</div>

`;



document.getElementById("combat").innerHTML = scene;


}



// Générer une attaque aléatoire

function attaqueSpeciale(){

let attaque =
attaques[Math.floor(Math.random()*attaques.length)];


document.getElementById("attaque").innerHTML =
`
⚡ Technique spéciale :
${attaque}
`;

}



// Créer un dialogue de combat

function dialogueCombat(){

let dialogues=[

"Je n'abandonnerai jamais !",

"Tu n'es pas assez puissant !",

"Mon énergie dépasse tes limites !",

"Le destin de ce monde repose sur ce combat !"

];


let phrase =
dialogues[Math.floor(Math.random()*dialogues.length)];



document.getElementById("dialogue").innerHTML =
"💬 " + phrase;

}
