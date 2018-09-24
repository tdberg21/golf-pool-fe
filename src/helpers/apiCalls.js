// import { apiKey } from './apiKey.js';
let apiKey = process.env.API_KEY || process.env.api_key;

export const fetchTournaments = async () => {
  const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';

  const url = `${corsAnywhereUrl}http://api.sportradar.us/golf-t2/schedule/pga/2018/tournaments/schedule.json?api_key=${apiKey}`

  const response = await fetch(url, {
    method: 'GET'
  });
  const results = await response.json();

  return results;
}

export const fetchTournamentSummary = async (tournId) => {
  const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';

  const url = `${corsAnywhereUrl}http://api.sportradar.us/golf-t2/summary/pga/2018/tournaments/${tournId}/summary.json?api_key=${apiKey}`

  const response = await fetch(url, {
    method: 'GET'
  });
  const results = await response.json();

  return results;
}

// export const fetchLeaderboard = () => {
//   const url = `http://api.sportradar.us/golf-t2/leaderboard/pga/2018/tournaments/${tournament_id}/leaderboard.json?api_key=${apiKey}`

// }