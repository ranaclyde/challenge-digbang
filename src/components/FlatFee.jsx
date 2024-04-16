import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Text } from '@chakra-ui/react'

const FlatFee = ({ isError, price }) => {
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
      <Text
        fontSize="xl"
        fontWeight="bold"
        color={isError ? 'red.500' : 'white'}
      >
        {isError ? '$ ---' : price}
      </Text>
    </Flex>
  )
}

FlatFee.propTypes = {
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isError: PropTypes.bool.isRequired
}

export default FlatFee
