async function loadData() {
  const quoteData = await fetch('assets/quotes.json').then(res => res.json());
  const affirmationData = await fetch('assets/affirmations.json').then(res => res.json());
  const playlistData = await fetch('assets/playlists.json').then(res => res.json());
  const workoutData = await fetch('assets/workouts.json').then(res => res.json());

  document.getElementById('quote-section').innerText = "Quote: " + quoteData[Math.floor(Math.random() * quoteData.length)];
  document.getElementById('affirmation-section').innerText = "Affirmation: " + affirmationData[Math.floor(Math.random() * affirmationData.length)];
  document.getElementById('playlist-section').innerText = "Playlist: " + playlistData[Math.floor(Math.random() * playlistData.length)].name;
  document.getElementById('workout-section').innerText = "Workout: " + workoutData[Math.floor(Math.random() * workoutData.length)];
  document.getElementById('surprise-section').innerText = "Power Line: Stay strong, stay glowing!";
}
window.onload = loadData;
