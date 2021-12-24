import { getLatestCountryDataByName } from '../../lib/fetchData'
// Components
import Latest from '../../components/data/Latest'

const Name = ({ data, name, error }) => {
  return (
    <section>{!error && data && <Latest {...data} title={name} />}</section>
  )
}

export const getServerSideProps = async ({ params }) => {
  const { data, error } = await getLatestCountryDataByName(params.name)
  const dataSet = data[0] ? data[0] : null

  return {
    props: {
      data: dataSet,
      error: error,
      name: params.name
    }
  }
}

export default Name
