# Sneha Life Reboot — 6 Months (Expo iOS App)

Fully preloaded with 26 weeks of progressive workouts, 26 weeks of meal plans, 300 unique power lines, 190 affirmations, and 180 celebrations. No placeholders. Daily content rotates automatically by date — no manual steps required.

## Quick Start
npm i
npm start

## Build for iOS
npx expo prebuild

## Data
- src/data/workouts.json — 26 progressive weeks (deload every 4th week).
- src/data/mealPlans.json — 26 weekly menus (vegetarian + optional eggs, paneer preferred, no oats for husband, baby finger foods).
- src/data/quotes.json — 300 unique power lines.
- src/data/affirmations.json — 190 affirmations.
- src/data/celebrations.json — 180 celebration ideas.
- src/data/courses.json — curated AI & analytics courses.

## Auto-Refresh
- Home computes daily items by date and refreshes hourly in-app.
- Optional: npm run refresh to pre-bake src/data/daily.json.
