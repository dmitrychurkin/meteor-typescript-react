import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";

export default function useUser() {
    const user = useTracker(Meteor.user);

    return {
        user,
        isLoading: (Meteor.loggingIn() || Meteor.loggingOut())
    };
};
