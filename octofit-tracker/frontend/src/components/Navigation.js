import React from 'react';
import { Link } from 'react-router-dom';

// Navigation Logo Component
const NavLogoComponent = () => (
  <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="15" fill="#667eea"/>
    <circle cx="50" cy="50" r="40" fill="white"/>
    <path d="M50 20C35 20 23 32 23 47v20h54V47c0-15-12-27-27-27z" fill="#667eea"/>
  </svg>
);

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-sm">
      <div className="container-lg">
        <Link className="navbar-brand fw-bold fs-5 d-flex align-items-center gap-2" to="/">
          <NavLogoComponent />
          OctoFit Tracker
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                <span className="badge bg-light text-dark">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/users">
                👥 Users
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/teams">
                🏢 Teams
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/activities">
                📊 Activities
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/leaderboard">
                🏆 Leaderboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/workouts">
                💪 Workouts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
