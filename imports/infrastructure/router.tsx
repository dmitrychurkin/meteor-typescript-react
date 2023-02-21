import React from 'react';

import type { RouteObject } from "react-router-dom";
import { createBrowserRouter, redirect } from "react-router-dom";

import withFormData from '/imports/util/withFormData';

import { authenticate, AuthenticateUser } from '/imports/api/user';

import Root from "/imports/ui/layouts/Root";
import { Protected, RedirectIfAuthenticated } from '/imports/ui/layouts/Auth';

import Home from "/imports/ui/screens/Home";
import Login from "/imports/ui/screens/Login";
import { Route } from '/imports/config/enums';

export class Router {
    public static route(r: Route) {
        return `/${r}`;
    }

    public static get browserRouter() {
        return createBrowserRouter(this.routes);
    }

    private static routes: RouteObject[] = [
        {
            path: this.route(Route.Root),
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
                    action: withFormData<
                        AuthenticateUser & { readonly redirect?: string; }
                    >(async ({
                        email,
                        password,
                        redirect: redirectTo
                    }) => {
                        await authenticate({
                            email,
                            password
                        });

                        return redirect(redirectTo || this.route(Route.Root));
                    }),
                    path: this.route(Route.Login),
                    element: (
                        <RedirectIfAuthenticated>
                            <Login />
                        </RedirectIfAuthenticated>
                    )
                }
            ]
        }
    ];
}

export const { route } = Router;
