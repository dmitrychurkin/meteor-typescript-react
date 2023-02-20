import React from 'react';
import { createBrowserRouter, redirect } from "react-router-dom";
import withFormData from '/imports/util/withFormData';
import { authenticate, AuthenticateUser } from '/imports/api/user';

import Root from "/imports/ui/layouts/Root";
import { Protected, RedirectIfAuthenticated } from '/imports/ui/layouts/Auth';

import Home from "/imports/ui/screens/Home";
import Login from "/imports/ui/screens/Login";

import { Route } from '/imports/config/routes';

const router = createBrowserRouter([
    {
        path: Route.Root,
        element: <Root />,
        children: [
            {
                index: true,
                element: (
                    <Protected>
                        <Home />
                    </Protected>
                )
            },
            {
                action: withFormData<AuthenticateUser>(async ({
                    email,
                    password,
                    redirect: redirectTo
                }) => {
                    try {
                        await authenticate({
                            email,
                            password
                        });

                        return redirect(redirectTo || Route.Root);
                    }catch(error) {
                        return error;
                    }
                }),
                path: Route.Login,
                element: (
                    <RedirectIfAuthenticated>
                        <Login />
                    </RedirectIfAuthenticated>
                )
            }
        ]
    }
]);

export default router;
