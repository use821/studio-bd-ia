function sauvegarder(){

let creation = {
date:new Date(),
message:"Ma création Studio BD IA"
};

localStorage.setItem(
"creationBD",
JSON.stringify(creation)
);

alert("Création sauvegardée !");
}


function charger(){

let data =
localStorage.getItem("creationBD");

if(data){

document.getElementById("sauvegarde").innerHTML =
data;

}

}
