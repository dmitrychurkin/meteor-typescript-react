import { Meteor } from 'meteor/meteor';
import main from '/imports/startup/client';

Meteor.startup(() => {
  /**Run client side startup code here */
  main();
});
