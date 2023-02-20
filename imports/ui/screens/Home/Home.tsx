import React, { memo } from 'react';
import { logout } from '/imports/api/user';

const Hello = () => (
  <div>
    Home screen
    <button onClick={logout}>Log out</button>
  </div>
);

export default memo(Hello);
