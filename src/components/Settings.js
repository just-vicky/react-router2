import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Settings = () => {
  const { user } = useOutletContext();

  return (
    <div>
      <h3>Settings</h3>
      <p>Adjust your settings here, {user.name}.</p>
    </div>
  );
};

export default Settings;
