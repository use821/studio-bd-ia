// chapter_manager.js


class ChapterManager{


constructor(){

this.chapters=[];

}



addChapter(title,pages){


this.chapters.push({

title:title,

pages:pages

});


}



deleteChapter(title){


this.chapters =
this.chapters.filter(
c=>c.title!==title
);


}



getChapters(){

return this.chapters;

}



getChapter(title){

return this.chapters.find(
c=>c.title===title
);

}


}



const chapters =
new ChapterManager();


export default chapters;
