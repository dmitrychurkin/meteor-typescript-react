import { Meteor } from 'meteor/meteor';

export type AuthenticateUser = {
    readonly email: string;
    readonly password: string;
};

export const authenticate = ({ email, password }: AuthenticateUser) =>
    new Promise((resolve, reject) => {
        Meteor.loginWithPassword(email, password, error => {
            if (error) {
                reject(error);
                return;
            }

            resolve('Success');
        });
    });

export const logout = () =>
    Meteor.logout();
