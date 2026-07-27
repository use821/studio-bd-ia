function creerHistoire(){

let titre = [
"Le Royaume Perdu",
"La Lame des Ombres",
"L'Énergie du Dragon"
];

let hasard = titre[Math.floor(Math.random()*titre.length)];

document.getElementById("histoire").innerHTML =
`
<h2>${hasard}</h2>
<p>
Un jeune héros découvre un pouvoir ancien
et doit sauver son monde d'une menace inconnue.
</p>
`;

}
