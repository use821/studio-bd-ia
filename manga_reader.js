// manga_reader.js


class MangaReader{


constructor(){

this.currentPage=0;

this.pages=[];

}



loadManga(pages){

this.pages=pages;

this.currentPage=0;

this.showPage();

}



showPage(){


let page =
this.pages[this.currentPage];


document.getElementById(
"reader"
).innerHTML=`

<img src="${page.image}"
width="600">


<p>
${page.text}
</p>

`;

}



nextPage(){


if(this.currentPage <
this.pages.length-1){

this.currentPage++;

this.showPage();

}


}



previousPage(){


if(this.currentPage>0){

this.currentPage--;

this.showPage();

}


}



}



const reader =
new MangaReader();


export default reader;
