import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Users from './components/Users';
import Teams from './components/Teams';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Workouts from './components/Workouts';
import './App.css';

// Logo - simple SVG or placeholder
const LogoComponent = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="#667eea"/>
    <circle cx="20" cy="20" r="16" fill="white"/>
    <path d="M20 8C13.9 8 9 12.9 9 19v8h22v-8c0-6.1-4.9-11-11-11z" fill="#667eea"/>
  </svg>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <header className="App-header">
          <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
            <LogoComponent />
            <h1 className="display-4 mb-0">OctoFit Tracker</h1>
          </div>
          <p className="lead">Fitness Activity Tracker & Team Leaderboard</p>
        </header>
        <main className="container-lg mt-4 mb-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/users" element={<Users />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/workouts" element={<Workouts />} />
          </Routes>
        </main>
        <footer className="bg-dark text-white text-center py-4 mt-5">
          <div className="container">
            <p className="mb-0">&copy; 2026 OctoFit Tracker. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="card border-0 shadow-lg">
          <div className="card-body p-5">
            <h1 className="card-title display-5 mb-4">Welcome to OctoFit Tracker</h1>
            <p className="card-text lead text-muted mb-5">
              Track your fitness activities and compete with your team on the leaderboard!
            </p>
            <div className="row mt-5">
              <div className="col-md-4 mb-4">
                <div className="text-center">
                  <h5 className="h4 mb-3">👥 Users</h5>
                  <p className="text-muted">View all registered users and their team assignments</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="text-center">
                  <h5 className="h4 mb-3">🏢 Teams</h5>
                  <p className="text-muted">Explore teams and their members</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="text-center">
                  <h5 className="h4 mb-3">📊 Activities</h5>
                  <p className="text-muted">Track fitness activities and duration</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-4 mx-auto">
                <div className="text-center">
                  <h5 className="h4 mb-3">🏆 Leaderboard</h5>
                  <p className="text-muted">See team rankings and points</p>
                </div>
              </div>
              <div className="col-md-4 mb-4 mx-auto">
                <div className="text-center">
                  <h5 className="h4 mb-3">💪 Workouts</h5>
                  <p className="text-muted">Personalized workout suggestions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
