// Gestionnaire de fichiers pour Comic AI Studio

class FileManager {

    constructor() {
        this.files = [];
    }

    // Ajouter un fichier
    addFile(file) {
        this.files.push(file);
        console.log("Fichier ajouté :", file.name);
    }


    // Afficher la liste des fichiers
    listFiles() {
        return this.files.map(file => ({
            nom: file.name,
            taille: file.size,
            type: file.type
        }));
    }


    // Lire un fichier texte
    readTextFile(file) {

        return new Promise((resolve, reject) => {

            const reader = new FileReader();

            reader.onload = () => {
                resolve(reader.result);
            };

            reader.onerror = () => {
                reject("Erreur de lecture");
            };

            reader.readAsText(file);

        });

    }


    // Lire une image
    readImage(file) {

        return new Promise((resolve)=>{

            const reader = new FileReader();

            reader.onload = () => {
                resolve(reader.result);
            };

            reader.readAsDataURL(file);

        });

    }


    // Supprimer un fichier
    deleteFile(name){

        this.files = this.files.filter(
            file => file.name !== name
        );

        console.log("Fichier supprimé :", name);
    }


    // Rechercher un fichier
    searchFile(keyword){

        return this.files.filter(
            file => file.name.includes(keyword)
        );

    }

}


// Création du gestionnaire
const comicFiles = new FileManager();


// Export
export default comicFiles;
