import { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);

  // Load the data from the server
  useEffect(() => {
    let mounted = true;

    const getUsers = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (mounted) {
        setUsers(response.data);
      }
    };

    getUsers();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="Users">
      <h1>Users:</h1>
      {users.length ? (
        <ul data-testid="user-list">
          {users.map((user) => (
            <li key={user.id} className="user" data-testid="user-item">
              <span>{user.name}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div>Loading users...</div>
      )}
    </div>
  );
}

export default Users;
