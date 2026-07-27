// mobile_app.js

class MobileApp {

    constructor() {

        this.platform = "Web";

    }

    detectPlatform() {

        const userAgent =
        navigator.userAgent;

        if(/Android/i.test(userAgent)){

            this.platform = "Android";

        }

        else if(

            /iPhone|iPad|iPod/i.test(userAgent)

        ){

            this.platform = "iOS";

        }

        else{

            this.platform = "Web";

        }

        return this.platform;

    }

    enableOfflineMode() {

        console.log(
            "Mode hors connexion activé."
        );

    }

    sendNotification(message) {

        if("Notification" in window){

            Notification.requestPermission()
            .then(permission => {

                if(permission === "granted"){

                    new Notification(message);

                }

            });

        }

    }

}

const mobileApp = new MobileApp();

export default mobileApp;
