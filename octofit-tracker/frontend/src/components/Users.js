import React, { useState, useEffect } from 'react';
import { fetchFromApi } from '../utils/api';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);
        console.log('[Users Component] Fetching users data...');
        const data = await fetchFromApi('/api/users/');
        console.log('[Users Component] Users loaded:', data);
        setUsers(data);
        setError(null);
      } catch (err) {
        console.error('[Users Component] Error loading users:', err);
        setError('Failed to load users');
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  if (loading) {
    return (
      <div className="alert alert-info alert-dismissible fade show" role="alert">
        <div className="spinner-border spinner-border-sm me-2" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <strong>Loading users...</strong> Please wait.
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Error!</strong> {error}
      </div>
    );
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h2 mb-0">👥 Users Management</h1>
        <span className="badge bg-secondary fs-6">{users.length} users</span>
      </div>
      {users.length === 0 ? (
        <div className="alert alert-warning" role="alert">
          <h4 className="alert-heading">No Users Found</h4>
          <p>There are currently no users in the system.</p>
        </div>
      ) : (
        <div className="card border-0 shadow-sm">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="table-dark">
                <tr>
                  <th scope="col" className="col-auto">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col" className="col-auto">Team</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id} className="align-middle">
                    <td className="fw-bold text-muted">{index + 1}</td>
                    <td>
                      <strong>{user.name}</strong>
                    </td>
                    <td>
                      <a href={`mailto:${user.email}`} className="link-primary text-decoration-none">
                        {user.email}
                      </a>
                    </td>
                    <td>
                      <span className={`badge bg-${user.team === 'Marvel' ? 'danger' : 'primary'}`}>
                        {user.team}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Users;
