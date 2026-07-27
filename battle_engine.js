// battle_engine.js

class BattleEngine {


fight(hero,enemy){


let heroPower =
hero.powerLevel || 100;


let enemyPower =
enemy.powerLevel || 100;



let result;


if(heroPower > enemyPower){

result = {

winner:hero.name,

status:"Victoire",

damage:
heroPower-enemyPower

};


}

else{


result={

winner:enemy.name,

status:"Défaite",

damage:
enemyPower-heroPower

};


}



return result;


}



attack(character,attackName,damage){


return {

attacker:
character.name,

attack:
attackName,

damage:damage

};


}



}



const battle =
new BattleEngine();


export default battle;
