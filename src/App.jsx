import React from 'react'
import { Box, Center, Text } from '@chakra-ui/react'
import InputSlider from './components/InputSlider'
import FlatFee from './components/FlatFee'
import {
  CREDIT_MAX_VALUE,
  CREDIT_MIN_VALUE,
  QUOTA_MAX_VALUE,
  QUOTA_MIN_VALUE,
} from './const/credit'

function App() {
  const [totalAmount, setTotalAmount] = React.useState(5000)
  const [deadline, setDeadline] = React.useState(3)

  const flatFeeValue = totalAmount / deadline

  return (
    <Center h="100vh" bgColor="#084F85">
      <Box
        w="350px"
        h="400px"
        bgGradient="linear(to-b, #003B67, transparent)"
        color="white"
        p={5}
      >
        <Text color="white" textAlign="center" fontWeight="bold" fontSize="xl">
          Simulá tu crédito
        </Text>
        <Box mt={5}>
          <InputSlider
            textLabel="Monto total"
            minValue={CREDIT_MIN_VALUE}
            maxValue={CREDIT_MAX_VALUE}
            value={totalAmount}
            handleChange={(value) => setTotalAmount(value)}
            showCurrencySymbol
          />
        </Box>
        <Box mt={5}>
          <InputSlider
            textLabel="Plazo"
            minValue={QUOTA_MIN_VALUE}
            maxValue={QUOTA_MAX_VALUE}
            value={deadline}
            handleChange={(value) => setDeadline(value)}
            decimalPoints={0}
          />
        </Box>
        <FlatFee value={flatFeeValue} />
      </Box>
    </Center>
  )
}

export default App
