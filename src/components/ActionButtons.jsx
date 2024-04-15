import React from 'react'
import {
  Button,
  ButtonGroup,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

const ActionButtons = ({ isDisabled }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <ButtonGroup display="flex">
        <Button
          colorScheme="teal"
          rounded="none"
          textTransform="uppercase"
          flexGrow={1}
          onClick={onOpen}
          isDisabled={isDisabled}
        >
          Obtené crédito
        </Button>
        <Button
          colorScheme="blue"
          rounded="none"
          width="120px"
          whiteSpace="normal"
          fontSize="small"
          textTransform="uppercase"
        >
          Ver detalle de cuotas
        </Button>
      </ButtonGroup>
      <Modal isOpen={isOpen} onClose={onClose} size="xs">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Crédito exitoso</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Ok</ModalBody>

          <ModalFooter justifyContent="center">
            <Button
              size="sm"
              colorScheme="teal"
              rounded="none"
              textTransform="uppercase"
              onClick={onClose}
            >
              Listo
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ActionButtons
