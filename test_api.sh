#!/bin/bash

# Test API endpoints
# This script tests the OctoFit Tracker API endpoints

BASE_URL="http://localhost:8000"

echo "Testing OctoFit Tracker API Endpoints"
echo "======================================"
echo ""

# Test API root
echo "1. Testing API root endpoint (/):"
curl -s "${BASE_URL}/" | python -m json.tool | head -20
echo ""
echo ""

# Test users endpoint
echo "2. Testing Users endpoint (/api/users/):"
curl -s "${BASE_URL}/api/users/" | python -m json.tool | head -30
echo ""
echo ""

# Test teams endpoint
echo "3. Testing Teams endpoint (/api/teams/):"
curl -s "${BASE_URL}/api/teams/" | python -m json.tool | head -30
echo ""
echo ""

# Test activities endpoint
echo "4. Testing Activities endpoint (/api/activities/):"
curl -s "${BASE_URL}/api/activities/" | python -m json.tool | head -30
echo ""
echo ""

# Test leaderboard endpoint
echo "5. Testing Leaderboard endpoint (/api/leaderboard/):"
curl -s "${BASE_URL}/api/leaderboard/" | python -m json.tool | head -30
echo ""
echo ""

# Test workouts endpoint
echo "6. Testing Workouts endpoint (/api/workouts/):"
curl -s "${BASE_URL}/api/workouts/" | python -m json.tool | head -30
echo ""

echo "API testing complete!"
