import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from '/imports/infrastructure/router';

const App = () => (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export default App;
