import React, { memo } from "react";
import Auth from "/imports/ui/forms/Auth";

const Login = () => (
    <div>
        <h1>Login into app</h1>
        <Auth />
    </div>
);

export default memo(Login);
