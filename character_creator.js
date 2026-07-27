// Créateur de personnages


class CharacterCreator{


create(data){


return {


name:data.name,

age:data.age,

power:data.power,

weapon:data.weapon,

style:data.style,

personality:data.personality,

level:1


};


}



levelUp(character){

character.level++;

}



}



const characterCreator =
new CharacterCreator();


export default characterCreator;
