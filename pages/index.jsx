// React & Next
import Head from 'next/head'
import { useMemo } from 'react'
// lib
import { getLatestAllCountries, getLatestTotals } from '../lib/fetchData'
// Components
import DataTable from '../components/data/DataTable'
import Latest from '../components/data/Latest'
import BaseLink from '../components/navigation/BaseLink'
import { formatNumber } from '../lib/helpers'

const Home = ({ total, totalError, latestTotals, latestTotalsError }) => {
  const dataSet = [...total].sort((a, b) => b.confirmed - a.confirmed)

  const columns = useMemo(
    () => [
      {
        Header: 'Country',
        accessor: 'country',
        Cell: e => (
          <BaseLink
            href={`/country/${encodeURIComponent(e.value)}`}
            text={e.value}
          />
        )
      },
      {
        Header: 'Confirmed',
        accessor: 'confirmed',
        Cell: e => formatNumber(e.value)
      },
      {
        Header: 'Recovered',
        accessor: 'recovered',
        Cell: e => formatNumber(e.value)
      },
      {
        Header: 'Critical',
        accessor: 'critical',
        Cell: e => formatNumber(e.value)
      },
      {
        Header: 'Deaths',
        accessor: 'deaths',
        Cell: e => formatNumber(e.value)
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
        {!latestTotalsError && <Latest {...latestTotals[0]} />}
        {!totalError && <DataTable columns={columns} data={dataSet} />}
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
