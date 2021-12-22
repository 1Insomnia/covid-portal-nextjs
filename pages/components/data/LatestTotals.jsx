import PropTypes from 'prop-types'
import {
  Box,
  Heading,
  StatGroup,
  Stat,
  StatLabel,
  StatNumber
} from '@chakra-ui/react'

const LatestTotals = ({ confirmed, recovered, critical, deaths }) => (
  <Box as="article">
    <Heading as="h2" textAlign="center" mb={10}>
      World&apos;s Total
    </Heading>
    <StatGroup textAlign="center">
      <Stat>
        <StatLabel>Confirmed</StatLabel>
        <StatNumber>{confirmed}</StatNumber>
      </Stat>
      <Stat>
        <StatLabel>Recovered</StatLabel>
        <StatNumber>{recovered}</StatNumber>
      </Stat>
      <Stat>
        <StatLabel>Critical</StatLabel>
        <StatNumber>{critical}</StatNumber>
      </Stat>
      <Stat>
        <StatLabel>Deaths</StatLabel>
        <StatNumber>{deaths}</StatNumber>
      </Stat>
    </StatGroup>
  </Box>
)

LatestTotals.propTypes = {
  confirmed: PropTypes.number,
  recovered: PropTypes.number,
  critical: PropTypes.number,
  deaths: PropTypes.number
}

export default LatestTotals
