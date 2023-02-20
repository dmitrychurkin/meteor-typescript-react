import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '/imports/app';
import 'react-toastify/dist/ReactToastify.css';

const mountApp = () => {
    const container = document.getElementById('react-target');
    const root = createRoot(container!);
    root.render(<App />);
};

export default mountApp;
