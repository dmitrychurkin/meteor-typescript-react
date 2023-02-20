import { Meteor } from "meteor/meteor";

export const links = () =>
    Meteor.subscribe('links');
