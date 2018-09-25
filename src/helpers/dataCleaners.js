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

const dateCleaner = date => {
  const splitDate = date.split('-');
  let month = findMonth(splitDate[1]);
  let cleanDate = month + ' ' + splitDate[2] + ',' + splitDate[0]
  return cleanDate;
}

const findMonth = number => {
  console.log(number)
  if (number == 1) {
    return 'January'
  }
  if (number == 2) {
    return 'February'
  }
  if (number == 3) {
    return 'March'
  }
  if (number == 4) {
    return 'April'
  }
  if (number == 5) {
    return 'May'
  }
  if (number == 6) {
    return 'June'
  }
  if (number == 7) {
    return 'July'
  }
  if (number == 8) {
    return 'August'
  }
  if (number == 9) {
    return 'September'
  }
  if (number === 10) {
    return 'October'
  }
  if (number === 11) {
    return 'November'
  }
  if (number === 12) {
    return 'December'
  }
}