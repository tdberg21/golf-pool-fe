export const scrubTournaments = tournies => {
  return tournies.map(tourn => {
    return {
      name: tourn.name,
      date: tourn.start_date,
      id: tourn.id,
      venue: {name: tourn.venue.name, city: tourn.venue.city, state: tourn.venue.state || 'n/a', country: tourn.venue.country}
    }
  })
}