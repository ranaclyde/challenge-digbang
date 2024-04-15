import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

const FlatFee = ({ value }) => {
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
        {formatPrice(value)}
      </Text>
    </Flex>
  )
}

export default FlatFee
