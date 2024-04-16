import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react'

const ModalCustom = ({
  isOpen,
  onClose,
  size = 'xs',
  title,
  children,
  buttonLabel
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>

        {buttonLabel && (
          <ModalFooter justifyContent="center">
            <Button
              size="sm"
              colorScheme="teal"
              rounded="none"
              textTransform="uppercase"
              onClick={onClose}
            >
              {buttonLabel}
            </Button>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  )
}

ModalCustom.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  size: PropTypes.string,
  title: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default ModalCustom
