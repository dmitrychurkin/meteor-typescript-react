import React, { memo, PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Route } from "/imports/config/routes";
import useUser from "/imports/hooks/useUser";

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
