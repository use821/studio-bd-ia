// Création des mondes


class WorldBuilder{


createWorld(name){


return {


name:name,

cities:[],

kingdoms:[],

magic:true,

map:"world_map.png"


};


}



addCity(world,city){


world.cities.push(city);


}



}



const world =
new WorldBuilder();


export default world;
