import { Meteor } from 'meteor/meteor';
import main from '/imports/startup/server';

Meteor.startup(async () => {
  /**Run server side startup code here */
  main();
});
