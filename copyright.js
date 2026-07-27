// copyright.js


class Copyright{


addWatermark(project,author){


project.watermark =

"© "+author+
" - Comic AI Studio";


project.date =
new Date();


return project;


}



checkOwner(project,user){


return project.owner===user;


}



}



const copyright =
new Copyright();


export default copyright;
