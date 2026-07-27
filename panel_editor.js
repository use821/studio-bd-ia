// ==========================================================
// FICHIER : panel_editor.js
// DESCRIPTION : Gestion des cases de BD
// VERSION : 1.0
// ==========================================================

import pageEditor from "./page_editor.js";

class PanelEditor {

    constructor() {
        this.selectedPanel = null;
    }

    // Créer une case
    createPanel(x, y, width, height) {

        const page = pageEditor.getCurrentPage();

        if (!page) {
            console.error("Aucune page sélectionnée.");
            return;
        }

        const panel = {

            id: crypto.randomUUID(),

            x: x,

            y: y,

            width: width,

            height: height,

            background: "#FFFFFF",

            borderColor: "#000000",

            borderWidth: 3,

            borderRadius: 0,

            rotation: 0,

            opacity: 1,

            locked: false,

            visible: true,

            elements: [],

            createdAt: new Date(),

            updatedAt: new Date()

        };

        page.elements.push(panel);

        page.updatedAt = new Date();

        pageEditor.save();

        return panel;

    }

    // Récupérer toutes les cases
    getPanels() {

        const page = pageEditor.getCurrentPage();

        if (!page) return [];

        return page.elements;

    }

    // Trouver une case
    getPanel(id) {

        return this.getPanels().find(

            panel => panel.id === id

        );

    }

    // Sélectionner une case
    selectPanel(id) {

        this.selectedPanel = id;

    }

    // Obtenir la case sélectionnée
    getSelectedPanel() {

        return this.getPanel(

            this.selectedPanel

        );

    }

    // Déplacer
    movePanel(id, x, y) {

        const panel = this.getPanel(id);

        if (!panel) return;

        panel.x = x;
        panel.y = y;

        panel.updatedAt = new Date();

        pageEditor.save();

    }

    // Redimensionner
    resizePanel(id, width, height) {

        const panel = this.getPanel(id);

        if (!panel) return;

        panel.width = width;

        panel.height = height;

        panel.updatedAt = new Date();

        pageEditor.save();

    }

    // Rotation
    rotatePanel(id, angle) {

        const panel = this.getPanel(id);

        if (!panel) return;

        panel.rotation = angle;

        panel.updatedAt = new Date();

        pageEditor.save();

    }

    // Changer la couleur
    setBackground(id, color) {

        const panel = this.getPanel(id);

        if (!panel) return;

        panel.background = color;

        pageEditor.save();

    }

    // Ajouter un élément
    addElement(id, element) {

        const panel = this.getPanel(id);

        if (!panel) return;

        panel.elements.push(element);

        panel.updatedAt = new Date();

        pageEditor.save();

    }

    // Supprimer un élément
    removeElement(panelId, elementId) {

        const panel = this.getPanel(panelId);

        if (!panel) return;

        panel.elements = panel.elements.filter(

            element => element.id !== elementId

        );

        pageEditor.save();

    }

    // Dupliquer une case
    duplicatePanel(id) {

        const panel = this.getPanel(id);

        if (!panel) return;

        const copy = structuredClone(panel);

        copy.id = crypto.randomUUID();

        copy.x += 30;

        copy.y += 30;

        const page = pageEditor.getCurrentPage();

        page.elements.push(copy);

        pageEditor.save();

        return copy;

    }

    // Verrouiller
    lockPanel(id) {

        const panel = this.getPanel(id);

        if (!panel) return;

        panel.locked = true;

        pageEditor.save();

    }

    // Déverrouiller
    unlockPanel(id) {

        const panel = this.getPanel(id);

        if (!panel) return;

        panel.locked = false;

        pageEditor.save();

    }

    // Afficher
    showPanel(id) {

        const panel = this.getPanel(id);

        if (!panel) return;

        panel.visible = true;

        pageEditor.save();

    }

    // Masquer
    hidePanel(id) {

        const panel = this.getPanel(id);

        if (!panel) return;

        panel.visible = false;

        pageEditor.save();

    }

    // Supprimer
    deletePanel(id) {

        const page = pageEditor.getCurrentPage();

        if (!page) return;

        page.elements = page.elements.filter(

            panel => panel.id !== id

        );

        page.updatedAt = new Date();

        pageEditor.save();

    }

    // Fusionner deux cases
    mergePanels(id1, id2) {

        const p1 = this.getPanel(id1);

        const p2 = this.getPanel(id2);

        if (!p1 || !p2) return;

        p1.width = Math.max(

            p1.width,

            p2.width

        );

        p1.height = Math.max(

            p1.height,

            p2.height

        );

        p1.elements.push(

            ...p2.elements

        );

        this.deletePanel(id2);

        pageEditor.save();

    }

}

const panelEditor = new PanelEditor();

export default panelEditor;
