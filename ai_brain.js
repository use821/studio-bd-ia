// ai_brain.js

class AIBrain {

    generateIdea(theme) {

        return {

            title: "Nouvelle aventure",

            theme: theme,

            hero: "Héros IA",

            villain: "Seigneur Noir",

            objective:
            "Sauver le royaume"

        };

    }

    improvePrompt(prompt) {

        return prompt +
        ", haute qualité, style manga, éclairage cinématique";

    }

    suggestPower() {

        const powers = [

            "Feu",

            "Glace",

            "Foudre",

            "Ombre",

            "Temps",

            "Gravité",

            "Dragon"

        ];

        return powers[
            Math.floor(Math.random()*powers.length)
        ];

    }

}

const aiBrain = new AIBrain();

export default aiBrain;
