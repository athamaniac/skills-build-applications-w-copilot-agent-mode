from djongo import models


class User(models.Model):
    """User model for octofit_db.users collection"""
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    team = models.CharField(max_length=50, blank=True)

    class Meta:
        db_table = 'users'


class Team(models.Model):
    """Team model for octofit_db.teams collection"""
    name = models.CharField(max_length=100)
    members = models.JSONField(default=list, blank=True)

    class Meta:
        db_table = 'teams'


class Activity(models.Model):
    """Activity model for octofit_db.activities collection"""
    user = models.CharField(max_length=100)
    activity = models.CharField(max_length=100)
    duration = models.IntegerField()

    class Meta:
        db_table = 'activities'


class Leaderboard(models.Model):
    """Leaderboard model for octofit_db.leaderboard collection"""
    team = models.CharField(max_length=100)
    points = models.IntegerField()

    class Meta:
        db_table = 'leaderboard'


class Workout(models.Model):
    """Workout model for octofit_db.workouts collection"""
    name = models.CharField(max_length=100)
    suggested_for = models.JSONField(default=list, blank=True)

    class Meta:
        db_table = 'workouts'
