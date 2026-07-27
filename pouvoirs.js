const pouvoirs = [
"🔥 Feu",
"❄️ Glace",
"⚡ Foudre",
"🌑 Ombre",
"🌊 Eau",
"🌪️ Vent"
];


function donnerPouvoir(){

let pouvoir =
pouvoirs[Math.floor(Math.random()*pouvoirs.length)];

document.getElementById("pouvoir").innerHTML =
"Pouvoir : " + pouvoir;

}
