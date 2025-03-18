import React, { useState, useEffect } from 'react';
import UsersList from './components/UsersList';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    fetch('http://localhost:5001/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <UsersList users={users} />
    </div>
  );
};

export default App;
