import { fetchTotalsCountries } from '../lib/fetchData'
import Head from 'next/head'
import { useMemo } from 'react'
import { useRouter } from 'next/router'
import { Box, Flex, Heading, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

// activePerOneMillion: 1822.01
// casesPerOneMillion: 71620
// criticalPerOneMillion: 8.01
// deathsPerOneMillion: 1102
// oneCasePerPeople: 14
// oneDeathPerPeople: 908
// oneTestPerPeople: 2
// population: 2873194
// recoveredPerOneMillion: 68695.67
// tests: 1438741
// testsPerOneMillion: 500746
// updated: 1640006299461
// Components
import DataTable from './components/data/DataTable'

const Home = ({ data, error, currentPage }) => {
  const router = useRouter()
  console.log(currentPage)
  console.log(data)

  const columns = useMemo(
    () => [
      {
        Header: 'Country',
        accessor: 'country'
      },
      {
        Header: 'Total Cases',
        accessor: 'cases'
      },
      {
        Header: 'New Cases',
        accessor: 'todayCases'
      },
      {
        Header: 'Total Deaths',
        accessor: 'deaths'
      },
      {
        Header: 'New Deaths',
        accessor: 'todayDeaths'
      },
      {
        Header: 'Total Recovered',
        accessor: 'recovered'
      },
      {
        Header: 'New Recovered',
        accessor: 'todayRecovered'
      },
      {
        Header: 'Active Cases',
        accessor: 'active'
      },
      {
        Header: 'Critical',
        accessor: 'critical'
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
      <Box as="section">
        <Box mb={10}>
          <Heading as="h1" textAlign="center">
            COVID-19 CORONAVIRUS PANDEMIC
          </Heading>
        </Box>
        <Box>
          <Flex as="nav" align="center" gap={4} mb={8}>
            <NextLink href="/">
              <Link p={2} color="gray.50" bg="grassTeal">
                Today
              </Link>
            </NextLink>
            <NextLink href="?page=yesterday">
              <Link p={2} color="gray.50" bg="grassTeal">
                Yesterday
              </Link>
            </NextLink>
            <NextLink href="?page=twoDaysAgo">
              <Link p={2} color="gray.50" bg="grassTeal">
                Two Days Ago
              </Link>
            </NextLink>
          </Flex>
          <DataTable columns={columns} data={data} />
        </Box>
      </Box>
    </>
  )
}

export const getServerSideProps = async ({ query }) => {
  const currentPage = query.page ? query.page : ''
  const { data, error } = await fetchTotalsCountries(currentPage)

  return {
    props: {
      data: data,
      error: error,
      currentPage: currentPage
    }
  }
}

export default Home
