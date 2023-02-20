import React, { memo, PropsWithChildren, useEffect } from "react";
import { Meteor } from "meteor/meteor";
import { useNavigate } from 'react-router-dom';
import { Route } from "/imports/config/routes";
import { useTracker } from "meteor/react-meteor-data";

const RedirectIfAuthenticated = ({ children }: PropsWithChildren) => {
    const navigate = useNavigate();
    const user = useTracker(() => Meteor.user());

    const userId = user?._id;

    useEffect(() => {
        if (userId) {
            navigate(Route.Root, { replace: true });
        }
    }, [userId]);

    if (Meteor.loggingIn() || Meteor.loggingOut()) {
        return (
            <div>Loading...</div>
        );
    }

    return userId
        ? null
        : (
            <>
                {children}
            </>
        );
};

export default memo(RedirectIfAuthenticated);
