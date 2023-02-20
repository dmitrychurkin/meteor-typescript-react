import React, { memo, PropsWithChildren } from "react";
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from "meteor/meteor";
import { Navigate, useLocation } from "react-router-dom";
import { Route } from "/imports/config/routes";

const Protected = ({ children }: PropsWithChildren) => {
    const location = useLocation();
    const user = useTracker(() => Meteor.user());

    if (Meteor.loggingIn() || Meteor.loggingOut()) {
        return (
            <div>Loading...</div>
        );
    }

    if (!user) {
        return (
            <Navigate
                to={Route.LoginAbsolute}
                replace
                state={{ from: location }}
            />
        );
    }

    return (
        <>
            {children}
        </>
    );
};

export default memo(Protected);
