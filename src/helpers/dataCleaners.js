export const scrubTournaments = tournies => {
  return tournies.map(tourn => {
    return {
      name: tourn.name,
      date: dateCleaner(tourn.start_date) || tourn.start_date,
      id: tourn.id,
      venue: { name: tourn.venue.name, city: tourn.venue.city, state: tourn.venue.state || tourn.venue.country, country: tourn.venue.country}
    }
  })
}

export const scrubGolfers = rawGolfers => {
  return rawGolfers.map(golfer => {
    const name = golfer["Name"].split(' ');
    const first_name = name[0];
    const last_name = name[name.length - 1];

    return {
      api_id: golfer.PlayerID,
      first_name,
      last_name,
      country: golfer.country,
      rank: golfer.WorldGolfRank,
      last_rank: golfer.WorldGolfRankLastWeek
    }
  })
}

const dateCleaner = date => {
  const splitDate = date.split('-');
  let month = findMonth(splitDate[1]);
  let cleanDate = month + ' ' + splitDate[2] + ',' + splitDate[0]
  return cleanDate;
}

const findMonth = number => {
  if (number === '01') {
    return 'January'
  }
  if (number === '02') {
    return 'February'
  }
  if (number === '03') {
    return 'March'
  }
  if (number === '04') {
    return 'April'
  }
  if (number === '05') {
    return 'May'
  }
  if (number === '06') {
    return 'June'
  }
  if (number === '07') {
    return 'July'
  }
  if (number === '08') {
    return 'August'
  }
  if (number === '09') {
    return 'September'
  }
  if (number === '10') {
    return 'October'
  }
  if (number === '11') {
    return 'November'
  }
  if (number === 12) {
    return 'December'
  }
}