// ===================================
// STUDIO BD IA - GALERIE
// ===================================


// Tableau qui contient les créations

let galerie = JSON.parse(
localStorage.getItem("galerieBD")
) || [];



// Ajouter une création

function ajouterCreation(){

let nom =
document.getElementById("nomCreation").value;


let image =
document.getElementById("imageCreation").value;


let type =
document.getElementById("typeCreation").value;



let creation = {

nom: nom,
image: image,
type: type,
date: new Date().toLocaleDateString()

};



galerie.push(creation);


// Sauvegarde

localStorage.setItem(
"galerieBD",
JSON.stringify(galerie)
);



afficherGalerie();

}



// Afficher la galerie

function afficherGalerie(){

let zone =
document.getElementById("galerie");



zone.innerHTML="";



galerie.forEach((creation,index)=>{


zone.innerHTML += `

<div class="carte-galerie">

<img src="${creation.image}" 
alt="${creation.nom}">


<h3>${creation.nom}</h3>

<p>
Type : ${creation.type}
</p>

<p>
Créé le : ${creation.date}
</p>


<button onclick="supprimerCreation(${index})">
Supprimer
</button>


</div>

`;

});


}



// Supprimer une création

function supprimerCreation(index){

galerie.splice(index,1);


localStorage.setItem(
"galerieBD",
JSON.stringify(galerie)
);


afficherGalerie();

}



// Effacer toute la galerie

function viderGalerie(){

galerie=[];


localStorage.removeItem(
"galerieBD"
);


afficherGalerie();

}



// Charger la galerie au démarrage

window.onload=function(){

if(document.getElementById("galerie")){

afficherGalerie();

}

};
