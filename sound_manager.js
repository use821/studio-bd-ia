// sound_manager.js


class SoundManager{


constructor(){

this.sounds=[];

}



addSound(name,file){


this.sounds.push({

name:name,

file:file

});


}



play(name){


let sound =
this.sounds.find(
s=>s.name===name
);


if(sound){

let audio =
new Audio(sound.file);


audio.play();

}


}



}



const sound =
new SoundManager();


export default sound;
