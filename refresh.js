// Weekly refresh (Sunday midnight)
setInterval(() => {
  const now = new Date();
  if (now.getDay() === 0 && now.getHours() === 0 && now.getMinutes() === 0) {
    location.reload();
  }
}, 60000); // check every minute
