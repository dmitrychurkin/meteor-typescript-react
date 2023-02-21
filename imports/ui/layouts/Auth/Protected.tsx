import React, { memo, PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Route } from "/imports/config/enums";
import useUser from "/imports/hooks/useUser";
import { route } from "/imports/infrastructure/router";

const Protected = ({ children }: PropsWithChildren) => {
    const location = useLocation();
    const { user, isLoading } = useUser();

    if (isLoading) {
        return (
            <div>Loading...</div>
        );
    }

    if (!user) {
        return (
            <Navigate
                to={route(Route.Login)}
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
