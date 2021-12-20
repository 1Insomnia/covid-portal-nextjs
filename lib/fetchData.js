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

// Get COVID-19 totals for all countries and their provinces
export const fetchTotalsCountries = async (date = '') => {
  const { data, error } = await fetchData(
    `https://disease.sh/v3/covid-19/countries?${date}=${date}&sort=cases`
  )
  return {
    data: data,
    error: error
  }
}
// 8625849
