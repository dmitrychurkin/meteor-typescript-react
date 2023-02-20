import React, { memo } from "react";
import { Form, useLocation } from "react-router-dom";

const Auth = () => {
    const location = useLocation();

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
