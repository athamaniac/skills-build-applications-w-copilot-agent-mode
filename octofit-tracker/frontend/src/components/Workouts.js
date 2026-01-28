import React, { useState, useEffect } from 'react';
import { fetchFromApi } from '../utils/api';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadWorkouts = async () => {
      try {
        setLoading(true);
        console.log('[Workouts Component] Fetching workouts data...');
        const data = await fetchFromApi('/api/workouts/');
        console.log('[Workouts Component] Workouts loaded:', data);
        setWorkouts(data);
        setError(null);
      } catch (err) {
        console.error('[Workouts Component] Error loading workouts:', err);
        setError('Failed to load workouts');
      } finally {
        setLoading(false);
      }
    };

    loadWorkouts();
  }, []);

  if (loading) {
    return (
      <div className="alert alert-info alert-dismissible fade show" role="alert">
        <div className="spinner-border spinner-border-sm me-2" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <strong>Loading workouts...</strong> Please wait.
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
        <h1 className="h2 mb-0">💪 Workout Plans</h1>
        <span className="badge bg-info text-dark fs-6">{workouts.length} plans</span>
      </div>
      {workouts.length === 0 ? (
        <div className="alert alert-warning" role="alert">
          <h4 className="alert-heading">No Workouts Found</h4>
          <p>There are currently no workout plans available.</p>
        </div>
      ) : (
        <div className="row">
          {workouts.map((workout) => (
            <div key={workout.id} className="col-lg-6 mb-4">
              <div className="card border-0 shadow-sm h-100 hover-lift">
                <div className="card-header bg-success text-white fw-bold">
                  {workout.name}
                </div>
                <div className="card-body">
                  <p className="card-text mb-3">{workout.description}</p>
                  <div>
                    <h6 className="mb-2 fw-bold text-muted text-uppercase" style={{ fontSize: '0.85rem' }}>
                      Suggested Participants
                    </h6>
                    {workout.suggested_for && workout.suggested_for.length > 0 ? (
                      <div className="d-flex flex-wrap gap-2">
                        {workout.suggested_for.map((participant, idx) => (
                          <span key={idx} className="badge bg-info text-dark">
                            {participant}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted mb-0">
                        <em>No specific participants suggested</em>
                      </p>
                    )}
                  </div>
                </div>
                <div className="card-footer bg-light">
                  <small className="text-muted">
                    👥 <strong>{workout.suggested_for ? workout.suggested_for.length : 0}</strong> participant{workout.suggested_for && workout.suggested_for.length !== 1 ? 's' : ''}
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

export default Workouts;
