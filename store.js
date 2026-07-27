// store.js


class Store{


constructor(){

this.items=[

{
name:"Pack héros",
price:5
},

{
name:"Effets combat",
price:10
},

{
name:"Styles manga",
price:8
}

];


}



buy(item,user){


return {


user:user.name,

item:item.name,

message:
"Achat effectué"


};


}



getItems(){

return this.items;

}



}



const store =
new Store();


export default store;
