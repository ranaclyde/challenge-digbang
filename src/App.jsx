import React, { useEffect, useState } from 'react'
import { Box, Center, Text } from '@chakra-ui/react'
import InputSlider from './components/InputSlider'
import FlatFee from './components/FlatFee'
import {
  CREDIT_MAX_VALUE,
  CREDIT_MIN_VALUE,
  QUOTA_MAX_VALUE,
  QUOTA_MIN_VALUE,
} from './const/credit'
import ActionButtons from './components/ActionButtons'
import { formatPrice } from './utils/formatPrice'

function App() {
  const [totalAmount, setTotalAmount] = useState(5000)
  const [deadline, setDeadline] = useState(3)
  const [price, setPrice] = useState(0)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if (
      totalAmount > CREDIT_MAX_VALUE ||
      totalAmount < CREDIT_MIN_VALUE ||
      deadline > QUOTA_MAX_VALUE ||
      deadline < QUOTA_MIN_VALUE
    ) {
      setIsError(true)
    } else {
      setIsError(false)
      setPrice(formatPrice(totalAmount / deadline))
    }
  }, [totalAmount, deadline])

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
        <FlatFee isError={isError} price={price} />
        <ActionButtons
          isDisabled={isError}
          totalAmount={totalAmount}
          deadline={deadline}
        />
      </Box>
    </Center>
  )
}

export default App
