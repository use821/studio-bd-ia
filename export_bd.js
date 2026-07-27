// export_bd.js
// Exportateur de bandes dessinées Comic AI Studio


class BDExporter {


    // Créer une BD en PDF
    async exportPDF(titre, pages){


        const { jsPDF } = window.jspdf;


        let pdf = new jsPDF(
            "p",
            "mm",
            "a4"
        );


        pages.forEach((page, index)=>{


            if(index > 0){
                pdf.addPage();
            }


            // Ajouter l'image de la page BD
            pdf.addImage(
                page.image,
                "JPEG",
                10,
                10,
                190,
                250
            );


            // Ajouter le titre
            pdf.text(
                titre,
                10,
                290
            );


        });


        pdf.save(
            titre + ".pdf"
        );


    }



    // Exporter en fichier projet
    exportProjet(nom, contenu){


        let fichier = new Blob(
            [
                JSON.stringify(
                    contenu,
                    null,
                    2
                )
            ],
            {
                type:"application/json"
            }
        );


        let lien=document.createElement("a");


        lien.href =
        URL.createObjectURL(fichier);


        lien.download =
        nom+".comic";


        lien.click();

    }


}



const bdExporter = new BDExporter();


export default bdExporter;
