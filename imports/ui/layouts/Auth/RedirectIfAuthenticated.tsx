import React, { memo, PropsWithChildren, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Route } from "/imports/config/routes";
import useUser from "/imports/hooks/useUser";
import { Router } from "/imports/infrastructure/router";

const RedirectIfAuthenticated = ({ children }: PropsWithChildren) => {
    const navigate = useNavigate();
    const { user, isLoading } = useUser();

    const userId = user?._id;

    useEffect(() => {
        if (userId) {
            navigate(Router.route(Route.Root), { replace: true });
        }
    }, [userId]);

    if (isLoading) {
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
