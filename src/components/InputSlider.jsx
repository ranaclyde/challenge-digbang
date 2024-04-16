import React from 'react'
import PropTypes from 'prop-types'
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
  Tooltip
} from '@chakra-ui/react'

const CurrencyText = ({ numberText, showCurrencySymbol = false }) => {
  return (
    <Text color="gray.100" fontSize="sm">
      {showCurrencySymbol ? `$ ${numberText}` : numberText}
    </Text>
  )
}

CurrencyText.propTypes = {
  numberText: PropTypes.number.isRequired,
  showCurrencySymbol: PropTypes.bool
}

const InputSlider = ({
  textLabel,
  minValue,
  maxValue,
  value,
  handleChange,
  showCurrencySymbol,
  decimalPoints = 2
}) => {
  const [showTooltip, setShowTooltip] = React.useState(false)

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
            value={value}
            onChange={handleChange}
            min={minValue}
            max={maxValue}
            precision={decimalPoints}
            clampValueOnBlur={false}
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
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <Tooltip
            hasArrow
            bg="teal.500"
            color="white"
            placement="top"
            isOpen={showTooltip}
            label={value}
          >
            <SliderThumb fontSize="sm" />
          </Tooltip>
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

InputSlider.propTypes = {
  numberText: PropTypes.number,
  textLabel: PropTypes.string.isRequired,
  minValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  showCurrencySymbol: PropTypes.bool,
  decimalPoints: PropTypes.number
}

export default InputSlider
