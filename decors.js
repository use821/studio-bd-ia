const decors = [
"Village japonais animé",
"Grande cité futuriste",
"Forêt magique",
"Académie des guerriers",
"Monde céleste"
];


function choisirDecor(){

let choix =
decors[Math.floor(Math.random()*decors.length)];

document.getElementById("decor").innerHTML =
"Décor choisi : " + choix;

}
