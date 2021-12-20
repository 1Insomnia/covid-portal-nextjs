import { useColorMode } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { FiSun, FiMoon } from 'react-icons/fi'

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button onClick={toggleColorMode}>
      {colorMode === 'light' ? <FiMoon /> : <FiSun />}
    </Button>
  )
}

export default ThemeToggle
