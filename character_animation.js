// character_animation.js


class CharacterAnimation{


play(character,animation){


return {


character:
character.name,


animation:
animation,


time:
"2 secondes"


};


}



walk(character){

return this.play(
character,
"marche"
);

}



attack(character){

return this.play(
character,
"attaque"
);

}



transform(character){

return this.play(
character,
"transformation"
);

}



}



const animation =
new CharacterAnimation();


export default animation;
