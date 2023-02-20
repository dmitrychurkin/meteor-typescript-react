import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';
import { Meteor } from 'meteor/meteor';
import { Role } from '/imports/config/roles';

// TODO: write down rollbacks
Migrations.add({
    version: 1,
    name: 'Create roles',
    up: () => {
        Roles.createRole(Role.Owner);
        Roles.createRole(Role.Admin);
        Roles.createRole(Role.User);
    }
});

Migrations.add({
    version: 2,
    name: 'Create admin user',
    up: async () => {
        const {
            ROOT_ADMIN_USERNAME,
            ROOT_ADMIN_EMAIL,
            ROOT_ADMIN_PASSWORD
        } = Meteor.settings;

        try {
            const userId = await Accounts.createUserAsync({
                username: ROOT_ADMIN_USERNAME,
                email: ROOT_ADMIN_EMAIL,
                password: ROOT_ADMIN_PASSWORD
            });

            Roles.addUsersToRoles(userId, Role.Owner, Roles.GLOBAL_GROUP);
        }catch(error: any) {
            throw new Meteor.Error(error);
        }
    }
});
