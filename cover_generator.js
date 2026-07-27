// cover_generator.js

class CoverGenerator {


    createCover(titre, image, auteur){

        let cover = {

            titre:titre,

            image:image,

            auteur:auteur,

            date:new Date()

        };


        return cover;

    }



    displayCover(cover){


        document.body.innerHTML += `

        <div class="cover">

        <h1>${cover.titre}</h1>

        <img src="${cover.image}"
        width="300">

        <p>
        Créé par ${cover.auteur}
        </p>

        </div>

        `;

    }


}


const coverGenerator = new CoverGenerator();


export default coverGenerator;
