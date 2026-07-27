// Gestion des comptes utilisateurs

class AccountManager {


constructor(){
this.accounts=[];
}



createAccount(name,email){

let user={

id:Date.now(),

name:name,

email:email,

projects:[],

avatar:"default.png"

};


this.accounts.push(user);


return user;

}



updateProfile(id,data){


let user=this.accounts.find(
u=>u.id===id
);


if(user){

Object.assign(
user,
data
);

}


}



getUser(id){

return this.accounts.find(
u=>u.id===id
);

}



}



const account =
new AccountManager();


export default account;
