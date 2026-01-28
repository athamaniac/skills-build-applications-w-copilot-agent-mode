# OctoFit Tracker - Bootstrap 5 Styling Guide

## Overview
The OctoFit Tracker application uses Bootstrap 5.3.8 for consistent, professional styling across all components. This document outlines the styling patterns and Bootstrap utilities applied throughout the application.

## Global Styling (App.css)

### Color Scheme
- **Primary**: #007bff (Bootstrap blue)
- **Success**: #28a745 (Bootstrap green)
- **Danger**: #dc3545 (Bootstrap red)
- **Warning**: #ffc107 (Bootstrap yellow)
- **Info**: #17a2b8 (Bootstrap cyan)
- **Secondary**: #6c757d (Bootstrap gray)

### Gradient Headers
- App header uses a dark gradient: `linear-gradient(135deg, #282c34 0%, #1e2228 100%)`
- Buttons use similar gradients for visual depth

### Card Styling
- `.card`: `border: none`, `border-radius: 8px`, `box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1)`
- `.card:hover`: Lifts up with `transform: translateY(-5px)` and enhanced shadow
- `.hover-lift`: Custom class for additional hover effects on cards

### Table Styling
- `.table-hover`: Highlights rows on hover with light gray background (#f1f5f9)
- `.table-dark`: Dark header rows with white text
- `.align-middle`: Vertical alignment for table cells

### Badge Styling
- Font weight: 500 (medium)
- Letter spacing: 0.3px
- Consistent padding: 0.5rem 0.75rem
- Color variations: `bg-danger`, `bg-primary`, `bg-success`, `bg-info`, `bg-secondary`, `bg-warning`

### Alert Styling
- Border radius: 8px
- No border (using only background color)
- Alert types: `alert-info`, `alert-warning`, `alert-danger`, `alert-success`
- Spinner integration with loading states

### List Group Items
- Border-left accent: 4px transparent (blue on hover)
- Padding: 1rem 1.25rem
- Transition effect on hover
- Background change on hover: #f8f9fa

## Navigation Component (Navigation.js)

### Styling Classes Applied
```jsx
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-lg">
    <span className="navbar-brand fw-bold fs-5">
      🎯 OctoFit Tracker
    </span>
    <ul className="navbar-nav ms-auto">
      <li className="nav-item">
        <Link to="/" className="nav-link">
          🏠 Home
          <span className="badge bg-light text-dark ms-2">Home</span>
        </Link>
      </li>
      {/* Additional nav items with emoji icons */}
    </ul>
  </div>
</nav>
```

### Classes Used
- `navbar-expand-lg`: Responsive navbar
- `navbar-dark bg-dark`: Dark theme
- `fw-bold fs-5`: Font weight bold, font size 5
- `container-lg`: Large container width
- `badge bg-light text-dark`: Badge styling
- `nav-link`: Navigation links with hover effect

## Users Component (Users.js)

### Bootstrap Layout
```jsx
<div className="d-flex justify-content-between align-items-center mb-4">
  <h1 className="h2 mb-0">👥 Users</h1>
  <span className="badge bg-secondary fs-6">{users.length} users</span>
</div>
<div className="card border-0 shadow-sm">
  <table className="table table-hover mb-0">
    <thead className="table-dark">
      <tr>
        <th scope="col" className="col-auto">#</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Team</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user, index) => (
        <tr key={user.id} className="align-middle">
          <td className="fw-bold text-muted">{index + 1}</td>
          <td><strong>{user.name}</strong></td>
          <td>
            <a href={`mailto:${user.email}`} className="link-primary">
              {user.email}
            </a>
          </td>
          <td>
            <span className={`badge bg-${teamColor}`}>{user.team}</span>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
```

### Bootstrap Utilities
- `d-flex`: Flexbox display
- `justify-content-between`: Space between items
- `align-items-center`: Vertical center alignment
- `mb-4`: Margin bottom (1.5rem)
- `h2`: Heading 2 style
- `mb-0`: No bottom margin
- `fs-6`: Font size 6
- `table-hover`: Hover effect on rows
- `table-dark`: Dark header background
- `col-auto`: Auto column width
- `align-middle`: Middle vertical alignment
- `fw-bold`: Font weight bold
- `text-muted`: Muted text color
- `link-primary`: Primary link color

## Teams Component (Teams.js)

### Bootstrap Layout
```jsx
<div className="row">
  {teams.map((team) => (
    <div key={team.id} className="col-lg-6 mb-4">
      <div className="card border-0 shadow-sm h-100">
        <div className="card-header bg-primary text-white fw-bold">
          {team.name}
        </div>
        <div className="list-group list-group-flush">
          {team.members?.map((member, idx) => (
            <div key={idx} className="list-group-item d-flex justify-content-between">
              <span>{member}</span>
              <span className="badge bg-info">{idx + 1}</span>
            </div>
          ))}
        </div>
        <div className="card-footer bg-light">
          <small className="text-muted">
            👥 {team.members?.length || 0} members
          </small>
        </div>
      </div>
    </div>
  ))}
</div>
```

### Bootstrap Utilities
- `row`: Bootstrap grid row
- `col-lg-6`: 50% width on large screens, full width on smaller
- `mb-4`: Margin bottom spacing
- `h-100`: Full height for card
- `card-header`: Header section
- `bg-primary`: Primary background color
- `text-white`: White text
- `list-group list-group-flush`: List without borders
- `list-group-item`: Individual list items
- `card-footer`: Footer section
- `bg-light`: Light background

## Activities Component (Activities.js)

### Bootstrap Layout
```jsx
<div className="card border-0 shadow-sm">
  <div className="table-responsive">
    <table className="table table-hover mb-0">
      <thead className="table-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">User</th>
          <th scope="col">Activity Type</th>
          <th scope="col">Duration</th>
        </tr>
      </thead>
      <tbody>
        {activities.map((activity, index) => (
          <tr key={activity.id} className="align-middle">
            <td className="fw-bold text-muted">{index + 1}</td>
            <td><strong>{activity.user}</strong></td>
            <td><span className="badge bg-secondary">{activity.activity}</span></td>
            <td><span className="badge bg-success fs-6">{activity.duration} min</span></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  <div className="card-footer bg-light">
    <small className="text-muted">
      Average Duration: <strong>{avgDuration}</strong> min
    </small>
  </div>
</div>
```

### Bootstrap Utilities
- `table-responsive`: Responsive table wrapper
- `fs-6`: Font size 6 for badges
- `bg-secondary`, `bg-success`: Badge color variants

## Leaderboard Component (Leaderboard.js)

### Bootstrap Layout
```jsx
<div className="row">
  <div className="col-lg-8">
    <div className="card border-0 shadow-sm">
      <div className="list-group list-group-flush">
        {leaderboard.map((entry, index) => (
          <div className="list-group-item d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-3 flex-grow-1">
              <span className="fs-4 fw-bold">{getMedalEmoji(index)}</span>
              <div>
                <h6 className="mb-0 fw-bold">
                  <span className={`badge bg-${teamColor}`}>{entry.team}</span>
                </h6>
              </div>
            </div>
            <span className="badge bg-success fs-6 p-2">{entry.points} pts</span>
          </div>
        ))}
      </div>
    </div>
  </div>
  <div className="col-lg-4">
    <div className="card border-0 shadow-sm bg-light">
      <div className="card-body">
        <h5 className="card-title fw-bold">Summary</h5>
        {/* Summary stats */}
      </div>
    </div>
  </div>
</div>
```

### Bootstrap Utilities
- `col-lg-8`, `col-lg-4`: Grid columns (2/3 and 1/3 layout)
- `gap-3`: Gap between flex items (1rem)
- `flex-grow-1`: Flex grow for responsive spacing
- `p-2`: Padding on badge

## Workouts Component (Workouts.js)

### Bootstrap Layout
```jsx
<div className="row">
  {workouts.map((workout) => (
    <div key={workout.id} className="col-lg-6 mb-4">
      <div className="card border-0 shadow-sm h-100 hover-lift">
        <div className="card-header bg-success text-white fw-bold">
          {workout.name}
        </div>
        <div className="card-body">
          <p className="card-text mb-3">{workout.description}</p>
          <div className="d-flex flex-wrap gap-2">
            {workout.suggested_for.map((participant, idx) => (
              <span key={idx} className="badge bg-info text-dark">
                {participant}
              </span>
            ))}
          </div>
        </div>
        <div className="card-footer bg-light">
          <small className="text-muted">
            👥 {workout.suggested_for.length} participants
          </small>
        </div>
      </div>
    </div>
  ))}
</div>
```

### Bootstrap Utilities
- `col-lg-6`: 50% width on large screens
- `hover-lift`: Custom class for enhanced hover effect
- `bg-success text-white`: Success background with white text
- `d-flex flex-wrap`: Flexbox with wrapping
- `gap-2`: Small gap between items
- `bg-info text-dark`: Info background with dark text

## Responsive Design

### Breakpoints Used
- **lg (992px)**: Multicolumn layouts (col-lg-8, col-lg-6, col-lg-4)
- **md (768px)**: Medium adjustments
- **sm (576px)**: Small device optimizations

### Mobile Optimizations
- Font sizes reduce on smaller screens
- Padding reduces for compact layout
- Cards have minimal shadow on mobile
- Tables have reduced font size on mobile
- Badges become slightly smaller

## Bootstrap Components Summary

| Component | Where Used | Bootstrap Classes |
|-----------|-----------|------------------|
| **Navbar** | Navigation.js | navbar, navbar-expand-lg, navbar-dark, bg-dark, nav-link, badge |
| **Table** | Users.js, Activities.js | table, table-hover, table-dark, thead, tbody, align-middle |
| **Cards** | Teams.js, Workouts.js, Leaderboard.js | card, card-header, card-body, card-footer, border-0, shadow-sm |
| **Badges** | All components | badge, bg-{color}, text-{color}, fs-6 |
| **Alerts** | Loading/Error states | alert, alert-{type}, alert-dismissible |
| **List Groups** | Leaderboard.js, Teams.js | list-group, list-group-item, list-group-flush |
| **Grid/Flexbox** | All components | row, col-lg-*, d-flex, justify-content-*, align-items-* |
| **Buttons** | App.js | btn, btn-{color}, hover effects |
| **Forms** | Form components (if added) | form-control, form-select, form-group |
| **Modals** | Modal components (if added) | modal, modal-content, modal-header, modal-body, modal-footer |

## Custom CSS Enhancements

Beyond Bootstrap, custom CSS includes:
- Gradient backgrounds for headers and buttons
- Smooth transitions and hover effects
- Enhanced shadows for depth
- Letter spacing for improved readability
- Custom `.hover-lift` class for cards
- Enhanced list-group-item styling
- Form element styling with focus states
- Modal styling with custom shadows

## Installation & Dependencies
```json
{
  "bootstrap": "5.3.8",
  "react": "18.3.1",
  "react-router-dom": "6.30.3"
}
```

Bootstrap is imported in `index.js`:
```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
```

## Future Enhancements
- Implement dark mode theme
- Add form validation styling
- Create custom theme variants
- Add animation utilities for interactions
- Implement accessibility improvements
