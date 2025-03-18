import React from 'react';

const UsersList = ({ users }) => {
  return (
    <div>
      {users.length === 0 ? (
        <p>No users available.</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsersList;
