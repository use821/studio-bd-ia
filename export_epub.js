// export_epub.js


class EPUBExporter{


exportBook(title,content){


let ebook={


title:title,


content:content,


format:"EPUB"


};



let fichier =
new Blob(

[
JSON.stringify(
ebook,
null,
2
)

],

{
type:
"application/epub+json"
}

);



let lien =
document.createElement("a");


lien.href =
URL.createObjectURL(fichier);


lien.download =
title+".epub";


lien.click();



}


}



const epub =
new EPUBExporter();


export default epub;
