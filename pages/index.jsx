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
        Cell: e => (
          <span className="text-yellow-500">{formatNumber(e.value)}</span>
        )
      },
      {
        Header: 'Recovered',
        accessor: 'recovered',
        Cell: e => (
          <span className="text-green-500">{formatNumber(e.value)}</span>
        )
      },
      {
        Header: 'Critical',
        accessor: 'critical',
        Cell: e => (
          <span className="text-orange-500">{formatNumber(e.value)}</span>
        )
      },
      {
        Header: 'Deaths',
        accessor: 'deaths',
        Cell: e => <span className="text-red-500">{formatNumber(e.value)}</span>
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
        {!latestTotalsError && (
          <Latest {...latestTotals[0]} title="Total World" />
        )}
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
