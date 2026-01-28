import React, { useState, useEffect } from 'react';
import { fetchFromApi } from '../utils/api';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getMedalEmoji = (position) => {
    const medals = ['🥇', '🥈', '🥉'];
    return medals[position] || '•';
  };

  const getTeamColor = (team) => {
    if (team.toLowerCase().includes('marvel') || team.toLowerCase().includes('avengers')) {
      return 'danger';
    } else if (team.toLowerCase().includes('dc') || team.toLowerCase().includes('justice')) {
      return 'primary';
    }
    return 'secondary';
  };

  useEffect(() => {
    const loadLeaderboard = async () => {
      try {
        setLoading(true);
        console.log('[Leaderboard Component] Fetching leaderboard data...');
        const data = await fetchFromApi('/api/leaderboard/');
        console.log('[Leaderboard Component] Leaderboard loaded:', data);
        
        // Sort by points descending
        const sorted = [...data].sort((a, b) => b.points - a.points);
        setLeaderboard(sorted);
        setError(null);
      } catch (err) {
        console.error('[Leaderboard Component] Error loading leaderboard:', err);
        setError('Failed to load leaderboard');
      } finally {
        setLoading(false);
      }
    };

    loadLeaderboard();
  }, []);

  if (loading) {
    return (
      <div className="alert alert-info alert-dismissible fade show" role="alert">
        <div className="spinner-border spinner-border-sm me-2" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <strong>Loading leaderboard...</strong> Please wait.
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

  const totalPoints = leaderboard.reduce((sum, entry) => sum + (typeof entry.points === 'number' ? entry.points : 0), 0);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h2 mb-0">🏆 Leaderboard</h1>
        <span className="badge bg-warning text-dark fs-6">{leaderboard.length} teams</span>
      </div>

      {leaderboard.length === 0 ? (
        <div className="alert alert-warning" role="alert">
          <h4 className="alert-heading">No Teams Found</h4>
          <p>There are currently no teams on the leaderboard.</p>
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm">
              <div className="list-group list-group-flush">
                {leaderboard.map((entry, index) => (
                  <div key={entry.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-3 flex-grow-1">
                      <span className="fs-4 fw-bold">{getMedalEmoji(index)}</span>
                      <div>
                        <h6 className="mb-0 fw-bold">
                          <span className={`badge bg-${getTeamColor(entry.team)} me-2`}>
                            {entry.team}
                          </span>
                        </h6>
                        <small className="text-muted">Rank #{index + 1}</small>
                      </div>
                    </div>
                    <div className="text-end">
                      <span className="badge bg-success fs-6 p-2">{entry.points} pts</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card border-0 shadow-sm bg-light">
              <div className="card-body">
                <h5 className="card-title fw-bold mb-3">📊 Summary</h5>
                <div className="row mb-3">
                  <div className="col">
                    <small className="text-muted d-block">Total Teams</small>
                    <h4 className="mb-0 fw-bold text-primary">{leaderboard.length}</h4>
                  </div>
                  <div className="col">
                    <small className="text-muted d-block">Total Points</small>
                    <h4 className="mb-0 fw-bold text-success">{totalPoints}</h4>
                  </div>
                </div>
                <hr />
                <div>
                  <small className="text-muted d-block">Average Points</small>
                  <h5 className="mb-0 fw-bold text-warning">
                    {(totalPoints / leaderboard.length).toFixed(1)}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Leaderboard;
