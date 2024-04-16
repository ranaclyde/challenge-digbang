import { describe, expect, test } from "vitest";
import { formatPrice } from "../utils/formatPrice";

// https://github.com/testing-library/jest-dom/issues/376#issuecomment-885012111
const replaceString = (str) => str.replace(/\u00a0/g, ' ');

describe('formatPrice method', () => {
  test('Should show the correct price format', () => {
    const formattedPrice = formatPrice(5000)

    expect(replaceString(formattedPrice)).toBe('$ 5.000');
  })

  test('Should show the correct price format with two decimals', () => {
    const formattedPrice = formatPrice(9803930.87)

    expect(replaceString(formattedPrice)).toBe('$ 9.803.930,87');
  })

  test('Should show the correct price format with more than two decimals', () => {
    // Los numeros son redondeados
    const formattedPrice = formatPrice(10.0195523)

    expect(replaceString(formattedPrice)).toBe('$ 10,02');
  })
})