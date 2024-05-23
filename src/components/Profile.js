import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Profile = () => {
  const { user } = useOutletContext();

  return (
    <div>
      <h3>Profile</h3>
      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
    </div>
  );
};

export default Profile;
