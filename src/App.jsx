import { Box, Center, Text } from '@chakra-ui/react'

function App() {
  return (
    <Center h="100vh" bgColor="#084F85">
      <Box
        w="350px"
        h="400px"
        bgGradient="linear(to-b, #003B67, transparent)"
        color="white"
        p={5}
      >
        <Text
          color="white"
          textAlign="center"
          fontWeight="bold"
          fontSize="large"
        >
          Simulá tu crédito
        </Text>
      </Box>
    </Center>
  )
}

export default App
