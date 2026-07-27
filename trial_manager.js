// trial_manager.js
// Gestion de la période d'essai gratuite


class TrialManager {


    startTrial(user){


        let today = new Date();


        let endDate = new Date();


        endDate.setDate(
            today.getDate()+30
        );


        user.trialStart =
        today;


        user.trialEnd =
        endDate;


        user.trialActive =
        true;


        return user;

    }



    daysRemaining(user){


        let today =
        new Date();


        let end =
        new Date(
            user.trialEnd
        );


        let difference =
        end - today;


        let days =
        Math.ceil(
            difference /
            (1000*60*60*24)
        );


        return days;


    }



    isTrialValid(user){


        return (
            this.daysRemaining(user)>0
        );


    }



}



const trial =
new TrialManager();


export default trial;
