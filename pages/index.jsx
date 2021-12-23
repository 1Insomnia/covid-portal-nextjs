// React & Next
import Head from 'next/head'
import { useMemo } from 'react'
// lib
import { getLatestAllCountries, getLatestTotals } from '../lib/fetchData'
// Components
import DataTable from '../components/data/DataTable'
import LatestTotals from '../components/data/LatestTotals'

const Home = ({ total, totalError, latestTotals, latestTotalsError }) => {
  total.sort((a, b) => b.confirmed - a.confirmed)

  const columns = useMemo(
    () => [
      {
        Header: 'Country',
        accessor: 'country'
      },
      {
        Header: 'Confirmed',
        accessor: 'confirmed'
      },
      {
        Header: 'Recovered',
        accessor: 'recovered'
      },
      {
        Header: 'Critical',
        accessor: 'critical'
      },
      {
        Header: 'Deaths',
        accessor: 'deaths'
      }
    ],
    []
  )

  return (
    <>
      <Head>
        <title>Covid Portal - Homepage</title>
        <meta name="description" content="Covid Portal Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        {!latestTotalsError && <LatestTotals {...latestTotals[0]} />}
        {!totalError && <DataTable columns={columns} data={total} />}
      </section>
    </>
  )
}

export const getServerSideProps = async () => {
  const [total, totalError] = await getLatestAllCountries()
  const [latestTotals, latestTotalsError] = await getLatestTotals()

  return {
    props: {
      total: total,
      totalError: totalError,
      latestTotals: latestTotals,
      latestTotalsError: latestTotalsError
    }
  }
}

export default Home
