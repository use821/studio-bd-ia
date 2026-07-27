// ===================================
// STUDIO BD IA - ANIMATION ANIME
// ===================================


// Ajouter une aura autour d'un personnage

function activerAura(){

let personnage =
document.getElementById("personnageAnime");


personnage.classList.add("aura");


setTimeout(()=>{

personnage.classList.remove("aura");

},3000);

}



// Explosion d'énergie

function explosion(){

let zone =
document.getElementById("animationZone");


zone.innerHTML += `

<div class="explosion">
💥⚡🔥
</div>

`;


setTimeout(()=>{

zone.innerHTML="";

},2000);

}



// Transformation du personnage

function transformation(){

let perso =
document.getElementById("personnageAnime");


perso.innerHTML =
"🔥 Transformation ultime 🔥";


perso.classList.add("transformation");


}



// Déplacement rapide anime

function mouvementRapide(){

let perso =
document.getElementById("personnageAnime");


perso.classList.add("attaque");



setTimeout(()=>{

perso.classList.remove("attaque");

},1000);

}



// Création d'effet de combat

function effetCombat(){

let effets=[

"⚡ Éclair puissant",
"🔥 Explosion de feu",
"❄️ Tempête de glace",
"🌑 Ombre mystérieuse",
"💨 Vitesse extrême"

];


let choix =
effets[Math.floor(Math.random()*effets.length)];



document.getElementById("effet").innerHTML =
choix;

}
