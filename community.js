// community.js


class Community{


constructor(){

this.posts=[];

}



publish(user,project){


this.posts.push({

author:user,

project:project,

likes:0,

comments:[]

});


}



like(post){


post.likes++;


}



comment(post,text){


post.comments.push(text);


}



getPosts(){

return this.posts;

}



}



const community =
new Community();


export default community;
