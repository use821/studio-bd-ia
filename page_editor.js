// ======================================================
// FICHIER : page_editor.js
// DESCRIPTION : Gestion des pages de Comic AI Studio
// VERSION : 1.0
// ======================================================

class PageEditor {

    constructor() {

        this.pages = [];
        this.currentPage = null;

        this.load();

    }

    // -----------------------------
    // Créer une page
    // -----------------------------
    createPage(name = "Nouvelle Page") {

        const page = {

            id: crypto.randomUUID(),

            name: name,

            width: 2480,

            height: 3508,

            background: "#FFFFFF",

            elements: [],

            createdAt: new Date(),

            updatedAt: new Date()

        };

        this.pages.push(page);

        this.currentPage = page.id;

        this.save();

        return page;

    }

    // -----------------------------
    // Obtenir toutes les pages
    // -----------------------------
    getPages() {

        return this.pages;

    }

    // -----------------------------
    // Obtenir la page actuelle
    // -----------------------------
    getCurrentPage() {

        return this.pages.find(
            page => page.id === this.currentPage
        );

    }

    // -----------------------------
    // Changer de page
    // -----------------------------
    setCurrentPage(id) {

        const page = this.pages.find(
            p => p.id === id
        );

        if (page) {

            this.currentPage = id;

            this.save();

        }

    }

    // -----------------------------
    // Renommer
    // -----------------------------
    renamePage(id, newName) {

        const page = this.pages.find(
            p => p.id === id
        );

        if (!page) return;

        page.name = newName;

        page.updatedAt = new Date();

        this.save();

    }

    // -----------------------------
    // Dupliquer
    // -----------------------------
    duplicatePage(id) {

        const page = this.pages.find(
            p => p.id === id
        );

        if (!page) return;

        const copy = structuredClone(page);

        copy.id = crypto.randomUUID();

        copy.name += " (Copie)";

        this.pages.push(copy);

        this.save();

        return copy;

    }

    // -----------------------------
    // Supprimer
    // -----------------------------
    deletePage(id) {

        this.pages = this.pages.filter(
            page => page.id !== id
        );

        if (this.currentPage === id) {

            this.currentPage =

                this.pages.length
                ? this.pages[0].id
                : null;

        }

        this.save();

    }

    // -----------------------------
    // Déplacer
    // -----------------------------
    movePage(oldIndex, newIndex) {

        if (

            oldIndex < 0 ||

            newIndex < 0 ||

            oldIndex >= this.pages.length ||

            newIndex >= this.pages.length

        ) {

            return;

        }

        const page =

            this.pages.splice(oldIndex, 1)[0];

        this.pages.splice(

            newIndex,

            0,

            page

        );

        this.save();

    }

    // -----------------------------
    // Ajouter un élément
    // -----------------------------
    addElement(element) {

        const page = this.getCurrentPage();

        if (!page) return;

        page.elements.push(element);

        page.updatedAt = new Date();

        this.save();

    }

    // -----------------------------
    // Sauvegarder
    // -----------------------------
    save() {

        localStorage.setItem(

            "comic-pages",

            JSON.stringify(this.pages)

        );

        localStorage.setItem(

            "comic-current-page",

            this.currentPage

        );

    }

    // -----------------------------
    // Charger
    // -----------------------------
    load() {

        const pages =

            localStorage.getItem("comic-pages");

        if (pages) {

            this.pages = JSON.parse(pages);

        }

        this.currentPage =

            localStorage.getItem(

                "comic-current-page"

            );

    }

    // -----------------------------
    // Effacer le projet
    // -----------------------------
    clearProject() {

        this.pages = [];

        this.currentPage = null;

        localStorage.removeItem("comic-pages");

        localStorage.removeItem("comic-current-page");

    }

}

const pageEditor = new PageEditor();

export default pageEditor;
