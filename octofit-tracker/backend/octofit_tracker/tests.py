from django.test import TestCase
from .models import User, Team, Activity, Leaderboard, Workout


class UserModelTest(TestCase):
    """Test User model"""
    def setUp(self):
        User.objects.create(name="Test User", email="test@example.com", team="Marvel")

    def test_user_creation(self):
        user = User.objects.get(email="test@example.com")
        self.assertEqual(user.name, "Test User")
        self.assertEqual(user.team, "Marvel")

    def test_user_unique_email(self):
        """Test that email field is unique"""
        with self.assertRaises(Exception):
            User.objects.create(name="Another User", email="test@example.com", team="DC")


class TeamModelTest(TestCase):
    """Test Team model"""
    def setUp(self):
        Team.objects.create(name="Marvel", members=["Iron Man", "Captain America"])

    def test_team_creation(self):
        team = Team.objects.get(name="Marvel")
        self.assertIn("Iron Man", team.members)


class ActivityModelTest(TestCase):
    """Test Activity model"""
    def setUp(self):
        Activity.objects.create(user="Superman", activity="Flight", duration=60)

    def test_activity_creation(self):
        activity = Activity.objects.get(user="Superman")
        self.assertEqual(activity.activity, "Flight")
        self.assertEqual(activity.duration, 60)


class LeaderboardModelTest(TestCase):
    """Test Leaderboard model"""
    def setUp(self):
        Leaderboard.objects.create(team="Marvel", points=150)

    def test_leaderboard_creation(self):
        leaderboard = Leaderboard.objects.get(team="Marvel")
        self.assertEqual(leaderboard.points, 150)


class WorkoutModelTest(TestCase):
    """Test Workout model"""
    def setUp(self):
        Workout.objects.create(name="Strength Training", suggested_for=["Superman"])

    def test_workout_creation(self):
        workout = Workout.objects.get(name="Strength Training")
        self.assertIn("Superman", workout.suggested_for)
