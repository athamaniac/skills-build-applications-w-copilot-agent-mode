# OctoFit Tracker - Full-Stack Fitness Application

A modern, responsive fitness tracking application built with **Django REST Framework** backend and **React** frontend, using **MongoDB** for data persistence.

## 🎯 Features

- **User Authentication & Profiles**: Manage user accounts with team assignments
- **Activity Logging**: Track workouts and fitness activities with duration tracking
- **Team Management**: Create and manage fitness teams with team-based competitions
- **Competitive Leaderboard**: Real-time team rankings based on earned points
- **Personalized Workout Suggestions**: Customized workout plans for team members

## 🏗️ Project Architecture

```
octofit-tracker/
├── backend/                          # Django REST API
│   ├── venv/                         # Python virtual environment
│   ├── octofit_tracker/              # Django project
│   │   ├── settings.py               # Django configuration
│   │   ├── urls.py                   # API endpoints
│   │   ├── models.py                 # MongoDB models (Djongo)
│   │   ├── serializers.py            # DRF serializers
│   │   ├── views.py                  # ViewSets & API logic
│   │   ├── admin.py                  # Django admin
│   │   ├── tests.py                  # Unit tests
│   │   └── manage.py                 # Django CLI
│   └── requirements.txt              # Python dependencies
│
└── frontend/                         # React SPA
    ├── node_modules/                 # npm dependencies
    ├── src/
    │   ├── components/               # React components
    │   │   ├── Navigation.js          # Navbar with routing
    │   │   ├── Users.js               # Users table view
    │   │   ├── Teams.js               # Teams card grid
    │   │   ├── Activities.js          # Activities table
    │   │   ├── Leaderboard.js         # Team rankings
    │   │   └── Workouts.js            # Workout plans
    │   ├── utils/
    │   │   └── api.js                 # API utility functions
    │   ├── App.js                     # Main router & layout
    │   ├── App.css                    # Global styles
    │   ├── index.js                   # React entry point
    │   └── index.css                  # Global CSS
    └── package.json                  # npm configuration

```

## 🛠️ Technology Stack

### Backend
- **Framework**: Django 4.1.7
- **API**: Django REST Framework 3.14.0
- **Database**: MongoDB 3.12 with Djongo ORM 1.3.6
- **Authentication**: dj-rest-auth 2.2.6 with django-allauth
- **CORS**: django-cors-headers 4.5.0
- **Python**: 3.10+

### Frontend
- **Framework**: React 18.3.1
- **Routing**: React Router DOM 6.30.3
- **CSS Framework**: Bootstrap 5.3.8
- **Node**: 16+
- **npm**: 8+

### Infrastructure
- **Port 8000**: Django REST API (public)
- **Port 3000**: React development server (public)
- **Port 27017**: MongoDB (private)

## 🚀 Quick Start

### Prerequisites
- Python 3.10+
- Node.js 16+
- MongoDB 3.12+
- Git

### Backend Setup

1. **Create Python Virtual Environment**
   ```bash
   cd octofit-tracker/backend
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Initialize Database**
   ```bash
   python manage.py migrate
   python manage.py populate_db  # Load test data
   ```

4. **Start Django Server**
   ```bash
   python manage.py runserver 0.0.0.0:8000
   ```

   The API will be available at: `http://localhost:8000/api/`

### Frontend Setup

1. **Install Dependencies**
   ```bash
   cd octofit-tracker/frontend
   npm install
   ```

2. **Set Environment Variables** (for Codespace)
   ```bash
   # .env or environment variables
   REACT_APP_CODESPACE_NAME=your-codespace-name
   ```

3. **Start Development Server**
   ```bash
   npm start
   ```

   The app will be available at: `http://localhost:3000`

## 📚 API Documentation

### Base URL
- **Local**: `http://localhost:8000/api/`
- **Codespace**: `https://<CODESPACE_NAME>-8000.app.github.dev/api/`

### Endpoints

#### Users
```
GET    /api/users/              # List all users
POST   /api/users/              # Create user
GET    /api/users/{id}/         # Get user details
PUT    /api/users/{id}/         # Update user
DELETE /api/users/{id}/         # Delete user
```

#### Teams
```
GET    /api/teams/              # List all teams
POST   /api/teams/              # Create team
GET    /api/teams/{id}/         # Get team details
PUT    /api/teams/{id}/         # Update team
DELETE /api/teams/{id}/         # Delete team
```

#### Activities
```
GET    /api/activities/         # List all activities
POST   /api/activities/         # Create activity
GET    /api/activities/{id}/    # Get activity details
PUT    /api/activities/{id}/    # Update activity
DELETE /api/activities/{id}/    # Delete activity
```

#### Leaderboard
```
GET    /api/leaderboard/        # List team rankings
POST   /api/leaderboard/        # Create entry
GET    /api/leaderboard/{id}/   # Get entry details
PUT    /api/leaderboard/{id}/   # Update entry
DELETE /api/leaderboard/{id}/   # Delete entry
```

