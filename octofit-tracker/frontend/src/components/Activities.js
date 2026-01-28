import React, { useState, useEffect } from 'react';
import { fetchFromApi } from '../utils/api';

function Activities() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadActivities = async () => {
      try {
        setLoading(true);
        console.log('[Activities Component] Fetching activities data...');
        const data = await fetchFromApi('/api/activities/');
        console.log('[Activities Component] Activities loaded:', data);
        setActivities(data);
        setError(null);
      } catch (err) {
        console.error('[Activities Component] Error loading activities:', err);
        setError('Failed to load activities');
      } finally {
        setLoading(false);
      }
    };

    loadActivities();
  }, []);

  if (loading) {
    return (
      <div className="alert alert-info alert-dismissible fade show" role="alert">
        <div className="spinner-border spinner-border-sm me-2" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <strong>Loading activities...</strong> Please wait.
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
        <h1 className="h2 mb-0">📊 Activities Log</h1>
        <span className="badge bg-secondary fs-6">{activities.length} activities</span>
      </div>
      {activities.length === 0 ? (
        <div className="alert alert-warning" role="alert">
          <h4 className="alert-heading">No Activities Found</h4>
          <p>There are currently no activities recorded.</p>
        </div>
      ) : (
        <div className="card border-0 shadow-sm">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="table-dark">
                <tr>
                  <th scope="col" className="col-auto">#</th>
                  <th scope="col">User</th>
                  <th scope="col">Activity Type</th>
                  <th scope="col" className="col-auto">Duration</th>
                </tr>
              </thead>
              <tbody>
                {activities.map((activity, index) => (
                  <tr key={activity.id} className="align-middle">
                    <td className="fw-bold text-muted">{index + 1}</td>
                    <td>
                      <strong>{activity.user}</strong>
                    </td>
                    <td>
                      <span className="badge bg-secondary">{activity.activity}</span>
                    </td>
                    <td>
                      <span className="badge bg-success fs-6">{activity.duration} min</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card-footer bg-light">
            <small className="text-muted">
              Total Activities: <strong>{activities.length}</strong> | 
              Average Duration: <strong>{(activities.reduce((sum, a) => sum + a.duration, 0) / activities.length).toFixed(1)} min</strong>
            </small>
          </div>
        </div>
      )}
    </div>
  );
}

export default Activities;
