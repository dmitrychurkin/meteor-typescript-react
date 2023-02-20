import { Meteor } from "meteor/meteor";
import { LinksCollection } from "./collection";

export const links = () =>
    Meteor.publish('links', () => LinksCollection.find());
