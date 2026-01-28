import React, { useState, useEffect } from 'react';
import { fetchFromApi } from '../utils/api';

function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTeams = async () => {
      try {
        setLoading(true);
        console.log('[Teams Component] Fetching teams data...');
        const data = await fetchFromApi('/api/teams/');
        console.log('[Teams Component] Teams loaded:', data);
        setTeams(data);
        setError(null);
      } catch (err) {
        console.error('[Teams Component] Error loading teams:', err);
        setError('Failed to load teams');
      } finally {
        setLoading(false);
      }
    };

    loadTeams();
  }, []);

  if (loading) {
    return (
      <div className="alert alert-info alert-dismissible fade show" role="alert">
        <div className="spinner-border spinner-border-sm me-2" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <strong>Loading teams...</strong> Please wait.
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
        <h1 className="h2 mb-0">🏢 Teams</h1>
        <span className="badge bg-secondary fs-6">{teams.length} teams</span>
      </div>
      {teams.length === 0 ? (
        <div className="alert alert-warning" role="alert">
          <h4 className="alert-heading">No Teams Found</h4>
          <p>There are currently no teams in the system.</p>
        </div>
      ) : (
        <div className="row g-4">
          {teams.map((team) => (
            <div key={team.id} className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-header bg-primary text-white">
                  <h5 className="card-title mb-0 fs-5">{team.name}</h5>
                </div>
                <div className="card-body">
                  <h6 className="text-muted mb-3">Team Members</h6>
                  {Array.isArray(team.members) && team.members.length > 0 ? (
                    <ul className="list-group list-group-flush">
                      {team.members.map((member, idx) => (
                        <li key={idx} className="list-group-item border-0 ps-0 pe-0">
                          <span className="badge bg-info me-2">#{idx + 1}</span>
                          <strong>{member}</strong>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted mb-0">No members assigned</p>
                  )}
                </div>
                <div className="card-footer bg-light">
                  <small className="text-muted">
                    Total Members: <strong>{team.members?.length || 0}</strong>
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Teams;
