import PropTypes from 'prop-types'
import { formatNumber } from '../../lib/helpers'

const LatestTotals = ({ confirmed, recovered, critical, deaths }) => (
  <div className="py-10">
    <h2 className="text-2xl text-center tracking-tight font-bold mb-10">
      World&apos;s Total
    </h2>
    <div className="text-center grid grid-cols-2 md:grid-cols-4 gap-4">
      <div>
        <h4 className="text-sm mb-1 text-yellow-500">Confirmed</h4>
        <p className="text-xl">{formatNumber(confirmed)}</p>
      </div>
      <div>
        <h4 className="text-sm mb-1 text-green-500">Recovered</h4>
        <p className="text-xl">{formatNumber(recovered)}</p>
      </div>
      <div>
        <h4 className="text-sm mb-1 text-orange-500">Critical</h4>
        <p className="text-xl">{formatNumber(critical)}</p>
      </div>
      <div>
        <h4 className="text-sm mb-1 text-red-500">Deaths</h4>
        <p className="text-xl">{formatNumber(deaths)}</p>
      </div>
    </div>
  </div>
)

LatestTotals.propTypes = {
  confirmed: PropTypes.number,
  recovered: PropTypes.number,
  critical: PropTypes.number,
  deaths: PropTypes.number
}

export default LatestTotals
