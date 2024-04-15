import React, { useEffect, useState } from 'react'
import { Flex, Text } from '@chakra-ui/react'
import {
  CREDIT_MAX_VALUE,
  CREDIT_MIN_VALUE,
  QUOTA_MAX_VALUE,
  QUOTA_MIN_VALUE,
} from '../const/credit'

const FlatFee = ({ totalAmount, deadline }) => {
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

  const formatPrice = (price) =>
    new Intl.NumberFormat('es-AR', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 0,
      style: 'currency',
      currency: 'ARS',
    }).format(price)

  return (
    <Flex
      mt={4}
      py={1}
      px={4}
      bgColor="#00355D"
      w="100%"
      alignItems="center"
      justifyContent="space-between"
    >
      <Text textTransform="uppercase" fontSize="xs" fontWeight="bold">
        Cuota fija por mes
      </Text>
      <Text fontSize="xl" fontWeight="bold">
        {isError ? '$ ---' : price}
      </Text>
    </Flex>
  )
}

export default FlatFee
