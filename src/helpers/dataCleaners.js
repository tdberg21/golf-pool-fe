export const scrubTournaments = tournies => {
  return tournies.map(tourn => {
    return {
      name: tourn.name,
      date: tourn.start_date,
      id: tourn.id
    }
  })
}