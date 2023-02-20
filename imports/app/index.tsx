import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Router } from '/imports/infrastructure/router';

const App = () => (
  <React.StrictMode>
    <RouterProvider router={Router.browserRouter} />
  </React.StrictMode>
);

export default App;
