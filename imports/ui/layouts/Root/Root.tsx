import React, { memo } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

const Root = () => (
    <>
        <Outlet />
        <ToastContainer />
    </>
);

export default memo(Root);
