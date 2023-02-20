import { Meteor } from "meteor/meteor";
import React, { memo, useEffect } from "react";
import { Form, useActionData, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const Auth = () => {
    const location = useLocation();
    const error = useActionData() as Meteor.Error;

    useEffect(() => {
        if (error?.reason) {
            toast.error(error.reason);
        }
    }, [error?.reason]);

    return (
        <Form method="post">
            <input
                type="text"
                name="email"
            />
            <input
                type="password"
                name="password"
            />
            <input
                type='hidden'
                name="redirect"
                defaultValue={location.state?.from.pathname ?? ''}
            />
            <button type="submit">Login</button>
        </Form>
    );
};

export default memo(Auth);
