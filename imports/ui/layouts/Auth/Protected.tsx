import React, { memo, PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Route } from "/imports/config/routes";
import useUser from "/imports/hooks/useUser";
import { Router } from "/imports/infrastructure/router";

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
                to={Router.route(Route.Login)}
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
