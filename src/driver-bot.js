// src/driver-bot.js (optional)
async function fetchSubscribers(apiUrl, token) {
  // token = simple API key you put in env for the serverless function
  const res = await fetch(apiUrl, {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) throw new Error('Failed to load subscribers');
  return res.json();
}
export { fetchSubscribers };