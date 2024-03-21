import React from 'react';
import DataTableComponent from './Data';
import { useParams } from 'react-router-dom';

const UserDetailsPage = () => {
  const { email } = useParams();

  return (
    <div>
      <h2>User Details Page</h2>
      <DataTableComponent userEmail={email} />
    </div>
  );
};

export default UserDetailsPage;
