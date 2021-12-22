const fetchData = async url => {
  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error(response.statusText)
    const data = await response.json()
    return {
      data: data,
      error: null
    }
  } catch (error) {
    return {
      data: null,
      error: error
    }
  }
}

export const getLatestAllCountries = async () => {
  const { data, error } = await fetchData(
    'https://covid19-api.com/country/all?format=json'
  )
  return [data, error]
}

export const getLatestTotals = async () => {
  const { data, error } = await fetchData(
    'https://covid19-api.com/totals?format=json'
  )
  return [data, error]
}