#### Workouts
```
GET    /api/workouts/           # List all workouts
POST   /api/workouts/           # Create workout
GET    /api/workouts/{id}/      # Get workout details
PUT    /api/workouts/{id}/      # Update workout
DELETE /api/workouts/{id}/      # Delete workout
```

### Response Format
```json
{
  "id": "unique-id",
  "field1": "value1",
  "field2": "value2"
}
```

## 🗄️ Database Schema

### Collections

#### Users
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  team: String,
  role: String,
  created_at: Date
}
```

#### Teams
```javascript
{
  _id: ObjectId,
  name: String,
  members: [String],
  description: String,
  created_at: Date
}
```

#### Activities
```javascript
{
  _id: ObjectId,
  user: String,
  activity: String,
  duration: Number,
  date: Date,
  created_at: Date
}
```

#### Leaderboard
```javascript
{
  _id: ObjectId,
  team: String,
  points: Number,
  rank: Number,
  updated_at: Date
}
```

#### Workouts
```javascript
{
  _id: ObjectId,
  name: String,
  description: String,
  suggested_for: [String],
  difficulty: String,
  created_at: Date
}
```

## 🎨 UI Components

All components use **Bootstrap 5.3.8** for consistent, professional styling:

### Navigation
- Dark responsive navbar with emoji icons
- Active page highlighting
- Mobile-friendly hamburger menu

### Users Table
- Numbered rows for easy reference
- Email links with mailto functionality
- Color-coded team badges (red for Marvel, blue for DC)
- Responsive table with hover effects

### Teams Grid
- Card-based layout with team headers
- List of team members with position numbers
- Member count footer
- Responsive 2-column layout on desktop

### Activities Table
- Sortable activity log
- Duration badges with color coding
- Average duration calculation
- Activity type categorization

### Leaderboard
- Medal emojis for top 3 positions (🥇🥈🥉)
- List view with team rankings
- Summary statistics card
- Sorted by points descending

### Workouts Cards
- Card grid layout with success headers
- Suggested participant badges
- Participant count footer
- Responsive 2-column layout

## 🔐 Authentication

The application includes built-in authentication through:
- **dj-rest-auth**: REST API endpoints for auth
- **django-allauth**: Full authentication support
- **CORS**: Cross-origin requests enabled

Future implementation: JWT tokens for secure API access

## 📊 Test Data

The application comes pre-populated with superhero test data:

**Users**: 
- 6 superheroes (3 Marvel, 3 DC)

**Teams**:
- Avengers (Marvel team)
- Justice League (DC team)

**Sample Activities**:
- Running, Weightlifting, Cycling workouts

**Leaderboard**:
- Current team rankings and points

**Workouts**:
- Personalized fitness plans

Access test data immediately after setup without needing manual entry.

## 🧪 Testing

### Backend Tests
```bash
cd octofit-tracker/backend
source venv/bin/activate
python manage.py test
```

### Frontend Tests
```bash
cd octofit-tracker/frontend
npm test
```

## 🚢 Deployment

### Django Deployment
```bash
# Collect static files
python manage.py collectstatic --noinput

# For production
gunicorn octofit_tracker.wsgi --bind 0.0.0.0:8000
```

### React Deployment
```bash
cd octofit-tracker/frontend
npm run build

# Serves the optimized build
serve -s build
```

## 🐛 Troubleshooting

### Django Issues
- **Import errors**: Ensure virtual environment is activated
- **Database connection**: Verify MongoDB is running on port 27017
- **API not accessible**: Check ALLOWED_HOSTS in settings.py

### React Issues
- **Components not rendering**: Check browser console for errors
- **API calls failing**: Verify Django backend is running on port 8000
- **Styling issues**: Ensure Bootstrap CSS is imported in index.js

### MongoDB Issues
- **Connection failed**: Start MongoDB: `mongod --dbpath /data/db`
- **Collections empty**: Run `python manage.py populate_db`

## 📋 Project Checklist

- [x] Django project created with Djongo/MongoDB integration
- [x] MongoDB database initialized with 5 collections
- [x] Test data populated with superheroes
- [x] Django REST API fully functional
- [x] CORS enabled for frontend communication
- [x] Codespace HTTPS URL support configured
- [x] React app created with npm
- [x] All 5 data components built with API integration
- [x] React Router navigation implemented
- [x] Bootstrap 5 styling applied consistently
- [x] Environment variables configured
- [x] API utility with centralized fetch logic
- [x] Responsive design for mobile/tablet
- [x] Error handling and loading states
- [x] Comprehensive documentation

## 📖 Documentation

For detailed styling information, see [STYLING_GUIDE.md](STYLING_GUIDE.md)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎓 Learning Resources

- [Django Documentation](https://docs.djangoproject.com/)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [React Documentation](https://react.dev/)
- [Bootstrap Documentation](https://getbootstrap.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)

## ✨ Future Enhancements

- User authentication with JWT tokens
- Real-time notifications
- Social features (likes, comments, shares)
- Advanced analytics dashboard
- Mobile app (React Native)
- Dark mode theme
- Multi-language support
- Performance optimization
- Advanced search and filtering
- User profile customization

---

**Built with ❤️ for fitness enthusiasts by the OctoFit team**
