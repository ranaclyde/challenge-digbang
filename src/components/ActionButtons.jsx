import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  ButtonGroup,
  Flex,
  Image,
  useDisclosure
} from '@chakra-ui/react'

import ModalCustom from './ModalCustom'
import { formatPrice } from '../utils/formatPrice'

const ActionButtons = ({ totalAmount, deadline, isDisabled }) => {
  // Métodos para el modal Crédito exitoso
  const {
    isOpen: isOpenSuccess,
    onOpen: onOpenSuccess,
    onClose: onCloseSuccess
  } = useDisclosure()

  // Métodos para el modal Detalles de cuotas
  const {
    isOpen: isOpenInfo,
    onOpen: onOpenInfo,
    onClose: onCloseInfo
  } = useDisclosure()

  return (
    <>
      <ButtonGroup display="flex">
        <Button
          colorScheme="teal"
          rounded="none"
          textTransform="uppercase"
          fontSize="sm"
          flexGrow={1}
          onClick={onOpenSuccess}
          isDisabled={isDisabled}
        >
          Obtené crédito
        </Button>
        <Button
          colorScheme="blue"
          rounded="none"
          width="120px"
          whiteSpace="normal"
          fontSize="xs"
          textTransform="uppercase"
          onClick={onOpenInfo}
          isDisabled={isDisabled}
        >
          Ver detalle de cuotas
        </Button>
      </ButtonGroup>
      <ModalCustom
        isOpen={isOpenSuccess}
        onClose={onCloseSuccess}
        title="Crédito exitoso"
        buttonLabel="Listo"
      >
        <Flex justifyContent="center">
          <Image
            boxSize="150px"
            objectFit="cover"
            src="ok.svg"
            alt="Dan Abramov"
          />
        </Flex>
      </ModalCustom>
      <ModalCustom
        isOpen={isOpenInfo}
        onClose={onCloseInfo}
        title="Detalle de cuotas"
        buttonLabel="Cerrar"
      >
        {`Vas a sacar un crédito por el monto de ${formatPrice(
          totalAmount
        )} en ${deadline} cuotas sin interés de
        ${formatPrice(totalAmount / deadline)} apróximadamente`}
      </ModalCustom>
    </>
  )
}

ActionButtons.propTypes = {
  totalAmount: PropTypes.number.isRequired,
  deadline: PropTypes.number.isRequired,
  isDisabled: PropTypes.bool.isRequired
}

export default ActionButtons
