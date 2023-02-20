import { Mongo } from "meteor/mongo";
import { LinkAggregate } from "./aggregate";

export const LinksCollection = new Mongo.Collection<LinkAggregate>('links');
