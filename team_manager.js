// team_manager.js

class TeamManager {

    constructor() {
        this.teams = [];
    }

    createTeam(name) {

        const team = {

            name,

            members: []

        };

        this.teams.push(team);

        return team;

    }

    addMember(team, member) {

        team.members.push(member);

    }

    removeMember(team, memberName) {

        team.members =
        team.members.filter(

            member =>
            member.name !== memberName

        );

    }

    listMembers(team) {

        return team.members;

    }

}

const teamManager = new TeamManager();

export default teamManager;
