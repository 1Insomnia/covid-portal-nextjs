import { Box, Heading } from '@chakra-ui/react'

const Hero = () => {
  return (
    <Box mb={10}>
      <Heading
        as="h1"
        textAlign="center"
        fontWeight="bold"
        textTransform="uppercase"
      >
        Latest Covid19 data
      </Heading>
    </Box>
  )
}

export default Hero
