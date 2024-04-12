import React from 'react'
import {
  Flex,
  InputGroup,
  InputLeftElement,
  NumberInput,
  NumberInputField,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
} from '@chakra-ui/react'

const CurrencyText = ({ numberText, showCurrencySymbol = false }) => {
  return (
    <Text color="gray.100" fontSize="sm">
      {showCurrencySymbol ? `$ ${numberText}` : numberText}
    </Text>
  )
}

const InputSlider = ({
  textLabel,
  minValue,
  maxValue,
  value,
  inputName,
  handleChange,
  showCurrencySymbol,
}) => {
  return (
    <>
      <Flex w="100%" justifyContent="space-between" alignItems="center" mb={3}>
        <Text
          textTransform="uppercase"
          color="gray.100"
          fontSize="sm"
          fontWeight="400"
        >
          {textLabel}
        </Text>
        <InputGroup maxW="100px" size="sm">
          {showCurrencySymbol && (
            <InputLeftElement pointerEvents="none" color="gray.300">
              $
            </InputLeftElement>
          )}
          <NumberInput
            name={inputName}
            value={value}
            onChange={handleChange}
            min={minValue}
            max={maxValue}
          >
            <NumberInputField
              fontWeight="bold"
              rounded="none"
              px={1}
              textAlign="center"
            />
          </NumberInput>
        </InputGroup>
      </Flex>
      <Flex w="100%" alignItems="center" flexDir="column">
        <Slider
          flex="1"
          focusThumbOnChange={false}
          value={value}
          onChange={handleChange}
          maxW="90%"
          min={minValue}
          max={maxValue}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb fontSize="sm" />
        </Slider>
        <Flex w="100%" justifyContent="space-between">
          <CurrencyText
            numberText={minValue}
            showCurrencySymbol={showCurrencySymbol}
          />
          <CurrencyText
            numberText={maxValue}
            showCurrencySymbol={showCurrencySymbol}
          />
        </Flex>
      </Flex>
    </>
  )
}

export default InputSlider
