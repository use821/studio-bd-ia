// admin_panel.js

class AdminPanel {

    constructor() {
        this.users = [];
        this.projects = [];
    }

    addUser(user) {
        this.users.push(user);
    }

    removeUser(id) {
        this.users = this.users.filter(
            user => user.id !== id
        );
    }

    addProject(project) {
        this.projects.push(project);
    }

    getStatistics() {

        return {

            totalUsers: this.users.length,

            totalProjects: this.projects.length,

            premiumUsers:
            this.users.filter(
                user => user.premium
            ).length

        };

    }

}

const adminPanel = new AdminPanel();

export default adminPanel;
